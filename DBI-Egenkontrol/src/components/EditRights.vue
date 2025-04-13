<script setup>
</script>

<template>
    <div class="container">
        <button class="actions__btn"><font-awesome-icon :icon="['far', 'pen-to-square']" /> Rediger rettigheder</button>
    </div>
</template>

<style scoped>
.container{
background-color: #f3f4f3;
border: 1px solid grey;
border-radius: 10px;
width: 11.5rem;
padding-left: 0.5rem;
}

.container:hover{
background-color: #d1d8d1
}

.actions__btn{
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #e2e2e2;
    font-size: 13px;
    margin-left: 15px;

}
.actions__btn svg{
    font-size: 18px;
}

.actions-control__line{
    display: flex;
    justify-content: space-between;
    width: 40rem;
}
</style>