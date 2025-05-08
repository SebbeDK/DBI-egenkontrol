<script setup>
import { ref, computed } from 'vue';
import BackToTop from '../components/BackToTop.vue';
import DisplayLayoutButtons from '../components/DisplayLayoutButtons.vue';
import SeeMore from '../components/SeeMore.vue';
import FileCard from '@/components/FileCard.vue';
import SortFilter from '../components/SortFilter.vue';


const templates = ref([
    {
        title: "ABA månedskontrol",
        date: "21/2/2025",
        uses: 25
    },
    {
        title: "ABV-anlæg (Månedlig)",
        date: "13/4/2025",
        uses: 120
    },
    {
        title: "ABV månedskontrol",
        date: "02/11/2024",
        uses: 32
    }
]);

const sortBy = ref('none');

const sortedTemplates = computed(() => {
  let arr = [...templates.value];
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


</script>

<template>
    <div class="page-content">
        <div class="go-back">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
            <h5>Tilbage til dine skemaer</h5>
        </div>
        <div class="breadcrum">
            <h3 class="alm">Skemaer</h3>
            <font-awesome-icon :icon="['far', 'circle']" />
            <h3 class="alm">Skema</h3>
            <font-awesome-icon :icon="['far', 'circle']" />
            <h3>Tilgængelige skabeloner</h3>
        </div>
        <div class="sort-and-display">
            <SortFilter @sort="sortBy = $event"></SortFilter>
            <display-layout-buttons></display-layout-buttons>
        </div>
        <div class="file-cards">
            <FileCard v-for="template of sortedTemplates" 
            :key="template.title" 
            :title="template.title" 
            :date="template.date"></FileCard>
        </div>


        <div>
            <see-more></see-more>
            <back-to-top></back-to-top>
        </div>

    </div>
</template>

<style scoped>

.file-cards{
  display: flex;
  margin: 3rem 0;
}

.file-cards div{
    margin-left: 2rem;
}

.file-cards div:first-of-type{
    margin-left: 0rem;
}

h3{
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
}

.alm {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
}
select{
    border-radius: 5px;
    border: 2px solid #bababa;
    background-color: #f3f4f3;
    padding: 0.5rem;
    font-weight: bold;
}

.breadcrum{
    display: flex;
    margin: 0 0 2rem 0;
}
.breadcrum svg{
    margin: 0.5rem 1rem;
    font-size: 10px;
}

.go-back{
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;

}

.go-back svg{
    margin: 1.4rem 0.5rem 2rem 0;
}

h5{
    font-weight: lighter;
}

.sort-and-display{
    display: flex;
    margin-top: 1rem;
}
</style>