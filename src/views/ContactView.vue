<script setup lang="ts">

</script>

<template>

    <div> 
    <main>
        <div class="pt-8 pb-px px-4 mx-auto my-10 max-w-screen-md bg-gray-800 rounded-3xl">
      <h2 class="mt-4 mb-8 text-4xl tracking-tight font-extrabold text-center ">Contact Us</h2>
      <p class="mb-0 lg:mb-16 font-light text-center text-zinc-400 sm:text-xl">Have some trouble? Have some question to us? Need some help or anything? Let us know.</p>
        </div>
    </main>
    
    <section>

        <form action="#" method="post" class="mx-auto w-7/12 bg-gray-800 rounded-3xl py-8 pb-2 mb-16">

            <div class="mx-auto w-8/12 flex items-start justify-center flex-col mb-8 border- border-red-700">
                <label for="NameContact" class="text-3xl ">Your Name</label>
                <input type="text" class="w-full rounded-md px-2.5 py-1 text-2xl input" name="NameContact" id="NameContact" placeholder="Name Example" required>
            </div>

            <div class="mx-auto w-8/12 flex items-start justify-center flex-col mb-8 ">
                <label for="emailContact" class="text-3xl ">Your email</label>
                <input type="email" class="w-full rounded-md px-2.5 py-1 text-2xl input" name="emailContact" id="emailContact" placeholder="name@domain.example" required>
            </div>

            <div class="mx-auto w-8/12 flex items-start justify-center flex-col mb-8 ">
                <label for="msgContact" class="text-3xl ">Your Message For Us</label>
                <textarea type="text" class="w-full rounded-md px-2.5 py-1 text-2xl input max-h-64 " name="msgContact" id="msgContact" placeholder="Your Message Here" required rows="4"></textarea>
            </div>
            <button type="submit" id="" class="py-4 text-4xl mx-auto w-4/12 flex items-center justify-center flex-col mb-8 border-2 rounded-lg bg-gray-700">Send Your Message</button>
        </form>

    </section>

    </div>

</template>

<style scoped>

*{
    border-color: #66FCF1;
}


label{
    font-family: 'Dancing Script', cursive; 
    font-weight: bolder;
}
.input{
    color: black;
}

</style>