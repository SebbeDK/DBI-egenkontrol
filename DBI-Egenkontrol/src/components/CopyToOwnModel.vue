<script setup>
</script>

<template>
    <div class="container">
        <font-awesome-icon :icon="['far', 'copy']" />
        <p>Kopiér til egne skemaer</p>
    </div>
</template>

<style scoped>
.container{
display: flex;
justify-content: space-around;
align-items: center;

background-color: #257473;
color: white;
border: 1px solid grey;
border-radius: 10px;
width: 13rem;
padding-left: 0.5rem;
font-family: Arial, Helvetica, sans-serif;

}
a{
    text-decoration: none;
}
.container:hover{
background-color: #d1d8d1;
color: black;
}

</style>