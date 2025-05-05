<script setup>
</script>

<template>
<div class="alert-background">
    <div class="alert">
        <button class="exit-btn">X</button>
        <h3>Dit skema blev gemt succesfuldt</h3>
        <h5>Du kan nu finde det under "dine skemaer"</h5>
    </div>
</div>
</template>

<style scoped>
.alert-background{
    position: absolute;
    top: 124px;
    background-color: rgba(255,255,255,0.8);
    width: 100%;
    height: 100%;
}

.alert{
    border: 1px solid grey;
    background-color: #fcfff5;
    width: 35rem;
    padding: 20px;
    border-radius: 5px;
    border-color: #a8c599;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
h3{
    color: #4a7435;
    margin: 10px;
    font-family: Arial, Helvetica, sans-serif;
}
h5{
    color: #a8c599;
    margin: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
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