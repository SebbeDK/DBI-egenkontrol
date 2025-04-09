<script setup>
defineProps({
  title: String,
  description: String,
  date: String
})
</script>

<template>
  <div class="upload-file-card">
    <div id="folderIcon"></div>
    <button id="addFileButton">
        +
        <h5>Lav nyt skema</h5>
    </button>
    
  </div>
</template>

<style scoped>
#folderIcon{
    position:absolute;
    left:5px;
    top:5px;
}

#addFileButton{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
}

.upload-file-card {
  position:relative;
  background: #f4f3f4;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: inset 0px 2px 4px rgba(0,0,0,0.2);
  height: 10rem;
  width: 9rem;
 
}
</style>

