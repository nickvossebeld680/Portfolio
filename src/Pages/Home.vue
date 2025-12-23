<script setup>
import 'swiper/css';

import Topbar from '@/Components/Topbar.vue';
import AutoSwiper from "@/Components/AutoSwiper.vue";
// import Swiper from "@/Components/Swiper.vue";
</script>

<template>
  <topbar/>

  <div class="flex flex-col mx-auto py-25 w-9/10 sm:w-4/5 2xl:w-3/5">
  <img src="/Porsche3D.png" alt="" class="fadeInUp-animation porsche-img flex m-auto w-120 sm:w-150 xl:w-200"/>

    <div>
      <div>
        <h1 class="fadeInUp-animation flex mx-auto text-xl text-po-600 font-semibold text-center w-80">Hello, I'm Nick Vossebeld a student Software Developer.</h1>
      </div>
      <div class="flex flex-row gap-2 justify-center mt-2">
        <a href="https://www.linkedin.com/in/nick-vossebeld-355472317/" target="_blank"><img src="/LinkedIn.png" alt="" class="fadeInUp-animation bg-po-600 p-1.5 rounded-xl w-10 hover:bg-po-500"/></a>
        <a href="https://nl-nl.facebook.com/people/Nick-Vossebeld/pfbid02Tw9SyhfdGSVnjT9Ye9685pZomuQTkaCA4Wx9F4RzSpqD7CaPwc6k84hWcfTyVVnKl/" target="_blank"><img src="/Facebook.png" alt="" class="fadeInUp-animation bg-po-600 p-1.5 rounded-xl w-10 hover:bg-po-500"/></a>
        <a href="https://www.instagram.com/nick.vossebeld/" target="_blank"><img src="/Instagram.png" alt="" class="fadeInUp-animation bg-po-600 p-1.5 rounded-xl w-10 hover:bg-po-500"/></a>
      </div>
    </div>
  </div>
  <div class="bg-po-100">
    <div class="py-15 mx-auto w-9/10 sm:w-4/5 2xl:w-3/5 lg:flex lg:flex-row lg:items-center">
      <div class="text-pog-600 w-9/10 sm:w-4/5 lg:w-3/4 xl:w-2/4">
        <h2 class="text-xl text-pos-600 font-semibold">About me</h2>
        <p class="mt-4 ">
          I’m a third-year Software Development student at MBO level 4. At the moment, I am doing my internship at Coddin, where I am gaining hands-on experience in real-world development projects.
        </p>
        <p class="mt-3 ">
          I am motivated, eager to learn, and always looking for opportunities to grow as a developer. My goal is to continue developing my skills and eventually become a skilled and reliable software developer in the industry.
        </p>
      </div>
      <div class="w-full flex flex-row h-20 lg:justify-center items-center mt-3 lg:ml-10">
        <div class="border-e-1 border-gray-500 pe-5 me-5">
          <h3 class="text-4xl text-pos-600 font-light">3+</h3>
          <p class="text-sm text-pog-600 ">Student years of experience</p>
        </div>
        <div>
          <h3 class="text-4xl text-pos-600 font-light">2+</h3>
          <p class="text-sm text-pog-600 ">School projects completed</p>
        </div>
      </div>
    </div>
  </div>
  <div class="flex mx-auto border-b-1 border-gray-300 py-5 w-9/10 sm:w-4/5 2xl:w-3/5">
    <AutoSwiper/>
  </div>
  <div class="mx-auto mb-10 border-b-1 border-gray-300 pb-3 w-9/10 sm:w-4/5 2xl:w-3/5">
    <h2 class="text-xl mt-4 text-pos-600 font-semibold">Recent work</h2>
    <img src="/TicketshopLogo.png" alt="" class="mt-4">
    <div class="flex flex-row gap-2 justify-between items-center mt-3">
      <h5>Ticketshop</h5>
      <p class="text-xs">Redesign/ Better converse</p>
      <button class="bg-po-600 text-white px-2 py-1 rounded text-sm">View work</button>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 651px) and (max-height: 723px) {
  .porsche-img {
    margin-top: -8rem;
  }
}

@media (min-width: 651px) and (max-height: 801px) {
  .porsche-img {
    margin-top: -6rem;
  }
}

.swiper .swiper-wrapper {
  align-items: center;
}

.swiper .swiper-slide {
  width: auto;
}

@keyframes fadeInUp {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

.fadeInUp-animation {
  animation: 1.5s fadeInUp;
}
</style>