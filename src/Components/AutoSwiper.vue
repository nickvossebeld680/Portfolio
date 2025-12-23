<script setup>
import { onMounted } from 'vue';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

onMounted(() => {
  new Swiper('.swiper', {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    speed: 6000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: false
    }
  });
});
</script>

<template>
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><img class="w-20" src="/HtmlLogo.png" alt=""></div>
    <div class="swiper-slide"><img class="w-38" src="/CssLogo.png" alt=""></div>
    <div class="swiper-slide"><img class="w-32" src="/JavascriptLogo.png" alt=""></div>
    <div class="swiper-slide"><img class="w-30" src="/PhpLogo.png" alt=""></div>
    <div class="swiper-slide"><img class="w-40" src="/LaravelLogo.png" alt=""></div>
    <div class="swiper-slide"><img class="w-35" src="/FilamentLogo.png" alt=""></div>
    <div class="swiper-slide"><img class="w-48" src="/TailwindLogo.png" alt=""></div>
    <div class="swiper-slide"><img class="w-22" src="/VueLogo.png" alt=""></div>
  </div>
</div>

</template>

<style scoped>
.swiper {
  width: 100%;
}

.swiper-wrapper {
  transition-timing-function: linear;
  align-items: center;
}

.swiper-slide {
  position: relative;
  width: 15rem;
  height: 8rem;
  border: 1px solid darkgray;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>