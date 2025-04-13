<script setup>

 </script>

<template>
    <div class="page-content">
        <div class="go-back">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
            <h5>Tilbage</h5>
        </div>
    <div class="breadcrum">
            <h3 class="alm">Skemaer</h3>
            <font-awesome-icon :icon="['far', 'circle']" />
            <h3>Skema</h3>
        </div>
        <div class="actions-control__line">
            <h3 class="schedule-info">Unavngivet</h3>
        
        <div class="actions">
            <button class="actions__btn"><font-awesome-icon :icon="['far', 'floppy-disk']" /> Gem</button>
            <button class="actions__btn"><font-awesome-icon :icon="['far', 'pen-to-square']" /> Rediger rettigheder</button>
        </div>
        </div>
        <div class="btn-container">
            <button class="start-btn">
                <h4>Start fra bunden</h4>
                <h5>Byg et skema fra bunden, hvor du selv tilføjer hvert punkt.</h5>
            </button>
            <button class="copy-btn">
                <h4>Kopiér fra en tilgængelig skabelon</h4>
                <h5>Kopiér et eksisterende skema og tilpas det som du ønsker.</h5>
            </button>
        </div>
    </div>
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

.actions__btn{
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #e2e2e2;
    font-size: 13px;
    margin-left: 15px;

}
.actions__btn svg{
    font-size: 18px;
}

.actions-control__line{
    display: flex;
    justify-content: space-between;
    width: 40rem;
}
.go-back{
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    
}

.go-back svg{
    margin: 1.4rem 0.5rem 2rem 0;
}

.btn-container{
    display: flex;
}

.start-btn, .copy-btn{
    border: 2px solid #e2e2e2;
    width: 15rem;
    border-radius: 10px;
    background-color: white;
}

.start-btn h4, .copy-btn h4{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    text-align: left;
    padding: 14px;
    margin: 7px 3px 10px 3px;
}
.start-btn h5, .copy-btn h5{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    text-align: left;
    padding: 14px;
    margin: -20px 3px 10px 3px;
    color: #7e7e7e;
}

.copy-btn{
    margin-left: 2rem;
}
</style>
