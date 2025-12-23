<script setup>
import Topbar from "@/components/Topbar.vue";
import AmericaImageLoader from "@/components/AmericaImageLoader.vue";
</script>

<template>
  <Topbar/>

  <div class="flex flex-col mx-auto border-b-1 pt-4 border-gray-300 w-9/10 sm:w-4/5 2xl:w-3/5">
    <h1 class="text-xl text-po-600 font-semibold w-80">America has been such an adventure, so it deserved a page of its own.</h1>
    <div class="border-b-1 border-gray-300 pb-4">
      <div class="text-pog-600 mt-4 w-4/5 lg:w-3/5">
        <p class="mt-3">America has been such an adventure, so it deserved a page of its own.</p>
        <p class="mt-3">We explored the west side of America, and it was an experience I’ll never forget.
          From the huge cities to the wide open landscapes, everything felt different and exciting.
          We spent our days traveling from place to place, each spot with its own atmosphere and story.
          One moment we were walking through busy streets full of lights and noise,
          and the next we were surrounded by quiet mountains and endless views.</p>
        <p class="mt-3">The trip made me realize how big the world really is and how much there is still to see.
          It opened my eyes and inspired me to want more—more traveling, more exploring,
          and more capturing those moments that stay with you.</p>
        <p class="mt-3">Being there changed something in me, and that’s why this journey has its own place here.</p>
      </div>
    </div>
      <video controls class="rounded-xl mt-3 mb-4 lg:w-4/5" src="/Los%20Angeles%20(California)%20to%20Los%20Angeles%20(California)-qQG3WZ7CICpfBShA.mp4"></video>
  </div>
  <div>
    <AmericaImageLoader/>
  </div>
</template>

<style scoped>

</style>