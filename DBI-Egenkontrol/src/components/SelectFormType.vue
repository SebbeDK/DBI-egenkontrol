<script setup>
</script>

<template>
<span>
<div class="icons-list">
    <button>
        <font-awesome-icon class="icon" icon="far fa-copy" />
    </button>
    <button>
        <font-awesome-icon class="icon" icon="fas fa-arrows-up-down-left-right" />
    </button>
    <button>
        <font-awesome-icon class="icon" icon="fas fa-trash-can" />
    </button>
</div>
<div class="container">
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
</div>
</span>
</template>

<style scoped>
span{
    display: flex;
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
</style>