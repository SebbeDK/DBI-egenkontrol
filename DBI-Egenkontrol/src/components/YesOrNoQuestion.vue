<script setup>
import { ref } from 'vue'

const questionString = ref("Anlæggets detektorer, sprinklere og dyser er ubeskadigede")
const isEditing = ref(false)

function startEdit() {
    isEditing.value = true
}

function stopEdit() {
    isEditing.value = false
}

</script>

<template>
 <div class="control-container" :class="{ 'dragging': isDragging}" >
        <div class="control-container__control">
        <button @click="startEdit">
            <font-awesome-icon :icon="['far', 'pen-to-square']" />
        </button>
        <button class="drag-handle">
            <font-awesome-icon :icon="['fas', 'up-down-left-right']" />
        </button>
        <button @click="$emit('deleteQuestion')">
            <font-awesome-icon :icon="['fas', 'trash-can']"/>
        </button>
        </div>
        <div class="control">
            <input class="control__checkbox" type="checkbox" name="" id="">
            <label class="control__label" v-if="!isEditing"> {{ questionString }}</label>

            <input v-else class="control_label" v-model="questionString" @blur="stopEdit" @keyup.enter="stopEdit">
        </div>
    </div>
    <button class="add" @click="$emit('newQuestion')">
        <font-awesome-icon :icon="['fas', 'circle-plus']" />
    </button>
</template>

<style scoped>
.control-container{
    display: flex;
    position: relative;
}

.control-container__control{
    display: flex;
    flex-direction: column;
    position:absolute;
    top: 50%;
    left: 10px;
    transform: translate(-50%,-50%);

}
.control-container__control button{
    border: none;
    background-color: white;
    margin-top: 0.5rem;
    font-size: 25px;
    cursor: pointer;
}
.control{
    border: 2px solid #e2e2e2;
    background-color: #f7f7f7;
    border-radius: 5px;
    width: 25rem;
    padding: 40px;
    display: flex;
    margin-left: 2rem;
    align-items: center;
}

.control__checkbox{
    height: 40px;
    width: 30px;
    cursor: pointer;
}


.control__checkbox, label {
    font-family: "League Spartan";
    margin-left: 1rem;
    font-size: 17px;
    line-height: 18px;
}

.add {
    margin-left: 15rem;
    border: none;
    background-color: white;
    margin-top: 0.5rem;
    font-size: 25px;
    cursor: pointer;
}

.drag-handle{
    cursor: grab;
    pointer-events: all;
}
.dragging{
    opacity: 0.5;
}
</style>