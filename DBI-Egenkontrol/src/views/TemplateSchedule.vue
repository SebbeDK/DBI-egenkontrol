<script setup>
import LongBreadcrumbsStringALT from '@/components/LongBreadcrumbsStringALT.vue';
import CopyToOwnModel from '@/components/CopyToOwnModel.vue';
</script>

<template>
    <div class="page-content">
        <long-breadcrumbs-string-a-l-t/>
        <div class="actions-control__line">
            <h3 class="schedule-info">ABA månedskontrol</h3>
        <div class="link">
            <router-link to="/skemaer/skema/skabelon">
            <copy-to-own-model/>
            </router-link>
        </div>
    </div>
    <div class="control-container">
        <div class="control">
            <input class="control__checkbox" type="checkbox" name="" id="">
            <label class="control__label" for="">Anlæggets detektorer, sprinklere og dyser er ubeskadigede</label>
        </div>
    </div>

    </div>
</template>

<style scoped>
h3{
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
}

.schedule-info{
    border-bottom: 2px solid #9dbfb4;
    display: inline-block;
    padding-bottom: 0.5rem;
    margin-bottom: 3rem;
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

.actions__btn{
    background-color:#257473;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #e2e2e2;
    font-size: 13px;
    margin-left: 15px;
    color: white;
    cursor: pointer;

}
.actions__btn svg{
    font-size: 18px;
}

.actions-control__line{
    display: flex;
    justify-content: space-between;
    width: 42rem;
}

</style>
