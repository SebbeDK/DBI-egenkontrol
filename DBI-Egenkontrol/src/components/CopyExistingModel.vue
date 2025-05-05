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
border: 1px solid grey;
border-radius: 10px;
width: 20rem;
padding: 1rem;
padding-left: 2rem;
cursor: pointer;
}

h3{
    font-family: Arial, Helvetica, sans-serif;
    height: 6rem;
}


</style>