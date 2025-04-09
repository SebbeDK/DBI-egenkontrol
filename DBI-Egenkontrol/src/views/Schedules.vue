<script setup>
import UploadFileCardComponent from '@/components/UploadFileCardComponent.vue';
import FileCardComponent from '../components/FileCardComponents.vue'

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
            <select name="" id="">
                <option value="">Valgt: alle</option>
            </select>
        </form>
        <div class="display-layouts">
            <button class="list-layout">
                <font-awesome-icon :icon="['fas', 'list-ul']" />
            </button>
            <button class="card-layout">
                <font-awesome-icon :icon="['fas', 'grip']" />
            </button>
        </div>
        <div class="save">
            <button>
                <font-awesome-icon :icon="['fas', 'folder-plus']" />
            </button>
        </div>
    </div>
    <div class="file-containers">
        <h4>Mapper</h4>
        <button>
            <font-awesome-icon :icon="['far', 'folder']" /> januar 2025</button>
        <button>
            <font-awesome-icon :icon="['far', 'folder']" /> februar 2025</button>
    </div>
    <div class="files">
        <h4>Filer</h4>
        <div class="file-cards">
            <UploadFileCardComponent></UploadFileCardComponent>
            <FileCardComponent 
                v-for="card in cards"
                :key="card.title"
                :title="card.title"
                :date="card.date"
            />
        </div> 
    </div> 
    <button class="view-more-btn">Se flere...</button>
    <button class="to-top-btn">
        Tilbage til toppen <font-awesome-icon :icon="['fas', 'arrow-up']" />
        </button>
</template>

<style scoped lang="css">

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

select{
    border-radius: 5px;
    border: 2px solid #bababa;
    background-color: #f3f4f3;
    padding: 0.5rem;
    margin-left: 1.5rem;
    font-weight: bold;
}

.display-layouts button{
    border-radius: 5px;
    border: 2px solid #bababa;
    background-color: #f3f4f3;
    padding: 0.5rem;
}

.display-layouts{
    margin-left: 2rem;
}

.save button{
    border-radius: 5px;
    border: 2px solid #bababa;
    background-color: #f3f4f3;
    padding: 0.5rem;
    margin-left: 1.5rem;
}

.file-containers, h4{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    color: #bababa;
    font-size: 19px;
}

.file-containers button{
    border-radius: 5px;
    border: 2px solid #bababa;
    background-color: #f3f4f3;
    padding: 0.5rem;
    font-weight: bold;
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
.view-more-btn {
    border: none;
    background-color: white;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 1.5rem;
    margin-top: 3.5rem;
}

.to-top-btn{
    border: none;
    background-color: white;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 37rem;
}
</style>