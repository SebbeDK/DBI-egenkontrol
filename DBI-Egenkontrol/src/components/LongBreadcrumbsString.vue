<script setup>
</script>

<template>
<span class="breadcrumbs">
    <p>Skemaer</p>
    <span class="separator"></span>
    <p>Skema</p>
    <span class="separator"></span>
    <h2>Tilgængelige skabeloner</h2>
</span>
</template>

<style scoped>
p{
    font-size: 20px;
}
.breadcrumbs{
    display: flex;
    align-items: center;
    font-family: "League Spartan";

}

.separator {
  display: inline-block;
  width: 6px;
  height: 6px;
  margin: 0 15px;
  margin-top: 7px;
  border: 1px solid #000; /* outline color */
  border-radius: 50%;
  vertical-align: middle;
  background-color: transparent;
}
</style>