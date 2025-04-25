<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const error = ref('')
const success = ref('')

function handleLogin() {
  error.value = ''
  success.value = ''

  if (username.value === 'admin' && password.value === '1234') {
    success.value = 'Login successful!'
  } else {
    error.value = 'Invalid username or password.'
  }
}
</script>

<template>
<div class="login-container">
    <h2>DBI Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Brugernavn:</label>
        <br>
        <input
          id="username"
          v-model="username"
          type="text"
          required
        />
      </div>
      <div>
        <label for="password">Adgangskode:</label>
        <br>
        <input
          id="password"
          v-model="password"
          type="password"
          required
        />
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
    border: 1px solid #ccc;
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


.error {
    color: red;
}

.success {
    color: green;
}

button{
    cursor:pointer;
    padding: 0.5rem;
    margin-top: 1rem;
    border-radius: 5px;
    border: 1px solid green;

}

button:hover{
    background-color: green;
}
</style>
