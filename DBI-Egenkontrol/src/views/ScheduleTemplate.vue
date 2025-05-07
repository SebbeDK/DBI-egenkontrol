<script setup>
<<<<<<< Updated upstream
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FeedbackSuccess from '@/components/FeedbackSuccess.vue';
const router = useRouter()

const showSuccess = ref(false)

function save() {
    showSuccess.value = true;

    setTimeout(() => {
          router.push('/skemaer')
      },5000)
}
=======
import { ref } from 'vue';
import { onBeforeRouteLeave, useRouter } from 'vue-router';
import FeedbackError from '@/components/FeedbackError.vue';
import SelectFormType from '@/components/SelectFormType.vue';

const isSaved = ref(false)
const showFeedbackError = ref(false)
const pendingNavigation = ref(null)
const router = useRouter()

function confirmLeave() {
    showFeedbackError.value = false
    isSaved.value = true
    if (pendingNavigation.value) {
        router.push(pendingNavigation.value)
    }
}  

function cancelLeave() {
    showFeedbackError.value = false
    pendingNavigation.value = null
}

onBeforeRouteLeave((to, from, next)=>{
    if (!isSaved.value) {
        showFeedbackError.value = true
        pendingNavigation.value = to.fullPath
        next(false)
    } else {
        next()
    }
})
>>>>>>> Stashed changes
</script>

<template>
    <feedback-error class="toast"
    :visible="showFeedbackError"
    @confirm="confirmLeave"
    @cancel="cancelLeave"
    />
    <div class="page-content">
    <div class="breadcrum">
            <h3 class="alm">Skemaer</h3>
            <font-awesome-icon :icon="['far', 'circle']" />
            <h3>Skema</h3>
        </div>
        <div class="actions-control__line">
            <h3 class="schedule-info">ABA månedskontrol</h3>

        <div class="actions">
<<<<<<< Updated upstream
            <button class="actions__btn" @click="save()"><font-awesome-icon :icon="['far', 'floppy-disk']" /> Gem</button>
=======
            <button class="actions__btn"><font-awesome-icon :icon="['far', 'floppy-disk']" @click="isSaved=true"/> Gem</button>
>>>>>>> Stashed changes
            <button class="actions__btn"><font-awesome-icon :icon="['far', 'pen-to-square']" /> Rediger rettigheder</button>
            <button class="actions__btn"><font-awesome-icon :icon="['fas', 'print']" /> Print eller se skema</button>
        </div>
        </div>

    <div class="control-container">
        <div class="control-container__control">
            <button>
            <font-awesome-icon :icon="['far', 'pen-to-square']" />
        </button>
        <button>
            <font-awesome-icon :icon="['fas', 'up-down-left-right']" />
        </button>
        <button>
            <font-awesome-icon :icon="['fas', 'trash-can']"/>
        </button>
        </div>
        <div class="control">
            <input class="control__checkbox" type="checkbox" name="" id="">
            <label class="control__label" for="">Anlæggets detektorer, sprinklere og dyser er ubeskadigede</label>
        </div>
    </div>
    <button class="add">
        <font-awesome-icon :icon="['fas', 'circle-plus']" />
    </button>

        <div class="save-schedule">
<<<<<<< Updated upstream
            <button class="save-btn" @click="save()"><font-awesome-icon :icon="['far', 'floppy-disk']" /> Gem</button>
=======
            <button class="save-btn"><font-awesome-icon :icon="['far', 'floppy-disk']" @click="isSaved=true"/> Gem</button>
>>>>>>> Stashed changes
        </div>
    </div>
    <FeedbackSuccess v-if="showSuccess"></FeedbackSuccess>
</template>

<style scoped>
.breadcrum{
    display: flex;
    margin: 0 0 2rem 0;
}
.breadcrum svg{
    margin: 0.5rem 1rem;
    font-size: 10px;
}

.go-back{
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;

}

.go-back svg{
    margin: 1.4rem 0.5rem 2rem 0;
}

h5{
    font-weight: lighter;
}

h3{
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
}

.alm {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
}

.schedule-info{
    border-bottom: 2px solid #9dbfb4;
    display: inline-block;
    padding-bottom: 0.5rem;
    margin-bottom: 3rem;
}

.save-btn{
    background-color:#257473;
    font-family: Arial, Helvetica, sans-serif;
    border: none;
    border-radius: 15px;
    padding: 10px 20px 10px 20px;
    font-size: 15px;
    color: white;
    margin-left: 32rem;
    margin-top: 3rem;
    cursor: pointer;
}

.save-schedule svg{
    color: white;
    margin-right: none;
    font-size: 20px;
}

.control{
    border: 2px solid #e2e2e2;
    background-color: #f7f7f7;
    border-radius: 5px;
    width: 25rem;
    padding: 40px;
    display: flex;
    margin-left: 2rem;
}

.control__checkbox{
    height: 40px;
    width: 30px;
}


.control__checkbox, label {
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 1rem;
    font-size: 17px;
    line-height: 18px;
}

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
}

.add {
    margin-left: 15rem;
    border: none;
    background-color: white;
    margin-top: 0.5rem;
    font-size: 25px;

}

.actions__btn{
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #e2e2e2;
    font-size: 13px;
    margin-left: 15px;
    cursor: pointer;

}
.actions__btn svg{
    font-size: 18px;
}

.actions-control__line{
    display: flex;
    justify-content: space-between;
    width: 52rem;
}

</style>
