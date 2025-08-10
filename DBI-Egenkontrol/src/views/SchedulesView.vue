<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'; 
import { useRouter } from 'vue-router';
const router = useRouter();

import CreateFileCard from '@/components/CreateFileCard.vue';
import BackToTop from '../components/BackToTop.vue';
import DisplayLayoutButtons from '../components/DisplayLayoutButtons.vue';
import FileCard from '../components/FileCard.vue' 
import FolderBtn from '../components/FolderBtn.vue'
import NewFolder from '../components/NewFolder.vue';
import SeeMore from '../components/SeeMore.vue';
import SortFilter from '../components/SortFilter.vue';
import { useUserStore } from '@/stores/userStore';
const userStore = useUserStore();

console.log('Er admin?', userStore.isAdmin);

import {
  createFolder,
  subscribeToFolders,
  updateFolder,
  deleteFolder,
  subscribeToFilesInFolder,
  deleteFileInFolder
} from '../services/FirestoreService'; 


const folders = ref([]);

const selectedFolderId = ref(null);


const editingFolderId = ref(null); 
const editingFolderTitle = ref(''); 


const filesInSelectedFolder = ref([]);

const sortBy = ref('none');


let unsubscribeFolders = null;
let unsubscribeFiles = null;



onMounted(() => {

  unsubscribeFolders = subscribeToFolders((fetchedFolders) => {
    folders.value = fetchedFolders; 

    
    if (selectedFolderId.value && !fetchedFolders.some(f => f.id === selectedFolderId.value)) {
      selectedFolderId.value = null;
    }
   
    if (selectedFolderId.value === null && fetchedFolders.length > 0) {
      selectedFolderId.value = fetchedFolders[0].id;
    }
  });
});


onUnmounted(() => {
  if (unsubscribeFolders) unsubscribeFolders(); 
  if (unsubscribeFiles) unsubscribeFiles();     
});


watch(selectedFolderId, (newFolderId) => {
  
  if (unsubscribeFiles) unsubscribeFiles();

  if (newFolderId) {
    
    
    unsubscribeFiles = subscribeToFilesInFolder(newFolderId, (fetchedFiles) => {
      filesInSelectedFolder.value = fetchedFiles; 
    });
  } else {
    
    filesInSelectedFolder.value = [];
  }
}, { immediate: true }); 



function selectFolder(folderId) {
  selectedFolderId.value = folderId; 
}


function startEditingFolder(folderId, currentTitle) {
  editingFolderId.value = folderId;        
  editingFolderTitle.value = currentTitle; 
}


async function saveFolderTitle(folderId) {
  
  if (editingFolderTitle.value.trim() !== '') {
    try {
      
      await updateFolder(folderId, { title: editingFolderTitle.value.trim() });
    } catch (e) {
      console.error("Fejl ved opdatering af mappetitel:", e);
      
    }
  }
  editingFolderId.value = null; 
}


function cancelEditing() {
  editingFolderId.value = null; 
}


async function addFolder() {
  try {
    const newFolderData = {
      title: "Ny Mappe",        
      createdAt: new Date(),    
    };
    
    const createdFolder = await createFolder(newFolderData);
    selectedFolderId.value = createdFolder.id; 
  } catch (e) {
    console.error("Fejl ved tilføjelse af mappe:", e);
  }
}


async function deleteSelectedFolder() {
  
  if (!selectedFolderId.value) return;

  if (window.confirm("Er du sikker på du vil slette den valgte mappe og dens filer?")) {
    try {
      
      await deleteFolder(selectedFolderId.value);
      selectedFolderId.value = null; 
    } catch (e) {
      console.error("Fejl ved sletning af mappe:", e);
    }
  }
}




const sortedFiles = computed(() => {
  
  let arr = [...filesInSelectedFolder.value];

  
  if (sortBy.value === 'newest') {
    
    arr.sort((a, b) => (b.date ? b.date.toDate().getTime() : 0) - (a.date ? a.date.toDate().getTime() : 0));
  } else if (sortBy.value === 'oldest') {
    
    arr.sort((a, b) => (a.date ? a.date.toDate().getTime() : 0) - (b.date ? b.date.toDate().getTime() : 0));
  } else if (sortBy.value === 'mostUsed') {
    
    arr.sort((a, b) => (b.uses || 0) - (a.uses || 0));
  }
  return arr;
});


async function handleDeleteFileInFolder(fileIdToDelete) {
  
  if (!selectedFolderId.value) {
    alert("Vælg venligst en mappe, før du forsøger at slette en fil!");
    return;
  }
  if (window.confirm("Er du sikker på du vil slette denne fil?")) {
    try {
      
      await deleteFileInFolder(selectedFolderId.value, fileIdToDelete);
      
    } catch (e) {
      console.error("Fejl ved sletning af fil:", e);
    }
  }
}

function handleEditFile({ fileId }) {
  if (!selectedFolderId.value) {
    alert("Vælg en mappe først!");
    return;
  }
  router.push(`/skemaer/skema/start/${selectedFolderId.value}/${fileId}`);
}



</script>

<template>
    <h3>Skemaer</h3>
    <div class="flex-container">
        <SortFilter @sort="sortBy = $event"></SortFilter>
        <display-layout-buttons></display-layout-buttons>
      <new-folder @click="addFolder"></new-folder>
      
      <button v-if="selectedFolderId && (userStore.isAdmin || folders.find(f => f.id === selectedFolderId)?.created_by === userStore.currentUserId)" @click="deleteSelectedFolder" class="delete-folder-btn">Slet valgt mappe</button>
    </div>

    <div class="file-containers">
        <h4>Mapper</h4>
        
        <p v-if="folders.length === 0">Ingen mapper fundet. Opret en!</p>
       
        <template v-for="folder in folders" :key="folder.id">
            <div style="display: inline-block;">
               
                <template v-if="editingFolderId === folder.id">
                    <input
                      v-model="editingFolderTitle"
                      @blur="saveFolderTitle(folder.id)"
                      @keyup.enter="saveFolderTitle(folder.id)"
                      @keyup.esc="cancelEditing"
                      class="edit-folder-input"
                    />
                </template>
               
                <template v-else>
                    <folder-btn
                        :title="folder.title"
                        @click="selectFolder(folder.id)"
                        @dblclick.stop="startEditingFolder(folder.id, folder.title)"
                        :class="{ selected: selectedFolderId === folder.id }"
                    />
                </template>
            </div>
        </template>
    </div>

    <div class="files">
        <h4>Filer</h4>
        <div class="file-cards">
            <div class="file-card__create">
               
                <router-link :to="selectedFolderId ? `/skemaer/skema/start?folderId=${selectedFolderId}` : '/skemaer/skema/start'">
                    <CreateFileCard />
                </router-link>
            </div>
            
           
            <template v-if="selectedFolderId === null">
                <p>Vælg en mappe for at se eller oprette filer.</p>
            </template>
            
            <template v-else>
                
                <p v-if="sortedFiles.length === 0">Ingen filer i denne mappe. Opret en!</p>
                
                <FileCard
                    v-for="file in sortedFiles"
                    :key="file.id"
                    :id="file.id"
                    :title="file.title"
                    :date="file.date ? new Date(file.date.seconds * 1000).toLocaleDateString('da-DK') : 'Ukendt Dato'"
                    :canDelete="userStore.isAdmin || file.created_by === userStore.currentUserId"
                    :canEdit="userStore.isAdmin || file.created_by === userStore.currentUserId"
                    @delete="handleDeleteFileInFolder"
                    @edit="handleEditFile" 
                    />
            </template>

            
        </div>
    </div>
    
    <div class="bottom-links"> 
        <see-more></see-more>
        <BackToTop></BackToTop>
    </div>
</template>

<style scoped>

.selected {
  background: #e0e0e0;
  
}
.file-card__create{
    cursor: pointer;
}
h3{
    font-family: "League Spartan";
    margin: 3rem 1.5rem 3rem;
}

.flex-container{
    display: flex;
    align-items: center; 
}

.flex-container .dropdown{
    margin-left: 1.5rem;
}
.file-containers{
    border: none;
    margin-left: 1.5rem;
}

.file-containers, h4{
    font-family: "League Spartan";
    font-weight: lighter;
    color: #bababa;
    font-size: 24px;
}

.file-containers button, .file-containers input{
    margin-left: 2rem;
}

.file-containers div:first-of-type button, 
.file-containers div:first-of-type input{
    margin-left:0;
}

.edit-folder-input {
  font-size: 1rem;
  padding: 0.3em;
  width: 120px;
}


.files{
    margin-left: 1.5rem;
}

.file-cards{
  display: flex;
  flex-wrap: wrap; 
  gap: 2rem; 
}

.bottom-links{
    margin: 2rem 1.5rem 3rem;
}
.delete-folder-btn {
  margin-left: 20px; 
  background-color: #f44336; 
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.delete-folder-btn:hover {
  background-color: #da190b;
}
</style>