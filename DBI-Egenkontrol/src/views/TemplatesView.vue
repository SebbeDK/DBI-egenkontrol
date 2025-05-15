<script setup>
import BackToTop from '../components/BackToTop.vue';
import DisplayLayoutButtons from '../components/DisplayLayoutButtons.vue';
import SeeMore from '../components/SeeMore.vue';
import FileCard from '@/components/FileCard.vue';
import SortFilter from '../components/SortFilter.vue';

</script>

<template>
    <div class="page-content">
        <router-link to="/skemaer/skema/start">
            <div class="go-back">
                <font-awesome-icon :icon="['fas', 'arrow-left']" />
                <h5>Tilbage til dine skemaer</h5>
            </div>
        </router-link>
        <div class="breadcrum">
            <h3 class="alm">Skemaer</h3>
            <font-awesome-icon :icon="['far', 'circle']" />
            <h3>Tilgængelige skabeloner</h3>
        </div>
        <div class="sort-and-display">
            <SortFilter></SortFilter>
            <display-layout-buttons></display-layout-buttons>
        </div>
        <div class="file-cards">
            <router-link to="/skemaer/skema/skabelon">
                <FileCard :title="'ABA månedskontrol'"></FileCard>
            </router-link>
            <FileCard :title="'ABV-anlæg (Månedlig)'"></FileCard>
        </div>

        <div>
            <see-more></see-more>
            <back-to-top></back-to-top>
        </div>

    </div>
</template>

<style scoped>
a{
    text-decoration: none;
    color: black;
    margin-right: 25px; 
}

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
    font-family: "League Spartan";
    margin: 0;
}

.alm {
    font-family: "League Spartan";
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
    font-family: "League Spartan";
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