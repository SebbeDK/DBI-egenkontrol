<script setup>
import CreateFileCard from '@/components/CreateFileCard.vue';
import BackToTop from '../components/BackToTop.vue';
import DisplayLayoutButtons from '../components/DisplayLayoutButtons.vue';
import FileCardComponent from '../components/FileCard.vue'
import FolderBtn from '../components/FolderBtn.vue'
import NewFolder from '../components/NewFolder.vue';
import SeeMore from '../components/SeeMore.vue';
import SelectOption from '../components/SelectOption.vue';

// Data til kortene
const cards = [
   {
    title: 'ABA månedskontrol',
    date: '10/02/2025'
  },
  {
    title: 'AIA',
    date: '10/02/2025'
  },
  {
    title: 'ABA månedskontrol',
    date: '10/02/2025'
  },
]
</script>

<template>
    <h3>Skemaer</h3>
    <div class="flex-container">
        <form action="">
          <select-option></select-option>
        </form>
        <display-layout-buttons></display-layout-buttons>
      <new-folder></new-folder>
    </div>
    <div class="file-containers">
        <h4>Mapper</h4>
        <folder-btn :title="'januar 2025'"></folder-btn>
        <folder-btn :title="'februar 2025'"></folder-btn>
    </div>
    <div class="files">
        <h4>Filer</h4>
        <div class="file-cards">
            <CreateFileCard></CreateFileCard>
            <FileCardComponent 
                v-for="card in cards"
                :key="card.title"
                :title="card.title"
                :date="card.date"
            />
        </div> 
    </div> 
    <see-more></see-more>
    <back-to-top></back-to-top>
</template>

<style scoped>

h3{
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 1.5rem;
    margin: 3rem 2rem 3rem;
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

.file-containers button{
    margin-left: 2rem;
}

.file-containers :first-of-type{
    margin-left: 0rem;
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

</style>