<script setup lang="ts">

</script>

<template>

    <aside class="border-4  flex flex-wrap flex-col h-auto w-1/12 text-center sidebar justify-between">

<!-----------------------------------------------DIVISOR----------------------------------------------->

    <section class=""><span class="text w-32 prevent-select">

    <RouterLink to="/Home/News">
      News
    </RouterLink></span></section>

    <p class="w-full prevent-select"></p>


<!-----------------------------------------------DIVISOR----------------------------------------------->
    <section class=""><span class="text w-32 prevent-select">

    <RouterLink to="/Home/Games">
      Games
    </RouterLink></span></section>

    <p class="w-full prevent-select"></p>


<!-----------------------------------------------DIVISOR----------------------------------------------->
    <section class=""><span class="text w-32 prevent-select">

    <RouterLink to="/Home/HomeAndHealth">
      HomeAndHealth
    </RouterLink></span></section>

    <p class="w-full prevent-select"></p>


<!-----------------------------------------------DIVISOR----------------------------------------------->
    <section class=""><span class="text w-32 prevent-select">

    <RouterLink to="/Home/SocialMedias">
      SocialMedias
    </RouterLink></span></section>

    <p class="w-full prevent-select"></p>


<!-----------------------------------------------DIVISOR----------------------------------------------->
    <section class=""><span class="text w-32 prevent-select">

    <RouterLink to="/Home/Documents">
      Documents
    </RouterLink></span></section>

    <p class="w-full prevent-select"></p>


<!-----------------------------------------------DIVISOR----------------------------------------------->
    <section class=""><span class="text w-32 prevent-select">

    <RouterLink to="/Home/GeneralDiscussions">
      GeneralDiscussions
    </RouterLink></span></section>

</aside>


</template>
<style scoped>

p{
  border: 3px #1F2833 solid ;
}

span{
  font-size: 18px;
  font-weight: 900;
}

section{
  border: 3px #66FCF1 dashed;
  width: 100%;
  background-color: #45A29E;
}
.sidebar{
  border-color: black;
  width: 14%;
  padding: 0 15px;  
  padding-bottom: 8%;
  padding-top: 3%;
  
}


</style>