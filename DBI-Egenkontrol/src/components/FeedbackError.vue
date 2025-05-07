<script setup>
<<<<<<< Updated upstream


=======
defineProps({
    visible: Boolean
})
defineEmits(['confirm', 'cancel'])
>>>>>>> Stashed changes
</script>

<template>
    <div v-if="visible" class="content">
        <div class="container">
            <button class="exit-btn" @click="$emit('cancel')">X</button>
            <h3>Hov! Du er ved at forlade skemaet.</h3>
            <h5>Du kan gemme nu, fortryde eller fortsætte.</h5>
            <button class="continue-btn" @click="$emit('confirm')">Fortsæt</button>
            <button class="cancel-btn" @click="$emit('cancel')">Fortryd</button>
            <button class="save-btn" @click="$emit('confirm')">Gem nu</button>
        </div>
    </div>
</template>

<style scoped>
.content{
    position: fixed;
    inset: 0;
    background-color: rgba(239, 239, 239, 0.75);
    display: flex;
    z-index: 9998;
    align-items: center;
    justify-content: center;
}
.container{
    margin-left: 10px;
    border: 2px solid grey;
    background-color: #fffaf3;
    width: 30rem;
    height: 9rem;
    padding-left: 10px;
    border-radius: 5px;
    border-color: #ccbea0;
    position: fixed;
    top: 25%;
    right: 0;
    bottom: 0;
    left: 25%;
    z-index: 9999;
}
h3{
    color: #7a4d05;
    margin-bottom: 15px;
    margin-left: 1rem;
    margin: 2rem 0 1rem 1rem;
}
h5{
    color: #7a4d05;
    font-weight: 100;
    margin-top: 5px;
    margin-left: 1rem;
}
.exit-btn{
    position: relative;
    float: right;
    margin: 5px 5px;
    background: none;
    border: none;
    font-weight: bold;
    cursor: pointer;
}
.continue-btn{
    position: relative;
    float: right;
    font-weight: bold;
    color: #7a4d05;
    background-color: white;
    border: 2px solid #7a4d05;
    padding: 5px 10px;
    cursor: pointer;
    margin-right: 10px;
}
.cancel-btn{
    position: relative;
    float: right;
    margin: 0px 10px;
    color: #7a4d05;
    font-weight: bold;
    background-color: white;
    border: 2px solid #7a4d05;
    padding: 5px 10px;
    cursor: pointer;

}
.save-btn{
    position: relative;
    float: right;
    background-color: #7a4d05;
    color: white;
    margin-right: 20px;
    padding: 5px 10px;
    border: 2px solid #7a4d05;
    cursor: pointer;
}
</style>