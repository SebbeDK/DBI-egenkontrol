<script setup>
import ShortBreadcrumbsString from '@/components/ShortBreadcrumbsString.vue';
import SaveButton from '@/components/SaveButton.vue';
import EditRights from '@/components/EditRights.vue';
import CreateNewModel from '@/components/CreateNewModel.vue';
import CopyExistingModel from '@/components/CopyExistingModel.vue';

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
</script>

<template>
    <div class="page-content">
        <div class="go-back">
            <font-awesome-icon :icon="['fas', 'reply']" />
            <h5>Tilbage</h5>
        </div>
        <div class="breadcrumb">
        <ShortBreadcrumbsString/>
        </div>
        <div class="actions-control__line">
            <h3 class="schedule-info">Unavngivet</h3>
            <div class="actions">
                <SaveButton  @click="save()"/>
                <EditRights />
            </div>
        </div>
        <div class="btn-container">
            <router-link to="/skemaer/skema/opret">
                <CreateNewModel class="btn-container__btn"/>
            </router-link>
            <router-link to="/skemaer/skabeloner/opret">
                <CopyExistingModel class="btn-container__btn"/>
            </router-link>
        </div>
    </div>

        <FeedbackSuccess v-if="showSuccess"></FeedbackSuccess>
</template>

<style scoped>
.breadcrumb{
    margin-bottom: 2rem;
}

h3{
    font-family: "League Spartan";
    margin: 0;
}

a{
    text-decoration: none;
    color: black;
    margin: 5px;
}

.schedule-info{
    border-bottom: 2px solid #9dbfb4;
    display: inline-block;
    padding-bottom: 0.5rem;
    margin-bottom: 5rem;
    font-weight: 1000;
}

.actions{
    display: flex;
    height: 3.5rem; 
    margin-bottom: 3rem; 
    margin-left: 27rem;  
}

.actions-control__line{
    display: flex;
    justify-content: space-between;
    width: 40rem;
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

.btn-container{
    display: flex;

}

.btn-container__btn{
    margin-left: 2rem;
}

.btn-container div:first-of-type.btn-container__btn{
    margin-left: 0;
}

</style>
