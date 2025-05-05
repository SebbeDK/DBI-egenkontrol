<script setup>
</script>

<template>
    <button class="actions__btn">
    <font-awesome-icon :icon="['far', 'pen-to-square']" />
    Rediger rettigheder
    </button>
</template>

<style scoped>
.actions__btn{
    padding: 10px;
    border-radius: 10px;
    font-size: 14px;
    margin-left: 15px;
    background-color: #f3f4f3;
    border: 1px solid grey;
    border-radius: 10px;
    width: 9rem;
    padding-left: 0.5rem;
    cursor: pointer;
}
.actions__btn svg{
    font-size: 1rem;
    margin-left: 0.2rem;
}

.actions-control__line{
    display: flex;
    justify-content: space-between;
    width: 40rem;
}
</style>