<script setup>

import Swiper from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { onMounted } from "vue";

onMounted(() => {
  const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 1.2,
    initialSlide: 4,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    breakpoints : {
      640: {
        slidesPerView: 1.5,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});
</script>

<template>
  <div>
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img class="w-140 h-120 object-cover rounded-2xl" src="/Party.jpg" alt=""></div>
        <div class="swiper-slide"><img class="w-140 h-120 object-cover rounded-2xl" src="/Netflix.png" alt=""></div>
        <div class="swiper-slide"><img class="w-140 h-120 object-cover rounded-2xl" src="/bmw_m_1000_rr_low_res.jpg.avif" alt=""></div>
        <div class="swiper-slide"><img class="w-140 h-120 object-cover rounded-2xl" src="/Gym.png" alt=""></div>
        <div class="swiper-slide"><img class="w-140 h-120 object-cover rounded-2xl" src="/Programmeren.jpg" alt=""></div>
        <div class="swiper-slide"><img class="w-140 h-120 object-cover rounded-2xl" src="/Jurgen-Langezaal-concept.webp" alt=""></div>
        <div class="swiper-slide"><img class="w-140 h-120 object-cover rounded-2xl" src="/ABT-Audi-RS6-LE-main.jpg" alt=""></div>
        <div class="swiper-slide"><img class="w-140 h-120 object-cover rounded-2xl" src="/Reizen.jpg" alt=""></div>
        <div class="swiper-slide"><img class="w-140 h-120 object-cover rounded-2xl" src="/Fotografie.jpg" alt=""></div>

      </div>
    </div>
  </div>
</template>

<style scoped>
</style>