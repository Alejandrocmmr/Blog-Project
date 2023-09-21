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

let finalCharge: any

let charged = () => {
  let prov = RandonNumber()
  switch (prov) {
    case 0:
      finalCharge = Documents1Vue
      break
    case 1:
      finalCharge = Documents2Vue
      break
    case 2:
      finalCharge = Games1Vue
      break
    case 3:
      finalCharge = Games2Vue
      break
    case 4:
      finalCharge = General1Vue
      break
    case 5:
      finalCharge = General2Vue
      break
    case 6:
      finalCharge = Home1Vue
      break
    case 7:
      finalCharge = Home2Vue
      break
    case 8:
      finalCharge = News1Vue
      break
    case 9:
      finalCharge = News2Vue
      break
    case 10:
      finalCharge = Social1Vue
      break
    case 11:
      finalCharge = Social2Vue
      break
    default:
      finalCharge = Games1Vue
  }
}
charged()
// let random = () => {
//   if (variable.value === true) {
//     return SideBar
//   } else {
//     return ContactView
//   }
// }
// let variable = ref(false)
</script>

<template>
  <div class="flex min-h-screen max-h-full w-full overflow-visible">
    <main class="main">
      <div class="bg-gray-800 rounded-lg text-center pt-5 text-6xl my-4 w-8/12 h-24 m-auto">
        Welcome, See Some Of Our Posts
      </div>
      <component :is="finalCharge"></component>
    </main>

    <SideBar />
  </div>
</template>

<style>
.main {
  width: 86%;
}
</style>
