<script setup lang="ts">
import LoginView from '../../views/LoginView.vue'
import axios from '../../../node_modules/axios'
import { ref } from 'vue'

const form = ref({
  email: 'joaquin@hotmail.com',
  senha: 'ze'
})

// to use the json-server use "npm run backend"

let conection = async () => {
  try {
    await axios({
      method: 'post',
      url: 'http://localhost:3000/Registers',
      data: {
        nome: 'alejandro',
        email: '<EMAIL>',
        password: '<PASSWORD>'
      }
    }).then(function (response) {
      console.log(response.data)
      console.log(response.status)
      console.log(response.request)
    })
  } catch (e) {
    console.log(e)
    alert('corrija a requisição')
  }

  // axios
  //   .post('https://127.0.0.1/login/teste.php', {
  //     email: form.value.email,
  //     senha: form.value.senha
  //   })
  //   .then((response) => {
  //     console.log(response)
  //   })
}
</script>

<template>
  <LoginView />

  <div>
    <form
      action="#"
      method="get"
      class="mx-auto w-7/12 bg-gray-800 rounded-3xl py-8 pb-2 mb-16 border-2"
      @submit.prevent="conection"
    >
      <div class="mx-auto w-8/12 flex items-start justify-center flex-col mb-8">
        <label for="LoginParameterLogin" class="text-3xl">Your Email</label>
        <input
          type="email"
          class="w-full rounded-md px-2.5 py-1 text-2xl input"
          name="LoginParameterLogin"
          id="LoginParameterLogin"
          placeholder="Your Email"
          required
          v-model="form.email"
        />
      </div>

      <div class="mx-auto w-8/12 flex items-start justify-center flex-col mb-8">
        <label for="PasswdParameterLogin" class="text-3xl">Your Password</label>
        <input
          type="password"
          class="w-full rounded-md px-2.5 py-1 text-2xl input"
          name="PasswdParameterLogin"
          id="PasswdParameterLogin"
          placeholder="Your Password"
          required
          v-model="form.senha"
        />
      </div>

      <button
        type="submit"
        id=""
        class="py-4 text-4xl mx-auto w-4/12 flex items-center justify-center flex-col mb-8 border-2 rounded-lg bg-gray-500"
      >
        Login
      </button>
    </form>
  </div>
</template>

<style scoped>
.input {
  color: black;
}

* {
  border-color: #66fcf1;
}
</style>
