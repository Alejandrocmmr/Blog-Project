<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

let ComunityPosts: any = ref([])

let data

const GetPosts = async () => {
  try {
    await axios({
      url: 'http://localhost:3000/ComunityPosts',
      method: 'get'
    }).then(function (re) {
      let datas = re.data

      for (data of datas) {
        ComunityPosts.value.push(data)
      }
    })
  } catch (error) {
    console.log(error)
  }
}

GetPosts()

let titleCharged = ref()
let nameCharged = ref()
let ComunityMessages: any = ref([])
let changeMainPage = ref('Display:flex')
let changeMessagePage = ref('Display:none')

const GetMessages = async (title: any, creator: any) => {
  ComunityMessages.value = []
  try {
    await axios({
      url: 'http://localhost:3000/ComunityMessage/',
      method: 'get'
    }).then(function (re) {
      let datas = re.data

      for (data of datas) {
        if (data.titleofpost == title) {
          ComunityMessages.value.push(data)
        }
      }
    })
  } catch (error) {
    console.log(error)
  }

  titleCharged.value = title
  nameCharged.value = creator

  changeMainPage.value = 'Display:none'
  changeMessagePage.value = 'Display:inherit'
}
</script>

<template>
  <div class="flex w-full overflow-visible">
    <main class="flex mr-1 items-center">
      <div class="w-full h-3/4 text-5xl items-center text-white pde" :style="changeMainPage">
        WELCOME TO OUR COMUNITY, SEE OUR POST ASIDE AND INTERACT WITH THE COMUNITY
      </div>
      <section class="w-full h-auto flex-col overflow-scroll" :style="changeMessagePage">
        <div class="flex flex-col justify-center items-center border-4 h-64">
          <div class="flex w-full h-28 pt-2">
            <p class="w-72 text-2xl p-1 h-14">Name of the creator :</p>
            <p class="w-full text-center h-10 text-2xl mb-2">
              {{ nameCharged }}
            </p>
          </div>
          <div class="flex w-full border-t-2 h-32 pt-2">
            <p class="w-72 text-2xl p-1 h-14">Title Of The Page :</p>
            <p class="w-full text-center h-20 text-3xl break-all pt-">
              {{ titleCharged }}
            </p>
          </div>
        </div>
        <div
          class="border mt-4 h-32"
          v-for="ComunityMessage in ComunityMessages"
          :key="ComunityMessage.id"
        >
          <div class="flex flex-col text-xl items-center py-4">
            <p class="text-2xl h-10">{{ ComunityMessage.name }}</p>
            <p class="h-10">{{ ComunityMessage.messagePosted }}</p>
          </div>
        </div>
      </section>
    </main>
    <aside
      class="border-4 flex flex-wrap flex-col min-h-full max-h-screen w-1/12 text-center sidebar justify-start screen overflow-auto"
    >
      <div class="flex flex-col h-fit mb-5 text-xl">
        <button class="border-4 mb-2 min-width w-3/3 mr-3" type="button" @click="nothingherefornow">
          Create a New Post Here
        </button>
        <div class="border-4 min-width mr-3">All The Posts Active :</div>
      </div>
      <!-----------------------------------------------DIVISOR----------------------------------------------->
      <div v-for="ComunityPost in ComunityPosts" :key="ComunityPost.id">
        <p
          @click="GetMessages(ComunityPost.title, ComunityPost.creator)"
          class="borderblack min-width mr-3 mb-3 rounded-md text-center py-2 text-xl bg-transparent border-2"
        >
          {{ ComunityPost.title }}
        </p>
      </div>
    </aside>
  </div>
</template>

<style scoped>
* {
  overflow: auto;
  color: black;
}

.pde {
  border: 3px #66fcf1 solid;
}
.borderblack {
  border-color: black;
}
.text-white {
  font-family: 'Caveat', cursive;
}

.min-width {
  min-width: 13vw;
}

span {
  font-size: 18px;
  font-weight: 900;
}

section {
  width: 100%;
}
.sidebar {
  border-color: black;
  width: 25%;
  padding: 0 15px;
  padding-bottom: 1%;
  padding-top: 1%;
}

.screen {
  max-height: 90vh;
}
main {
  width: 86%;
}

.screen {
  min-height: 90vh;
}
</style>
