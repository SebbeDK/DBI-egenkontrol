<script setup>
const emit = defineEmits(['sort']);

function sort(type) {
  emit('sort', type);
}
</script>

<template>
    <div class="dropdown">
    <button class="dropbtn">
        Sortér efter
        <font-awesome-icon class="icon" icon="fa-solid fa-angle-down" />
    </button>
    <div class="dropdown-content">
      <button @click="sort('none')">Ingen filtrering</button>
      <button @click="sort('newest')">Nyeste først</button>
      <button @click="sort('oldest')">Ældste først</button>
      <button @click="sort('mostUsed')">Mest anvendte</button>
    </div>
    </div>
</template>

<style scoped>
.dropbtn {
  background-color: #f3f4f3;
  color: black;
  padding: 10px 25px;
  font-size: 16px;
  border: 1px solid;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  text-align: center;
}

.dropdown-content button {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  border: 1px solid #d1d8d1;
  width:100%;

}
.dropdown-content button:hover {
    background-color: darkgrey;
    color: white;
    cursor:pointer;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.icon{
    margin-left: 5px;
}

</style>