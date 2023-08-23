<script setup lang="ts">
import { ref } from 'vue'
import LoginView from '../../views/LoginView.vue'

let pass = ref('password')
const joao = () => {
  if (pass.value === 'password') {
    pass.value = 'text'
  } else {
    pass.value = 'password'
  }
}
</script>

<template>
  <LoginView />

  <div>
    <form
      action="#"
      method="post"
      class="mx-auto w-7/12 bg-gray-800 rounded-3xl py-8 pb-2 mb-16 border-2"
    >
      <div class="mx-auto w-8/12 flex items-start justify-center flex-col mb-8">
        <label for="NameParameterRegister" class="text-3xl">Your Name</label>
        <input
          type="text"
          class="w-full rounded-md px-2.5 py-1 text-xl input"
          name="NameParameterRegister"
          id="NameParameterRegister"
          placeholder="Your Name"
          required
        />
      </div>

      <div class="mx-auto w-8/12 flex items-start justify-center flex-col mb-8">
        <label for="BirthdayParameterRegister" class="text-3xl">Your Birthday</label>
        <input
          type="date"
          class="w-full rounded-md px-2.5 py-1 text-xl input"
          name="BirthdayParameterRegister"
          id="BirthdayParameterRegister"
          placeholder="Your Birthday"
          required
        />
      </div>

      <div class="mx-auto w-8/12 flex items-start justify-center flex-col mb-8">
        <label for="EmailParameterRegister" class="text-3xl">Your Email</label>
        <input
          type="email"
          class="w-full rounded-md px-2.5 py-1 text-xl input"
          name="EmailParameterRegister"
          id="EmailParameterRegister"
          placeholder="Your Email"
          required
        />
      </div>

      <div class="mx-auto w-8/12 flex items-start justify-center flex-col mb-8">
        <label for="PasswdParameterRegister" class="text-3xl">Your Password</label>
        <input
          v-bind:type="pass"
          class="w-full rounded-md px-2.5 py-1 text-xl input"
          name="PasswdParameterRegister"
          id="PasswdParameterRegister"
          placeholder="Your Password"
          required
        />
        <button @click.prevent="joao">Show password</button>
      </div>

      <button
        type="submit"
        id=""
        class="py-4 text-3xl mx-auto w-4/12 flex items-center justify-center flex-col mb-8 border-2 rounded-lg bg-gray-500"
      >
        Register
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
