<script setup lang="ts">
import LoginView from '../../views/LoginView.vue'
</script>

<template>
  <LoginView />

  <div>
    <form
      action="#"
      method="get"
      class="mx-auto w-7/12 bg-gray-800 rounded-3xl py-8 pb-2 mb-16 border-2"
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
        />
      </div>

      <button
        type="submit"
        id=""
        class="py-4 text-4xl mx-auto w-4/12 flex items-center justify-center flex-col mb-8 border-2 rounded-lg bg-gray-500"
      >
        Submit
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
