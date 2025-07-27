<script setup>
import ShortBreadcrumbsString from '@/components/ShortBreadcrumbsString.vue';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import FeedbackSuccess from '@/components/FeedbackSuccess.vue';
import { useFormCreationStore } from '@/stores/formCreationStore';

const router = useRouter();
const route = useRoute();
const showSuccess = ref(false);
const formCreationStore = useFormCreationStore();

const isEditMode = ref(false);
const loading = ref(false);

const name = ref('');
const allowSaveReportsTemporarily = ref(false);
const allowDeleteAndEdit = ref(false);
const allowUseForOtherTasks = ref(false);
const frequency = ref('');
const receiptRecipient = ref('');
const deviationRecipient = ref('');
const addRightsGroup = ref('');

onMounted(async () => {
    const { folderId, fileId } = route.params;
    if (folderId && fileId) {
        isEditMode.value = true;
        loading.value = true;
     
        const { doc, getDoc } = await import('firebase/firestore');
        const { db } = await import('@/firebase');
        const fileRef = doc(db, 'folders', folderId, 'files', fileId);
        const fileSnap = await getDoc(fileRef);
        if (fileSnap.exists()) {
            const data = fileSnap.data();
            formCreationStore.updateBasicInfo({
                ...data,
                name: data.title 
            });
            formCreationStore.updateQuestions(data.questions || []);
            formCreationStore.setFolderId(folderId);

            
            name.value = data.title || '';
            allowSaveReportsTemporarily.value = data.allowSaveReportsTemporarily || false;
            allowDeleteAndEdit.value = data.allowDeleteAndEdit || false;
            allowUseForOtherTasks.value = data.allowUseForOtherTasks || false;
            frequency.value = data.frequency || '';
            receiptRecipient.value = data.receiptRecipient || '';
            deviationRecipient.value = data.deviationRecipient || '';
            addRightsGroup.value = data.addRightsGroup || '';
        }
        loading.value = false;
    } else {
        
        formCreationStore.resetForm();
        if (route.query.folderId) {
            formCreationStore.setFolderId(route.query.folderId);
        }
        name.value = '';
        allowSaveReportsTemporarily.value = false;
        allowDeleteAndEdit.value = false;
        allowUseForOtherTasks.value = false;
        frequency.value = '';
        receiptRecipient.value = '';
        deviationRecipient.value = '';
        addRightsGroup.value = '';
    }
});

function goToNextStep() {
    
    formCreationStore.updateBasicInfo({
        name: name.value,
        allowSaveReportsTemporarily: allowSaveReportsTemporarily.value,
        allowDeleteAndEdit: allowDeleteAndEdit.value,
        allowUseForOtherTasks: allowUseForOtherTasks.value,
        frequency: frequency.value,
        receiptRecipient: receiptRecipient.value,
        deviationRecipient: deviationRecipient.value,
        addRightsGroup: addRightsGroup.value,
    });

    const { folderId, fileId } = route.params;
    if (isEditMode.value) {
        
        router.push(`/skemaer/skema/opret/${folderId}/${fileId}`);
    } else {
        
        router.push('/skemaer/skema/opret');
    }
}

function cancelCreation() {
    formCreationStore.resetForm();
    router.push('/skemaer');
}
</script>

<template>
    <div class="page-content">
        <div class="go-back">
            <font-awesome-icon :icon="['fas', 'reply']" />
            <h5 @click="cancelCreation" style="cursor: pointer;">Tilbage</h5>
        </div>
        <div class="breadcrumb">
            <ShortBreadcrumbsString/>
        </div>
        <div class="actions-control__line">
            <h3 class="schedule-info">{{ name || 'Unavngivet' }}</h3>
        </div>
        <div v-if="loading">Indlæser...</div>
        <div v-else class="form-content">
            <h3 class="schedule-info">Skema information</h3>
            <label class="name-label" for="schedule-name">Navn</label>
            <input class="name-input" type="text" id="schedule-name" v-model="name">

            <div class="permissions">
                <div>
                    <input class="permissions__checkbox" type="checkbox" id="allow-save-reports" v-model="allowSaveReportsTemporarily">
                    <label class="permissions__label" for="allow-save-reports">Tillad at gemme rapporter midlertidigt</label>
                </div>
                <div>
                    <input class="permissions__checkbox" type="checkbox" id="allow-delete-edit" v-model="allowDeleteAndEdit">
                    <label class="permissions__label" for="allow-delete-edit">Tillad at slette og redigere</label>
                </div>
                <div>
                    <input class="permissions__checkbox" type="checkbox" id="allow-use-tasks" v-model="allowUseForOtherTasks">
                    <label class="permissions__label" for="allow-use-tasks">Tillad at bruge det til andre opgaver</label>
                </div>
            </div>

            <div class="select-items">
                <label class="select-items__label" for="frequency">Frekvens</label>
                <select name="frequency" id="frequency" v-model="frequency">
                    <option value="">Vælg...</option>
                    <option value="frequency1">Frekvens 1</option>
                    <option value="frequency2">Frekvens 2</option>
                    <option value="frequency3">Frekvens 3</option>
                </select>
                <label class="select-items__label" for="receipt-recipient">Modtager af kvittering</label>
                <select name="receipt-recipient" id="receipt-recipient" v-model="receiptRecipient">
                    <option value="">Vælg...</option>
                    <option value="jane">Jane</option>
                    <option value="bo">Bo</option>
                    <option value="laurits">Laurits</option>
                </select>
                <label class="select-items__label" for="deviation-recipient">Modtager af afvigelse</label>
                <select name="deviation-recipient" id="deviation-recipient" v-model="deviationRecipient">
                    <option value="">Vælg...</option>
                    <option value="katrine">Katrine</option>
                    <option value="bjarne">Bjarne</option>
                    <option value="karen">Karen</option>
                </select>
                <label class="select-items__label" for="add-rights">Tilføj rettigheder</label>
                <select name="add-rights" id="add-rights" v-model="addRightsGroup">
                    <option value="">Tilføj gruppe</option>
                    <option value="approve-templates">Godkend skabeloner</option>
                    <option value="delete-all-templates">Slet alle skabeloner</option>
                    <option value="publish-templates">Offentliggør skabeloner</option>
                </select>
            </div>
            <div class="bottom-btn">
                <button class="cancel-btn" @click="cancelCreation">Annuller</button>
                <button class="next-btn" @click="goToNextStep">Næste</button>
            </div>
        </div>
        <FeedbackSuccess v-if="showSuccess"></FeedbackSuccess>
    </div>
</template>

<style scoped>

.breadcrumb{
    margin-bottom: 2rem;
}
.go-back{
    display: flex;
    font-family: "League Spartan";
    margin: 0;
    height: 3rem;
}
.go-back svg{
    margin: 1.4rem 0.5rem 2rem 0;
}

.actions{
    display: flex;
    margin-left: 40%;

}
h5{
    font-weight: lighter;
}
h3{
    font-family: "League Spartan";
    margin: 0;
}
.form-content{
    display: flex;
    flex-direction: column;
}
.schedule-info{
    border-bottom: 2px solid #9dbfb4;
    display: inline-block;
    padding-bottom: 0.5rem;
    margin-bottom: 3rem;
    max-width: 10rem;
}
.select-items{
    display: flex;
    flex-direction: column;
    font-family: "League Spartan";
}
.select-items select{
    border-radius: 5px;
    border: 2px solid #bababa;
    background-color: none;
    padding: 0.5rem;
    font-weight: bold;
    width: 15rem;
    color: #bababa;
}
.select-items label{
    margin: 2rem 0 1rem 0;
}
.cancel-btn{
    background-color:#f3f4f3;
    font-family: "League Spartan";
    border: none;
    border-radius: 20px;
    padding: 15px 40px 15px 40px;
    font-size: 20px;
}
.next-btn{
    background-color:#257473;
    font-family: "League Spartan";
    border: none;
    border-radius: 20px;
    padding: 15px 40px 15px 40px;
    font-size: 20px;
    color: white;
    cursor: pointer;
}
.bottom-btn{
    display: flex;
    margin-left: 40rem;
    gap: 1rem;
}
.name-label{
    margin-bottom: 0!important;
}
.name-label, .select-items__label{
    font-family: "League Spartan";
    margin-bottom: 1rem;
    font-size: 30px;
    font-weight: lighter;
}
.name-input{
    display: flex;
    border-radius: 5px;
    border: 2px solid #bababa;
    background-color: none;
    padding: 0.5rem;
    font-weight: bold;
    width: 20rem;
    color: #bababa;
    margin-top: 1rem;
}
.permissions{
    display: flex;
    flex-direction: column;
    font-family: "League Spartan";
}
.permissions div{
    display: flex;
    margin-top:15px;
}
.permissions__checkbox{
    border-radius: 20px;
    width: 30px;
    height: 30px;
}
.permissions__label{
    font-size:18px;
    margin-top:8px;
    margin-left:10px;
}
</style>