<script setup>
import { ref, computed } from 'vue';
import CreateFileCard from '@/components/CreateFileCard.vue';
import BackToTop from '../components/BackToTop.vue';
import DisplayLayoutButtons from '../components/DisplayLayoutButtons.vue';
import FileCard from '../components/FileCard.vue'
import FolderBtn from '../components/FolderBtn.vue'
import NewFolder from '../components/NewFolder.vue';
import SeeMore from '../components/SeeMore.vue';
import SortFilter from '../components/SortFilter.vue';
import { useForms } from '@/useForms';
import FormList from '@/components/FormList.vue';

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
                date: "21/1/2025",
                uses: 34
            }
        ]
    },
    { 
        title: 'februar 2025',
        files: [
            {
                title: "Månedskontrol",
                date: "1/2/2025",
                uses: 55
            },
            {
                title: "AIA",
                date: "10/2/2025",
                uses: 12
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

const sortBy = ref('none');

const sortedFiles = computed(() => {
  if (selectedFolderIndex.value === null) return [];
  const files = folders.value[selectedFolderIndex.value].files || [];
  let arr = [...files];
  if (sortBy.value === 'newest') {
    arr.sort((a, b) => parseDate(b.date) - parseDate(a.date));
  } else if (sortBy.value === 'oldest') {
    arr.sort((a, b) => parseDate(a.date) - parseDate(b.date));
  } else if (sortBy.value === 'mostUsed') {
    arr.sort((a, b) => b.uses - a.uses);
  }
  return arr;
});


function parseDate(str) {
  const [day, month, year] = str.split('/').map(Number);
  return new Date(year, month - 1, day);
}


const { forms } = useForms()


</script>

<template>
    <h3>Skemaer</h3>
    <div class="flex-container">
        <SortFilter @sort="sortBy = $event"></SortFilter>

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
  :autofocus="true"
  class="edit-folder-input"
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
            <div class="file-card__create">
            <router-link to="/skemaer/skema/start">
                <CreateFileCard />
            </router-link>
            </div>
            <FormList/>

            <!-- viser filer i den valgte mappe-->
            <template v-if="selectedFolderIndex !== null">
                <FileCard
                    v-for="file in sortedFiles"
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
.file-card__create{
    cursor: pointer;
}
h3{
    font-family: "League Spartan";
    margin: 3rem 1.5rem 3rem;
}

.flex-container{
    display: flex;
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