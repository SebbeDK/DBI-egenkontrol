<script setup>
import { ref, computed } from 'vue';
import CreateFileCard from '@/components/CreateFileCard.vue';
import BackToTop from '../components/BackToTop.vue';
import DisplayLayoutButtons from '../components/DisplayLayoutButtons.vue';
import FileCard from '../components/FileCard.vue'
import FolderBtn from '../components/FolderBtn.vue'
import NewFolder from '../components/NewFolder.vue';
import SeeMore from '../components/SeeMore.vue';
import SelectOption from '../components/SelectOption.vue';

const selectedFolderIndex = ref(null);

function selectFolder(index) {
  selectedFolderIndex.value = index;
}

const editingFolderIndex = ref(null);
const editingFolderTitle = ref('');

// info på cards
const folders = ref([
   { 
        title: 'januar 2025',
        files: [
            {
                title: "Dansk",
                date: "21/1/2025"
            }
        ]
    },
    { 
        title: 'februar 2025',
        files: [
            {
                title: "Månedskontrol",
                date: "1/2/2025"
            },
            {
                title: "AIA",
                date: "10/2/2025"
            }
        ]
    },
]);

function startEditingFolder(index) {
  editingFolderIndex.value = index;
  editingFolderTitle.value = folders.value[index].title;
 
}

function saveFolderTitle(index) {
  if (editingFolderTitle.value.trim() !== '') {
    folders.value[index].title = editingFolderTitle.value.trim();
  }
  editingFolderIndex.value = null;
}

function cancelEditing() {
  editingFolderIndex.value = null;
}


function addFolder() {
  folders.value.push({ title: "Ny Mappe", files: [] });
}

</script>

<template>
    <h3>Skemaer</h3>
    <div class="flex-container">
        <form action="">
          <select-option></select-option>
        </form>
        <display-layout-buttons></display-layout-buttons>
      <new-folder @click="addFolder"></new-folder>
    </div>
    <div class="file-containers">
        <h4>Mapper</h4>
        <template v-for="(folder, index) in folders" :key="folder.title">
            <div style="display: inline-block;">

                <!-- hvis redigering - vis input -->
                <template v-if="editingFolderIndex === index">
                <input
                    v-model="editingFolderTitle"
                    @blur="saveFolderTitle(index)"
                    @keyup.enter="saveFolderTitle(index)"
                    @keyup.esc="cancelEditing"
                    ref="editInput"
                    style="font-size: 1rem; padding: 0.3em; width: 120px;"
                    :autofocus="true"
                />
                </template>
                <template v-else>
                <folder-btn
                    :title="folder.title"
                    @click="selectFolder(index)"
                    @dblclick.stop="startEditingFolder(index)"
                    :class="{ selected: selectedFolderIndex === index }"
                />
                </template>
            </div>
        </template>

    </div>
    <div class="files">
        <h4>Filer</h4>
        <div class="file-cards">
            <div>
            <router-link to="/skemaer/skema/start">
                <CreateFileCard />
            </router-link>
            </div>

            <!-- viser filer i den valgte mappe-->
            <template v-if="selectedFolderIndex !== null">
            <FileCard
                v-for="file in folders[selectedFolderIndex].files"
                :key="file.title"
                :title="file.title"
                :date="file.date"
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

h3{
    font-family: Arial, Helvetica, sans-serif;
    margin: 3rem 1.5rem 3rem;
}

.flex-container{
    display: flex;
}

.file-containers{
    border: none;
    margin-left: 1.5rem;
}

.file-containers, h4{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    color: #bababa;
    font-size: 19px;
}

.file-containers button, .file-containers input{
    margin-left: 2rem;
}

.file-containers div:first-of-type button, 
.file-containers div:first-of-type input{
    margin-left:0;
}


.files{
    margin-left: 1.5rem;
}

.file-cards{
  display: flex;
  
}

.file-cards div{
    margin-left: 2rem;
}

.file-cards div:first-of-type{
    margin-left: 0rem;
}

.bottom-links{
    margin: 2rem 1.5rem 3rem;
}
</style>