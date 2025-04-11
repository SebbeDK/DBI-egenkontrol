<script setup>
   
</script>

<template>
    <div class="page-content">
        <div class="go-back">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
            <h5>Tilbage til dine skemaer</h5>
        </div>
        <div class="breadcrum">
            <h3 class="alm">Skemaer</h3>
            <font-awesome-icon :icon="['far', 'circle']" />
            <h3>Lav nyt skema</h3>
        </div>
        <div>
            <h3 class="schedule-info">Skema information</h3>
        </div>
        <label class="name-label" for="">Navn</label>
        <input class="name-input" type="text">
        <div class="permissions">
            <div>
                <input class="permissions__checkbox" type="checkbox" name="" id="">
                <label class="permissions__label" for="">Tillad at gemme rapporter midlertidigt</label>
            </div>
            <div>
                <input class="permissions__checkbox" type="checkbox" name="" id="">
                <label class="permissions__label" for="">Tillad at gemme rapporter midlertidigt</label>
            </div>
            <div>
                <input class="permissions__checkbox" type="checkbox" name="" id="">
                <label class="permissions__label" for="">Tillad at gemme rapporter midlertidigt</label>
            </div>
        </div>
        <div class="select-items">
            <label class="select-items__label" for="">Frekvens</label>
            <select name="" id="">
                <option value="">Vælg...</option>
            </select>
            <Label class="select-items__label">Modtager af kvittering</Label>
            <select name="" id="">
                <option value="">Skriv for at søge</option>
            </select>
            <label class="select-items__label" for="">Modtager af afvigelse</label>
            <select name="" id="">
                <option value="">Skriv for at søge</option>
            </select>
            <label class="select-items__label" for="">Tilføj rettigheder</label>
            <select name="" id="">
                <option value="">Tilføj gruppe</option>
            </select>
        </div>
        <div class="bottom-btn">
            <button class="cancel-btn">Annuller</button>
            <button class="next-btn">Næste</button>
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

.select-items{
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
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
    font-family: Arial, Helvetica, sans-serif;
    border: none;
    border-radius: 20px;
    padding: 15px 40px 15px 40px;
    font-size: 20px;
}

.next-btn{
    background-color:#257473;
    font-family: Arial, Helvetica, sans-serif;
    border: none;
    border-radius: 20px;
    padding: 15px 40px 15px 40px;
    font-size: 20px;
    color: white;
}

.bottom-btn{
    display: flex;
    margin-left: 40rem;
    gap: 1rem;
}

.name-label, .select-items__label{
    font-family: Arial, Helvetica, sans-serif;
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
    font-family: Arial, Helvetica, sans-serif;
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