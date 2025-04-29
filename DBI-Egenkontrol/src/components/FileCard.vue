<script setup>
defineProps({
  title: String,
  date: String,
});
</script>

<template>
  <div class="file-card">
    <div class="file-card-icon">
        <font-awesome-icon :icon="['far', 'file']" />
    </div>
    <button class="menu-icon">
        <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
    </button>
    <h3>{{ title }}</h3>
    <div class="file-card__date">
    <font-awesome-icon :icon="['fas', 'calendar-days']" />
    <span> Gemt den: <br>{{ date }}</span>
    </div>
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

.file-card-icon{
    position: absolute;
    left: 20px;
}
.menu-icon {
    position: absolute;
    right: 15px;
    border: none;
    background-color: #9dbfb4;
    color: white;
}

h3{
    color: white;
    margin-top: 2.5rem;
    font-weight: lighter;

}
.file-card__date{
    position:absolute;
    bottom: 15px;
}
.file-card__date svg{
    margin-top: 3.5rem;
    font-size: 13px;
}

.file-card__date span{
    margin-top: 3.5rem;
    font-size: 13px;
}
</style>

