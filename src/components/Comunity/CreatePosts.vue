<template>
  <section>
    <form
      action="#"
      method="post"
      class="mx-auto w-7/12 bg-gray-800 rounded-3xl py-8 pb-2 mb-16 border-2"
      @submit.prevent="sendThePost()"
    >
      <div class="mx-auto w-8/12 flex items-start justify-center flex-col mb-8">
        <p class="w-full rounded-md text-4xl text-center border-2 p-3 h-full mb-4">
          Wants to Create a New Post? <br />Fill The Form
        </p>
        <br />
        <label for="NameNewPost" class="text-3xl">Your Name</label>
        <input
          type="text"
          class="w-full rounded-md px-2.5 py-1 text-2xl input"
          name="NameNewPost"
          id="NameNewPost"
          placeholder="Name Example"
          v-model="FormOfThePost.name"
          required
        />
      </div>

      <div class="mx-auto w-8/12 flex items-start justify-center flex-col mb-8">
        <label for="emailNewPost" class="text-3xl">Your email</label>
        <input
          type="email"
          class="w-full rounded-md px-2.5 py-1 text-2xl input"
          name="emailNewPost"
          id="emailNewPost"
          placeholder="name@domain.example"
          v-model="FormOfThePost.email"
          required
        />
      </div>

      <div class="mx-auto w-8/12 flex items-start justify-center flex-col mb-8">
        <label for="msgNewPost" class="text-3xl">Your Title Of The Post</label>
        <input
          type="text"
          class="w-full rounded-md px-2.5 py-1 text-2xl input"
          name="msgNewPost"
          id="msgNewPost"
          maxlength="55"
          placeholder="Example Here"
          v-model="FormOfThePost.title"
          required
        />
      </div>
      <button
        type="submit"
        id=""
        class="py-4 text-4xl mx-auto w-4/12 flex items-center justify-center flex-col mb-8 border-2 rounded-lg bg-gray-500"
      >
        Create Your Post
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import router from '@/router'
import axios from 'axios'
import { ref } from 'vue'

let sendThePost = async () => {
  try {
    await axios({
      url: 'http://localhost:3000/ComunityPosts',
      method: 'post',
      data: {
        creator: FormOfThePost.value.name,
        creatorMail: FormOfThePost.value.email,
        title: FormOfThePost.value.title
      }
    }).then(function (re) {
      re.data
    })
  } catch (error) {
    console.log(error)
  }
  router.push('/Comunity')

  setTimeout(() => {
    location.reload()
  }, 500)
}

let FormOfThePost = ref({
  name: '',
  email: '',
  title: ''
})
</script>

<style scoped>
* {
  border-color: #66fcf1;
}

label {
  font-family: 'Dancing Script', cursive;
  font-weight: bolder;
}
.input {
  color: black;
}
</style>
