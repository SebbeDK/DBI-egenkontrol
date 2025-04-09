<script setup>
defineProps({
  title: String,
  date: String
})
</script>

<template>
  <div class="file-card">
    <div class="file-icon">
        <font-awesome-icon :icon="['far', 'file']" />
    </div>
    <button class="menu-icon">
        <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
    </button>
    <h3>{{ title }}</h3>
    <font-awesome-icon :icon="['fas', 'calendar-days']" />
    <span>Gemt den: <br>{{ date }}</span>
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
  position: relative;
  color: white;
  font-family: Arial, Helvetica, sans-serif;

}

</style>

