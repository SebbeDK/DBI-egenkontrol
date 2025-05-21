<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FeedbackSuccess from '@/components/FeedbackSuccess.vue';
import SaveButton from '@/components/SaveButton.vue';
import EditRights from '@/components/EditRights.vue';
import PrintSeeModel from '@/components/PrintSeeModel.vue';
import ShortBreadcrumbsString from '@/components/ShortBreadcrumbsString.vue';
import SelectFormType from '@/components/SelectFormType.vue';
import Draggable from 'vuedraggable';

const router = useRouter()


const showSuccess = ref(false)

function save() {
    showSuccess.value = true;

    setTimeout(() => {
          router.push('/skemaer')
      },5000)
}
let qIndex = ref(1)
const questions = ref([{qIndex: 1},])

function addQuestion() {
    qIndex.value += 1
    questions.value.push({qIndex: qIndex.value})
}

function removeQuestion(index) {
    questions.value.splice(index, 1)
}
</script>

<template>
    <div class="page-content">
    <ShortBreadcrumbsString/>
        <div class="actions-control__line">
            <h3 class="schedule-info">ABA månedskontrol</h3>

        <div class="actions">
            <SaveButton class="actions__btn" @click="save()"/>
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
                    <SelectFormType
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
h5{
    font-weight: lighter;
}

h3{
    font-family: "League Spartan";
    margin: 0;
}

button{
    cursor: pointer;
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

.control{
    border: 2px solid #e2e2e2;
    background-color: #f7f7f7;
    border-radius: 5px;
    width: 25rem;
    padding: 40px;
    display: flex;
    margin-left: 2rem;
    position: relative;
}

select{
    width: 15rem;
}

.widget{
    position: absolute;
    right: 1rem;
    top: 1rem;
    z-index: 10;
}

.widget__info{
    position: absolute;
    border: 2px solid #e2e2e2;
    background-color: #f7f7f7;
    border-radius: 5px;
    padding: 1rem;
    width: 10rem;
    color: gray;
    top: -10px;
    left: -10px;
    z-index: 2;
    display: none;

}

.widget svg{
    z-index: 11;
    position: relative;
}

.widget__info p{
    font-family: "League Spartan";
    font-size: 1rem;
}

.widget__info p:first-of-type{
    margin-top: 1rem;
}


.widget:hover .widget__info {
    display: block;
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
    border-radius: 10px;
    border: 2px solid #e2e2e2;
    font-size: 13px;
    margin-left: 15px;
    cursor: pointer;
    height: 2.5rem;
}
.actions{
    display: flex;
    height: 3rem;
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
