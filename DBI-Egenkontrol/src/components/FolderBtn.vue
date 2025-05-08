<script setup>
defineProps({
  title: String,
});
</script>

<template>
    <button>
        <font-awesome-icon :icon="['far', 'folder']" /> {{ title }}
    </button>
</template>

<style scoped>
button{
    border-radius: 5px;
    border: 2px solid #bababa;
    background-color: #f3f4f3;
    padding: 0.5rem;
    font-weight: bold;
    cursor:pointer;
}
</style>