<script setup>

import Swiper from 'swiper';
import { EffectCoverflow, Pagination, Keyboard, Navigation} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { onMounted } from "vue";

onMounted(() => {
  const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 1.2,
    initialSlide: 1,

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
        <div class="swiper-slide"><img class="w-140 h-120 object-cover rounded-2xl" src="/Party.png" alt=""></div>
        <div class="swiper-slide"><img class="w-140 h-120 object-cover rounded-2xl" src="/Gym.png" alt=""></div>
        <div class="swiper-slide"><img class="w-140 h-120 object-cover rounded-2xl" src="/Hogsmeade.png" alt=""></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>