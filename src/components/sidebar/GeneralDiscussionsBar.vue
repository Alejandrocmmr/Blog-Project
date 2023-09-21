<script setup lang="ts">
import General1Vue from './PostsInGenders/GeneralDiscussions/General1Vue.vue'
import General2Vue from './PostsInGenders/GeneralDiscussions/General2Vue.vue'

import { ref } from 'vue'

let PageCharged = ref(General1Vue)

let componentSelected1 = ref(() => {
  return (PageCharged.value = General1Vue)
})
let componentSelected2 = ref(() => {
  return (PageCharged.value = General2Vue)
})
</script>

<template>
  <div class="flex min-h-screen max-h-full w-full overflow-visible">
    <main class="main">
      <component :is="PageCharged" />
    </main>
    <aside class="border-4 flex flex-wrap flex-col h-auto w-1/12 text-center sidebar">
      <!-----------------------------------------------DIVISOR----------------------------------------------->

      <section class="pointer mb-7" @click="componentSelected1()">
        <span class="text w-32 prevent-select"> GeneralDiscussions News 1 </span>
      </section>

      <p class="w-full prevent-select mb-7"></p>

      <!-----------------------------------------------DIVISOR----------------------------------------------->
      <section class="pointer mb-7" @click="componentSelected2()">
        <span class="text w-32 prevent-select"> GeneralDiscussions News 2 </span>
      </section>

      <!-----------------------------------------------DIVISOR----------------------------------------------->
    </aside>
  </div>
</template>
<style scoped>
.pointer:hover {
  cursor: pointer;
}
p {
  border: 3px #1f2833 solid;
}

span {
  font-size: 18px;
  font-weight: 900;
}

section {
  border: 3px #66fcf1 dashed;
  width: 100%;
  background-color: #45a29e;
}
.sidebar {
  border-color: black;
  width: 14%;
  padding: 0 15px;
  padding-bottom: 8%;
  padding-top: 3%;
}
</style>
