<script setup lang="ts"></script>

<template>
  <aside
    class="border-4 flex flex-wrap flex-col h-auto w-1/12 text-center sidebar justify-between max-h-screen"
  >
    <!-----------------------------------------------DIVISOR----------------------------------------------->

    <RouterLink to="/Home/News">
      <section class=""><span class="text w-32 prevent-select"> News </span></section>
    </RouterLink>

    <p class="w-full prevent-select"></p>

    <!-----------------------------------------------DIVISOR----------------------------------------------->

    <RouterLink to="/Home/Games">
      <section class=""><span class="text w-32 prevent-select"> Games </span></section>
    </RouterLink>

    <p class="w-full prevent-select"></p>

    <!-----------------------------------------------DIVISOR----------------------------------------------->
    <RouterLink to="/Home/HomeAndHealth">
      <section class=""><span class="text w-32 prevent-select"> HomeAndHealth </span></section>
    </RouterLink>

    <p class="w-full prevent-select"></p>

    <!-----------------------------------------------DIVISOR----------------------------------------------->
    <RouterLink to="/Home/SocialMedias">
      <section class="">
        <span class="text w-32 prevent-select"> SocialMedias </span>
      </section>
    </RouterLink>
    <p class="w-full prevent-select"></p>

    <!-----------------------------------------------DIVISOR----------------------------------------------->
    <RouterLink to="/Home/Documents">
      <section class="">
        <span class="text w-32 prevent-select"> Documents </span>
      </section>
    </RouterLink>
    <p class="w-full prevent-select"></p>

    <!-----------------------------------------------DIVISOR----------------------------------------------->
    <RouterLink to="/Home/GeneralDiscussions">
      <section class="">
        <span class="text w-32 prevent-select"> GeneralDiscussions </span>
      </section>
    </RouterLink>
  </aside>
</template>

<style scoped>
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
