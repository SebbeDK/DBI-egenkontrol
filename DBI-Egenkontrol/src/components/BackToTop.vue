<script setup>
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
</script>

<template>
    <button class="to-top-btn" @click="scrollToTop">
        Tilbage til toppen
        <font-awesome-icon :icon="['fas', 'arrow-up']" />
    </button>
</template>

<style scoped>
.to-top-btn{
    border: none;
    background-color: white;
    font-weight: bold;
    font-family: "League Spartan";
    margin-left: 37rem;
    cursor: pointer;
}
</style>