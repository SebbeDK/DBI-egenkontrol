<script setup>
</script>

<template>
    <button class="edit__btn">
    <font-awesome-icon :icon="['far', 'pen-to-square']" />
    <p>Rediger rettigheder</p>
    </button>
</template>

<style scoped>
.edit__btn{
    padding: 10px;
    border-radius: 10px;
    font-size: 15px;
    background-color: #f3f4f3;
    border: 1px solid grey;
    border-radius: 10px;
    width: 10rem;
    cursor: pointer;
    font-family: "League Spartan";
    height: 2.5rem;
    align-items: center;
    display: flex;
    gap: 0.5rem;

}

.edit__btn svg{
    font-size: 20px;
}

.edit__btn:hover{
    background-color: #d1d8d1;

}


</style>