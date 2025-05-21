<script setup>
</script>

<template>
<span>
  <div class="page-content">
    <div class="control-container">
        <div class="control-container__control">
            <button @click="$emit('newQuestion')">
            <font-awesome-icon :icon="['far', 'copy']" />
        </button>
        <button class="drag-handle">
            <font-awesome-icon :icon="['fas', 'up-down-left-right']" />
        </button>
        <button @click="$emit('deleteQuestion')">
            <font-awesome-icon :icon="['fas', 'trash-can']"/>
        </button>
        </div>
        <div class="control">

    <div class="dropdown">
        <button class="dropbtn">
            Vælg type
            <font-awesome-icon class="icon-angledown" icon="fa-solid fa-angle-down" />
        </button>
        <div class="dropdown-content">
            <a href="#">Tjekboks</a>
            <a href="#">Ja / Nej</a>
            <a href="#">Tjekboks med kommentarfelt</a>
            <a href="#">Ja / nej med kommentar</a>
            <a href="#">Tekstfelt (stort)</a>
        </div>
    </div>
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
    <button class="add" @click="$emit('newQuestion')">
        <font-awesome-icon :icon="['fas', 'circle-plus']" />
    </button>
  </div>
</span>
</template>

<style scoped>
span{
    display: flex;
}

button{
    cursor: pointer;
}

.dropbtn {
  background-color: #f3f4f3;
  color: black;
  padding: 10px 25px;
  font-size: 16px;
  border: 1px solid;
  border-radius: 5px;
}

.dropdown {
  position: relative;
  display: inline-block;
  background-color: #ffff;
}

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  background-color: #ffff;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  border: 1px solid #d1d8d1;
  border-radius: 5px;

}
.dropdown-content a:hover {
    background-color: #f3f4f3;
}
.dropdown:hover .dropdown-content {
    display: block;
}
.container{
    background-color: #f3f4f3;
    width: 20rem;
    height: 2.5rem;
    border: 1px solid black;
    border-radius: 5px;
    padding: 2rem;
}
.icons-list{
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;

}

.icon{
    margin: 0.3rem;
    border: none;
    background-color: white;
    margin-top: 0.5rem;
    font-size: 25px;
    cursor: pointer;
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