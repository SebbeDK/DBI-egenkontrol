<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const router = useRouter();
const email = ref('');
const password = ref('');
const error = ref('');

async function handleLogin() {
  error.value = '';
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push('/skemaer');
  } catch (err) {
    error.value = 'Email eller password matcher ikke';
  }
}
</script>

<template>
<div class="blurred-background">
  <div class="login-container">
      <h2>DBI Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-container">
          <label for="email">Email:</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
          />
        </div>
        <div class="input-container">
          <label for="password">Adgangskode:</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
          />
          <p>Opret bruger</p>
          <p>Glemt kodeord</p>
        </div>
        <button type="submit">Log ind</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
</div>
</template>


<style scoped>
.blurred-background{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  z-index: 0;
}
.login-container {
    max-width: 300px;
    margin: 2rem auto;
    padding: 2rem;
    border: 2px solid #9dbfb4;
    border-radius: 8px;
    font-family: "League Spartan";
    justify-content:center;
    align-items: center;
    display:flex;
    flex-direction:column;
    gap: 0.5rem;
}

.username{
    gap: 1rem;
}

.input-container{
    margin-bottom: 1rem;
}
.error {
    color: red;
}

.success {
    color: green;
}

label{
    margin-top: 4px;
    margin-bottom:0.15rem;
    display: block;


}

button{
    cursor:pointer;
    padding: 0.5rem;
    margin-top: 2rem;
    border-radius: 5px;
    border: 1px solid #9dbfb4;
    background-color: #9dbfb4;

}

button:hover{
    background-color: #257474;
    color:white;
}

p{
    font-size: 2px;
    text-decoration: underline;
    cursor:pointer;
    margin-top: 6px;
}
</style>
