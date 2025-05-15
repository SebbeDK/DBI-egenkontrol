<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FeedbackSuccess from '@/components/FeedbackSuccess.vue';
import SaveButton from '@/components/SaveButton.vue';
import EditRights from '@/components/EditRights.vue';
import PrintSeeModel from '@/components/PrintSeeModel.vue';
import ShortBreadcrumbsString from '@/components/ShortBreadcrumbsString.vue';
import SelectFormType from '@/components/SelectFormType.vue';
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
    <ShortBreadcrumbsString/>
        <div class="actions-control__line">
            <h3 class="schedule-info">ABA månedskontrol</h3>

        <div class="actions">
            <SaveButton class="actions__btn" @click="save()"/>
            <EditRights class="actions__btn"/>
            <PrintSeeModel class="actions__btn"/>
        </div>
        </div>

    <div class="control-container">
        <div class="control-container__control">
            <button>
            <font-awesome-icon :icon="['far', 'copy']" />
        </button>
        <button>
            <font-awesome-icon :icon="['fas', 'up-down-left-right']" />
        </button>
        <button>
            <font-awesome-icon :icon="['far', 'trash-can']" />
        </button>
        </div>
        <div class="control">
            <select name="" id="">
                <option value="">Vælg type</option>
            </select>
            <label class="control__label" for=""></label>
            <div class="widget">
                <font-awesome-icon :icon="['far', 'circle-question']" />
                <div class="widget__info">
                    <p>Tryk på "vælg type" og begynd at lave widgets.</p><br>
                    <p>Widget's er hvilken type besvarelse der ønskes.</p><br>
                    <p>Såsom ja/nej, kryds af og så videre.</p><br>
                    <p>+ knappen tilføjer flere widgets nedenunder.</p><br>
                    <p>Du kan kopiere et widget til venstre, flytte rundt på dine widget's og slette.</p><br>
                </div>
            </div>
        </div>
    </div>
    <button class="add">
        <font-awesome-icon :icon="['fas', 'circle-plus']" />
    </button>

        <div class="save-schedule">
            <button class="save-btn" @click="save()"><font-awesome-icon :icon="['far', 'floppy-disk']" /> Gem</button>
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
    width: 7rem;
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
    font-size: 2px;
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
