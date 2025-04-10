<template>
    <div class="display-layouts">
            <button class="list-layout">
                <font-awesome-icon :icon="['fas', 'list-ul']" />
            </button>
            <button class="card-layout">
                <font-awesome-icon :icon="['fas', 'grip']" />
            </button>
        </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .display-layouts button{
        border-radius: 5px;
        border: 2px solid #bababa;
        background-color: #f3f4f3;
        padding: 0.5rem;
    }

    .display-layouts{
        margin-left: 2rem;
    }
</style>