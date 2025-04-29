<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const error = ref('');
const success = ref('');

function handleLogin() {
  error.value = '';
  success.value = '';

  if (username.value === 'admin' && password.value === '1234') {
    success.value = 'Login successful!';
  } else {
    error.value = 'Invalid username or password.';
  }
}
</script>

<template>
<div class="login-container">
    <h2>DBI Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="input-container">
        <label for="username">Brugernavn:</label>
        <input
          id="username"
          v-model="username"
          type="text"
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
    <p v-if="success" class="success">{{ success }}</p>
  </div>
</template>


<style scoped>
.login-container {
    max-width: 300px;
    margin: 2rem auto;
    padding: 2rem;
    border: 2px solid #9dbfb4;
    border-radius: 8px;
    font-family: arial;
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
