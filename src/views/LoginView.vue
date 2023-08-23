<script setup lang="ts">

</script>

<template>
    <div class=" flex items-center justify-center mt-8 mb-6 flex-wrap">
        <section class=""><span class="border-4 py-2 prevent-select mr-20 bg-gray-700 rounded-lg px-8">

            <RouterLink to="/Login/Login">
                Login
            </RouterLink></span></section>

        <section class=""><span class="border-4 px-4 py-2 prevent-select mr-20 bg-gray-700 rounded-lg">

            <RouterLink to="/Login/Register">
                Register
            </RouterLink></span></section>
        </div>
</template>

<style scoped>

*{
    border-color: #66FCF1;
}


span{
    font-size: 40px;
}


</style>