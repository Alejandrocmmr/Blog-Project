<script setup lang="ts">
</script>

<template>
  <main class="flex justify-around ">
    <img src="../assets/WELCOME.jpg" alt="nothing here" class="w-5/12 h-2/5 border-2 border-blue-600">

    <div class="border-2 border-black w-5/12 msg bg-[url('../assets/backgroundAbout.jpg')] ">

      <div class="text-7xl aboutTitle w-full h-3 my-8  flex items-center justify-center"> Hello my friends</div>
     
      <div class="about w-full h-auto  flex items-center justify-center">We are one Web-Blog that exists just on purpose of have some posts and some use educational and some ways to learn and practice some tools</div>

    </div>
  </main>

</template>

<style>
.aboutTitle{
  font-family: 'Dancing Script', cursive;
  font-weight: bolder;
  padding: 3rem;
}
 
.about{
  font-size: 50px;
  font-family: 'Dancing Script', cursive;
  font-weight: bolder;
  padding: 2rem;
} 

.msg{
  background-image: url(../assets/backgroundAbout.jpg);
  background-size: 100%;
};
</style>
