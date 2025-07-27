<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useFolderStore } from '@/stores/folderStore';

const route = useRoute();
const router = useRouter();
const folderStore = useFolderStore();

const folderId = route.params.folderId;
const fileId = route.params.fileId;

const loading = ref(true);
const error = ref(null);
const fileData = ref(null);

onMounted(() => {
  
  const file = folderStore.filesInSelectedFolder.find(f => f.id === fileId);
  if (file) {
    fileData.value = { ...file };
    loading.value = false;
    return;
  }
  
  fetchFile();
});

async function fetchFile() {
  loading.value = true;
  error.value = null;
  try {
    const { doc, getDoc } = await import('firebase/firestore');
    const { db } = await import('@/firebase');
    const fileRef = doc(db, 'folders', folderId, 'files', fileId);
    const fileSnap = await getDoc(fileRef);
    if (fileSnap.exists()) {
      fileData.value = { id: fileSnap.id, ...fileSnap.data() };
    } else {
      error.value = "Filen blev ikke fundet.";
    }
  } catch (e) {
    error.value = "Fejl ved hentning af fil: " + e.message;
  } finally {
    loading.value = false;
  }
}

async function save() {
  try {
    await folderStore.updateFileInFolder(folderId, fileId, {
      ...fileData.value,
      date: new Date(),
    });
    alert("Skemaet er opdateret!");
    router.push('/skemaer');
  } catch (e) {
    alert("Fejl ved opdatering: " + e.message);
  }
}
</script>

<template>
  <div class="page-content">
    <h2>Rediger skema</h2>
    <div v-if="loading">Indlæser...</div>
    <div v-else-if="error">{{ error }}</div>
    <form v-else @submit.prevent="save">
      <label>Navn:</label>
      <input v-model="fileData.title" type="text" required />

      <label>Frekvens:</label>
      <input v-model="fileData.frequency" type="text" />

      <label>Modtager af kvittering:</label>
      <input v-model="fileData.receiptRecipient" type="text" />

      <label>Modtager af afvigelse:</label>
      <input v-model="fileData.deviationRecipient" type="text" />

      <button type="submit">Gem ændringer</button>
    </form>
  </div>
</template>

<style scoped>
.page-content {
  max-width: 500px;
  margin: 2rem auto;
  background: #f8f8f8;
  padding: 2rem;
  border-radius: 10px;
}
label {
  display: block;
  margin-top: 1rem;
}
input {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.2rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}
button {
  margin-top: 2rem;
  background: #257473;
  color: white;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 5px;
  cursor: pointer;
}
</style>