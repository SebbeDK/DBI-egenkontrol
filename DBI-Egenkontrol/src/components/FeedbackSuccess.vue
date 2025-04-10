<script setup>
</script>

<template>
    <div class="container">
        <button class="exit-btn">X</button>
        <h3>Dit skema blev gemt succesfuldt</h3>
        <h5>Du kan nu finde det under "dine skemaer"</h5>
    </div>
</template>

<style scoped>
.container{
    border: 1px solid grey;
    background-color: #fcfff5;
    width: 35rem;
    padding-left: 10px;
    border-radius: 5px;
    border-color: #a8c599;
}
h3{
    color: #4a7435;
    margin: 10px;
}
h5{
    color: #a8c599;
    margin: 10px;
}
.exit-btn{
    position: relative;
    float: right;
    margin: 5px 5px;
    background: none;
    border: none;
    font-weight: bold;
}
</style>