<script setup>
import { ref } from 'vue'
import { onBeforeRouteLeave, useRouter } from 'vue-router'
import FeedbackSuccess from '@/components/FeedbackSuccess.vue';
import YesOrNoQuestion from '@/components/YesOrNoQuestion.vue';
import SaveButton from '@/components/SaveButton.vue';
import EditRights from '@/components/EditRights.vue';
import PrintSeeModel from '@/components/PrintSeeModel.vue';
import ShortBreadcrumbsString from '@/components/ShortBreadcrumbsString.vue';
import FeedbackError from '@/components/FeedbackError.vue';
import Draggable from 'vuedraggable';

const showSuccess = ref(false)
function save() {
    isSaved.value = true,
    showSuccess.value = true;

    setTimeout(() => {
          router.push('/skemaer')
      },5000)
}

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
let qIndex = ref(1)
const questions = ref([{qIndex: 1}, {qIndex: 2}, {qIndex: 3},])

function addQuestion() {
    qIndex.value += 1
    questions.value.push({qIndex: qIndex.value})
}

function removeQuestion(index) {
    questions.value.splice(index, 1)
}

</script>

<template>
    <feedback-error class="toast"
    :visible="showFeedbackError"
    @confirm="confirmLeave"
    @cancel="cancelLeave"
    />

    <div class="page-content">
    <ShortBreadcrumbsString/>
        <div class="actions-control__line">
            <h3 class="schedule-info">ABA månedskontrol</h3>

            <div class="actions">
                <SaveButton @click="save()" class="actions__btn" id="save__button"/>
                <EditRights class="actions__btn"/>
                <PrintSeeModel class="actions__btn"/>
            </div>
        </div>

    <Draggable
    v-model="questions"
    item-key="qIndex"
    handle=".drag-handle">
        <template #item="{element, index}">
                <div>
                    <YesOrNoQuestion
                    :key="element.qIndex"
                    @newQuestion="addQuestion"
                    @deleteQuestion="removeQuestion(index)"
                    />
                </div>
        </template>
    </Draggable>
    <button v-if="questions.length === 0" @click="addQuestion" class="add">
        <font-awesome-icon :icon="['fas', 'circle-plus']" />
    </button>
        <div class="save-schedule">
            <button class="save-btn" @click="save()"><font-awesome-icon :icon="['far', 'floppy-disk']" /> Gem</button>
        </div>
    </div>
    <FeedbackSuccess v-if="showSuccess"></FeedbackSuccess>
</template>

<style scoped>
.go-back{
    display: flex;
    font-family: "League Spartan";
    margin: 0;

}

.go-back svg{
    margin: 1.4rem 0.5rem 2rem 0;
}

h5{
    font-weight: lighter;
}

h3{
    font-family: "League Spartan";
    margin: 0;
}

.alm {
    font-family: "League Spartan";
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
    font-family: "League Spartan";
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

.actions__btn{
    border-radius: 10px;
    border: 2px solid #e2e2e2;
    font-size: 13px;
    cursor: pointer;
    margin: 0px 0.5rem;   
}
.actions__btn svg{
    font-size: 18px;
}
.actions{
    display: flex;
    height: 2.5rem;
}

.actions-control__line{
    display: flex;
    justify-content: space-between;
    width: 52rem;
}
.add {
    margin-left: 15rem;
    border: none;
    background-color: white;
    margin-top: 0.5rem;
    font-size: 25px;
    cursor: pointer;
}

</style>
