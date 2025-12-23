<script setup>
import { onMounted } from 'vue';
import 'swiper/css';

import Swiper from "swiper";

onMounted(() => {
  new Swiper('.swiper', {
    initialSlide: 3,
    centeredSlides: true,
    loop: true,
    speed: 900,
    grabCursor: true,
    allowTouchMove: false,
    effect: "coverflow",
    coverflowEffect: {
      rotate: -10,
      stretch: -45,
      depth: 90,
      modifier: 1,
    },
    mousewheel: {
      thresholdDelta: 50,
      sensitivity: 1,
    },
    Pagination: {
      el: '.swiper-pagination',
    },
  });
});
</script>

<template>
  <section>
    <div class="intrests-container">
      <h1 class="text-3xl text-pos-600 font-semibold mb-5">Interests</h1>
      <div class="slider-container">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="card">
                <div class="front">
                  <img src="/Gym.png" alt="">
                  <button>Learn more</button>
                </div>
                <div class="back">
                  <img src="/Gym.png" alt="">
                  <p>I enjoy going to the gym and staying active. It helps me maintain a healthy lifestyle and boosts my energy levels.</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="front">
                  <img src="/Party.png" alt="">
                  <button>Learn more</button>
                </div>
                <div class="back">
                  <img src="/Party.png" alt="">
                  <p>I like to go out with my friends.</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="front">
                  <img src="/Hogsmeade.png" alt="">
                  <button>Learn more</button>
                </div>
                <div class="back">
                  <img src="/Hogsmeade.png" alt="">
                  <p>I love Harry Potter.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  padding: 2rem;
}

.swiper {
  margin: 50px auto;
  padding-bottom: 60px;
  user-select: none;
}

.swiper-slide {
  position: relative;
  height: 500px;
  border-radius: 30px;
  filter: grayscale(20%) brightness(80%);
  pointer-events: none;
  will-change: transform;
}

.swiper-slide-active {
  perspective: 1000px;
  filter: grayscale(0%) brightness(100%);
  pointer-events: auto;
  padding: 10px 0;
  transition: all 0.3s ease-in-out;
}

.swiper-slide-active .card {

}
</style>