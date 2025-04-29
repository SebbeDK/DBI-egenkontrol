<script setup>
</script>

<template>
    <div class="search">
        <button href="#" class="sidebar__search">
            <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />        </button>
        <input type="text" placeholder="Søg i skemaer">
    </div>
</template>

<style scoped>
.search{
 border-radius: 20px;
 background-color: #9dbfb4;
 position: relative;
 width: 15rem;
 height: 41px;
}
.search button{
  background-color: #257473;
  width: 41px;
  height: 41px;
  border-radius: 50%;
  border: none;
  position: absolute;
}
.search input{
  background: none;
  border: none;
  padding: 0.5rem 0 0.5rem 2.5rem;
  color: white;
  width: 11rem;
  margin-left: 10px;
  margin-top: 5px;
}
.search input::placeholder {
  color: white;
  opacity: 0.7;
}
.icon{
    color: white;
}

</style>