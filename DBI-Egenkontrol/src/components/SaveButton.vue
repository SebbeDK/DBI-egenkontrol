<script setup>

</script>

<template>
    <div class="save-button">
        <font-awesome-icon class="icon" icon="fa-regular fa-floppy-disk" />
        <p>Gem</p>
    </div>
</template>

<style scoped>
.save-button{
display: flex;
background-color: #f3f4f3;
border: 1px solid grey;
border-radius: 10px;
width: 4rem;
padding-right: 1rem;
align-items: center;
cursor: pointer;
font-family: "League Spartan";
font-size: 15px;
color: black;
height: 2.5rem;
margin-right: 1rem;
gap: 0.5rem;
}

.save-button:hover{
    background-color: #d1d8d1;

}

.icon{
    font-size: 1.12rem;
    margin-left: 1rem;
}

</style>