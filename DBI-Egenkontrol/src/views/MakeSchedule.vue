<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import FeedbackSuccess from '@/components/FeedbackSuccess.vue'
import YesOrNoQuestion from '@/components/YesOrNoQuestion.vue'
import SaveButton from '@/components/SaveButton.vue'
import EditRights from '@/components/EditRights.vue'
import PrintSeeModel from '@/components/PrintSeeModel.vue'
import ShortBreadcrumbsString from '@/components/ShortBreadcrumbsString.vue'
import Draggable from 'vuedraggable'
import { useFormCreationStore } from '@/stores/formCreationStore'
import { useFolderStore } from '@/stores/folderStore'
import { storeToRefs } from 'pinia'

const router = useRouter()
const route = useRoute()
const formCreationStore = useFormCreationStore()
const folderStore = useFolderStore()
const { currentNewForm } = storeToRefs(formCreationStore)

const questions = ref(currentNewForm.value.questions.length > 0 ? currentNewForm.value.questions : [{qIndex: 1}])
let qIndex = questions.value.length > 0 ? Math.max(...questions.value.map(q => q.qIndex)) : 1

const showSuccess = ref(false)
const isEditMode = ref(false)

onMounted(() => {
    const { folderId, fileId } = route.params
    if (folderId && fileId) {
        isEditMode.value = true
    }
})

function addQuestion() {
    qIndex++
    questions.value.push({ qIndex: qIndex })
    formCreationStore.updateQuestions(questions.value)
}
function removeQuestion(index) {
    questions.value.splice(index, 1)
    formCreationStore.updateQuestions(questions.value)
}

async function save() {
    formCreationStore.updateQuestions(questions.value)
    const { folderId, fileId } = route.params
    if (isEditMode.value && folderId && fileId) {
        // Rediger eksisterende fil
        await folderStore.updateFileInFolder(folderId, fileId, {
            ...formCreationStore.currentNewForm,
            title: formCreationStore.currentNewForm.name,
            date: new Date(),
        })
        showSuccess.value = true
        setTimeout(() => {
            router.push('/skemaer')
        }, 2000)
    } else {
        // Opret ny fil
        const folderIdToSave = currentNewForm.value.folderId
        if (!folderIdToSave) {
            alert("Vælg venligst en mappe at gemme skemaet i (gå tilbage til forsiden).")
            return
        }
        await folderStore.addFileToFolder(folderIdToSave, {
            ...formCreationStore.currentNewForm,
            title: formCreationStore.currentNewForm.name,
            date: new Date(),
        })
        showSuccess.value = true
        formCreationStore.resetForm()
        setTimeout(() => {
            router.push('/skemaer')
        }, 2000)
    }
}
</script>

<template>
    <div class="page-content">
        <ShortBreadcrumbsString/>
        <div class="actions-control__line">
            <h3 class="schedule-info">{{ currentNewForm.name || 'Nyt skema' }}</h3>
            <div class="actions">
                <SaveButton @click="save()" class="actions__btn" id="save__button"/>
                <EditRights class="actions__btn"/>
                <PrintSeeModel class="actions__btn"/>
            </div>
        </div>
        <Draggable v-model="questions" item-key="qIndex" handle=".drag-handle">
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
        <button v-if="questions.length === 0" @click="addQuestion" class="add" type="button">
            <font-awesome-icon :icon="['fas', 'circle-plus']" />
        </button>
        <div class="save-schedule">
            <button class="save-btn" @click="save()">
                <font-awesome-icon :icon="['far', 'floppy-disk']" /> Gem
            </button>
        </div>
        <FeedbackSuccess v-if="showSuccess"></FeedbackSuccess>
    </div>
</template>

<style scoped>
/* Din eksisterende styling */
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