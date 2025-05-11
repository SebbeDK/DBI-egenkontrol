<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToSkabelon() {
  router.push('/skemaer/skema/opret')
}
</script>

<template>
    <div class="container" @click="goToSkabelon()">
        <h3>Kopiér fra en tilgængelig skabelon</h3>
        <p>Kopiér et eksisterende skema og tilpas <br> det som du ønsker.</p>
    </div>
</template>

<style scoped>
.container{
border: 2px solid rgb(212, 206, 206);
border-radius: 10px;
width: 15rem;
padding: 1rem;
padding-left: 2rem;
cursor: pointer;
font-size: 15px;
font-family: "League Spartan";

}
.container:hover{
    background-color: #d1d8d1;

}
h3{
    margin-top: 0.5rem;
}


</style>