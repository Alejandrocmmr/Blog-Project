<script setup lang="ts">

</script>

<template>
    <header class="menu border-spacing-6 border-2 border-black bg-slate-800 p-3 w-full h-auto flex ">
      
      <nav class="flex space-x-12 justify-around wrap w-5/6 " >

        <span class="text-4xl text w-32 prevent-select">

        <RouterLink to="/">
          Home
        </RouterLink></span>

        <span class="text-4xl text w-32 prevent-select">

        <RouterLink to="/About">
          About
        </RouterLink></span>

        <span class="text-4xl text w-32 h-auto prevent-select">

        <RouterLink to="/posts">
         Posts
        </RouterLink></span>
        <span class="text-4xl text w-32 h-auto prevent-select">

        <RouterLink to="/Contact">
         Contact
        </RouterLink></span>
        <span class="text-4xl text w-48 h-auto prevent-select">

        <RouterLink to="/Login">
         Login/Register
        </RouterLink></span>
      </nav>

        <label for="SearchMainBox" id="searchbutton" class="w-7 searchbutton h-auto flex-wrap" ></label>
        <input type="search" name="SearchMainBox" id="SearchMainBox" class="w-52  flex-wrap h-auto  me-5 ms-3 " aria-autocomplete="both" autocomplete="off" autocorrect="off" autocapitalize="off" maxlength="64"  value="" placeholder="Search In Blog" >

    </header>
    <div class="border-spacing-6 border-2 border-white p-3 w-full h-auto">
      <nav class="flex space-x-6 justify-center wrap">
      <span class="text-4xl text w-32 h-auto prevent-select">Posts</span>
      <span class="text-4xl text w-32 h-auto prevent-select">Posts</span>
      <span class="text-4xl text w-32 h-auto prevent-select">Posts</span>
      <span class="text-4xl text w-32 h-auto prevent-select">Postswdw</span>
      <span class="text-4xl text w-48 h-auto prevent-select">PostsdwdwdPosts</span>
      </nav>
    </div>
</template>

<style scoped>

.searchbutton:hover {
  cursor: pointer;
}
.searchbutton{
  background-image: url(../assets/icons/search.png);
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
}
.menu{
  position: fixed;
}

.wrap{
  flex-wrap: wrap;
  word-wrap: normal;
}
</style>