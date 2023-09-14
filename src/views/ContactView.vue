<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const displayvariable = ref('none')
const messages: any = ref([])
let Datafiltered: any = ref([])
let dataReceived: any

const conectionSend = async () => {
  try {
    await axios({
      url: 'http://localhost:3000/Messages',
      method: 'post',
      data: {
        name: formSend.value.name,
        email: formSend.value.email,
        message: formSend.value.message
      }
    }).then(function (response) {
      console.log(response.data)
      console.log(response.status)
      console.log(response.request)
    })
  } catch (error) {
    console.log(error)
  }
}

const formSend = ref({
  name: '',
  email: '',
  message: ' '
})

const formReceive = ref({
  name: 'alejandro',
  email: 'alejandro@gmail.com',
  message: 'TESTANDO '
})

const conectionReceive = async () => {
  try {
    await axios({
      url: 'http://localhost:3000/Messages',
      method: 'get'
    }).then(function (re) {
      let datas = re.data

      for (dataReceived of datas) {
        if (dataReceived.email === formReceive.value.email) {
          Datafiltered.value.push(dataReceived)
        }
      }
      if (Datafiltered.value.length >= 1) {
        displayvariable.value = 'flex'

        for (let elprov of Datafiltered.value) {
          messages.value.push(elprov)
        }
      } else {
        return alert('EMAIL INCORRETO OU INEXISTENTE (ambos precisam ser do mesmo registro)')
      }
    })
  } catch (error) {
    console.log(error)
  }
}

const deleteMessage = async (id: any) => {
  if (confirm('Are you sure about delete this message?')) {
    try {
      await axios({
        url: `http://localhost:3000/Messages/${id}`,
        method: 'delete'
      }).then(function (re) {
        console.log(re.data)
        console.log(re.status)
        console.log(re.config)
        console.log(re.headers)
      })
    } catch (error) {
      console.log(error)
    }

    alert('Message Deleted')
    location.reload()
  } else {
    alert('You canceled the Delete Process!')
  }
}
</script>

<template>
  <div>
    <main>
      <div class="pt-8 pb-px px-4 mx-auto my-10 max-w-screen-md bg-gray-800 rounded-3xl border-2">
        <h2 class="mt-4 mb-8 text-4xl tracking-tight font-extrabold text-center">Contact Us</h2>
        <p class="mb-0 lg:mb-16 font-light text-center text-zinc-400 sm:text-xl">
          Have some trouble? Have some question to us? Need some help or anything? Let us know.
        </p>
      </div>
    </main>

    <section>
      <form
        action="#"
        method="post"
        class="mx-auto w-7/12 bg-gray-800 rounded-3xl py-8 pb-2 mb-16 border-2"
        @submit.prevent="conectionSend"
      >
        <div class="mx-auto w-8/12 flex items-start justify-center flex-col mb-8">
          <p class="w-full rounded-md text-4xl text-center border-2 p-3 h-full mb-4">
            Wants to send a message? Place the information here
          </p>
          <br />
          <label for="NameContact" class="text-3xl">Your Name</label>
          <input
            type="text"
            class="w-full rounded-md px-2.5 py-1 text-2xl input"
            name="NameContact"
            id="NameContact"
            placeholder="Name Example"
            v-model="formSend.name"
            required
          />
        </div>

        <div class="mx-auto w-8/12 flex items-start justify-center flex-col mb-8">
          <label for="emailContact" class="text-3xl">Your email</label>
          <input
            type="email"
            class="w-full rounded-md px-2.5 py-1 text-2xl input"
            name="emailContact"
            id="emailContact"
            placeholder="name@domain.example"
            v-model="formSend.email"
            required
          />
        </div>

        <div class="mx-auto w-8/12 flex items-start justify-center flex-col mb-8">
          <label for="msgContact" class="text-3xl">Your Message For Us</label>
          <textarea
            type="text"
            class="w-full rounded-md px-2.5 py-1 text-2xl input max-h-64"
            name="msgContact"
            id="msgContact"
            placeholder="Your Message Here"
            v-model="formSend.message"
            maxlength="500"
            required
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          id=""
          class="py-4 text-4xl mx-auto w-4/12 flex items-center justify-center flex-col mb-8 border-2 rounded-lg bg-gray-500"
        >
          Send Your Message
        </button>
      </form>
    </section>

    <!--    -------------------------------------------------------------------------------------------------------------------  -->

    <section>
      <form
        action="#"
        method="post"
        class="mx-auto w-7/12 bg-gray-800 rounded-3xl py-8 pb-2 mb-16 border-2"
        @submit.prevent="conectionReceive"
      >
        <div class="mx-auto w-8/12 flex items-start justify-center flex-col mb-8">
          <p class="w-full rounded-md text-4xl text-center border-2 p-3 h-full mb-4">
            Had send a message and wants to see or delete? Place the information here
          </p>
          <br />
          <label for="NameSended" class="text-3xl">Your Name</label>
          <input
            type="text"
            class="w-full rounded-md px-2.5 py-1 text-2xl input"
            name="NomeSended"
            id="NameSended"
            placeholder="Name Example"
            v-model="formReceive.name"
            required
          />
        </div>

        <div class="mx-auto w-8/12 flex items-start justify-center flex-col mb-8">
          <label for="emailSended" class="text-3xl">Your email</label>
          <input
            type="email"
            class="w-full rounded-md px-2.5 py-1 text-2xl input"
            name="emailSended"
            id="emailSended"
            placeholder="name@domain.example"
            v-model="formReceive.email"
            required
          />
        </div>

        <div
          class="mx-auto w-8/12 flex items-start justify-center flex-col mb-8"
          v-for="message in messages"
          :key="message.id"
        >
          <label for="msgSended" class="text-3xl">Yours Messages sended</label>
          <textarea
            type="text"
            class="w-full rounded-md px-2.5 py-1 text-2xl input max-h-64"
            name="msgSended"
            id="msgSended"
            v-model="message.message"
            maxlength="500"
            required
            rows="4"
          ></textarea>

          <div
            class="flex items-center justify-center input mt-4 border-2 w-full displaySended py-2"
          >
            <label for="idSended" class="text-2xl mr-6">Message Identificator</label>
            <input
              type="text"
              name="idSended"
              id="idSended"
              v-model="message.id"
              class="w-10 rounded-md h-10 text-center py-2 overflow-hidden mr-16 text-2xl"
              style="resize: none"
            />

            <button
              type="button"
              id=""
              class="py-2 text-xl w-3/12 border-2 rounded-lg bg-gray-500 ml-2 mr-5"
              @click="deleteMessage(message.id)"
            >
              delete Your Messages
            </button>
          </div>
        </div>

        <div class="flex items-center justify-between mx-14">
          <button
            type="submit"
            id=""
            class="py-4 text-2xl mx-auto w-4/12 flex items-center flex-col mb-8 border-2 rounded-lg bg-gray-500"
          >
            See Yours Messages
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<style scoped>
* {
  border-color: #66fcf1;
}

.displaySended {
  display: v-bind(displayvariable);
}

label {
  font-family: 'Dancing Script', cursive;
  font-weight: bolder;
}
.input {
  color: black;
}
</style>
