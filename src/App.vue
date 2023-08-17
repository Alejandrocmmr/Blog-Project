<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RouterLink, RouterView } from 'vue-router'
import MenuBar from './components/MenuBar.vue'
</script>

<template>
  
  <MenuBar/>
  <div class="h-1"></div>
  <RouterView />
</template>

<style>
@import url(main.css);

*{
  color: rgba(255, 255, 255, 0.9);
}
body{
  background-color: rgb(149, 146, 146);
}
.prevent-select {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

.fixedContainer {
  background-color:#ddd;
  position: fixed;
  padding: 1em;
  right: 0%;
  top: 3.7em;
  transform: translateX(-50%);
  }

</style>
