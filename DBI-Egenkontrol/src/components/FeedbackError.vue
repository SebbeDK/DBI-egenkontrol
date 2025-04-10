<script setup>
</script>

<template>
    <div class="container">
        <button class="exit-btn">X</button>
        <h3>Hov! Du har ikke gemt.</h3>
        <h5>Du kan gemme nu, fortryde eller fortsætte uden at gemme.</h5>
        <button class="save-btn">Gem nu</button>
        <button class="cancel-btn">Fortryd</button>
        <button class="continue-btn">Fortsæt</button>
    </div>
</template>

<style scoped>
.container{
    margin-left: 10px;
    border: 1px solid grey;
    background-color: #fffaf3;
    width: 30rem;
    height: 9rem;
    padding-left: 10px;
    border-radius: 5px;
    border-color: #ccbea0;
}
h3{
    color: #7a4d05;
    margin-bottom: 15px;
    margin-left: 1rem;
    margin: 2rem 0 1rem 1rem;
}
h5{
    color: #7a4d05;
    font-weight: 100;
    margin-top: 5px;
    margin-left: 1rem;
}
.exit-btn{
    position: relative;
    float: right;
    margin: 5px 5px;
    background: none;
    border: none;
    font-weight: bold;
}
.continue-btn{
    position: relative;
    float: right;
    font-weight: bold;
    color: #7a4d05;
    background-color: white;
    border: 1px solid #7a4d05;
    padding: 5px 10px;
}
.cancel-btn{
    position: relative;
    float: right;
    margin: 0px 10px;
    color: #7a4d05;
    font-weight: bold;
    background-color: white;
    border: 1px solid #7a4d05;
    padding: 5px 10px;

}
.save-btn{
    position: relative;
    float: right;
    background-color: #7a4d05;
    color: white;
    margin-right: 20px;
    padding: 5px 10px;
    border: 1px solid #7a4d05;
}
</style>