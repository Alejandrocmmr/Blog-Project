<script setup lang="ts">
import SideBar from '../components/SideBar.vue'
import Documents1Vue from '@/components/sidebar/PostsInGenders/Documents/Documents1Vue.vue'
import Documents2Vue from '@/components/sidebar/PostsInGenders/Documents/Documents2Vue.vue'
import Games1Vue from '@/components/sidebar/PostsInGenders/Games/Games1Vue.vue'
import Games2Vue from '@/components/sidebar/PostsInGenders/Games/Games2Vue.vue'
import General1Vue from '@/components/sidebar/PostsInGenders/GeneralDiscussions/General1Vue.vue'
import General2Vue from '@/components/sidebar/PostsInGenders/GeneralDiscussions/General2Vue.vue'
import Home1Vue from '@/components/sidebar/PostsInGenders/HomeAndHealth/Home1Vue.vue'
import Home2Vue from '@/components/sidebar/PostsInGenders/HomeAndHealth/Home2Vue.vue'
import News1Vue from '@/components/sidebar/PostsInGenders/News/News1Vue.vue'
import News2Vue from '@/components/sidebar/PostsInGenders/News/News2Vue.vue'
import Social1Vue from '@/components/sidebar/PostsInGenders/SocialMedia/Social1Vue.vue'
import Social2Vue from '@/components/sidebar/PostsInGenders/SocialMedia/Social2Vue.vue'

let RandonNumber = () => {
  return Math.floor(Math.random() * 11)
}

let finalCharged: any

let charged = () => {
  let prov = RandonNumber()
  switch (prov) {
    case 0:
      finalCharged = Documents1Vue
      break
    case 1:
      finalCharged = Documents2Vue
      break
    case 2:
      finalCharged = Games1Vue
      break
    case 3:
      finalCharged = Games2Vue
      break
    case 4:
      finalCharged = General1Vue
      break
    case 5:
      finalCharged = General2Vue
      break
    case 6:
      finalCharged = Home1Vue
      break
    case 7:
      finalCharged = Home2Vue
      break
    case 8:
      finalCharged = News1Vue
      break
    case 9:
      finalCharged = News2Vue
      break
    case 10:
      finalCharged = Social1Vue
      break
    case 11:
      finalCharged = Social2Vue
      break
    default:
      finalCharged = Games1Vue
  }
}
charged()
</script>

<template>
  <div class="flex min-h-screen max-h-full w-full overflow-visible">
    <main class="main">
      <div class="bg-gray-800 rounded-lg text-center pt-5 text-6xl my-4 w-8/12 h-24 m-auto">
        Welcome, See Some Of Our Posts
      </div>
      <component :is="finalCharged"></component>
    </main>

    <SideBar />
  </div>
</template>

<style>
.main {
  width: 86%;
}
</style>
