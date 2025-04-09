<script setup>
defineProps({
  title: String,
  description: String,
  date: String
})
</script>

<template>
  <div class="file-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <span>{{ date }}</span>
  </div>
</template>

<style scoped>

.file-card {
  background: #9dbfb4;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: inset 0px 2px 4px rgba(101, 101, 101, 0.2);
  height: 10rem;
  width: 9rem;
 
}
</style>

