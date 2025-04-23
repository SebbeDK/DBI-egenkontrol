<script setup>
</script>

<template>
    <div class="container">
        <div class="container-content">
            <label class="checkbox-container">
                <input type="checkbox" checked>
                <span class="checkmark"></span>
            </label>
            <p>Anlæggets detektorer, sprinklere og dyser er ubeskadigede</p>
        </div>
    </div>
</template>

<style scoped>
.container{
    background-color: #f3f4f3;
    width: 24rem;
    height: 6.5rem;
    border: 1px solid black;
    border-radius: 5px;
    align-content: center;
}
.container-content{
    display: flex;
    margin: 1rem;
}
.checkbox-container{
    display: inline-block;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    margin-top: 20px;
    margin-right: 15px;
    
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #f7f7f7;
  border-radius: 5px;
  border: 1px solid darkgrey;
}
.checkbox-container:hover input~ .checkmark{
    background-color: #ccc;
}
.checkbox-container input:checked ~ .checkmark{
    background-color: #2196f3;
}
.checkmark:after{
    content: "";
    position: absolute;
    display: none;
}
.checkbox-container input:checked ~ .checkmark:after{
    display: block;
} 
.checkbox-container .checkmark:after{
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

</style>