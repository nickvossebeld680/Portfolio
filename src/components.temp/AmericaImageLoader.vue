<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const images = [
  'IMG_7847.jpg', 'IMG_7856.jpg', 'IMG_7897.jpg',
  'IMG_7910.jpg', 'IMG_7919.jpg', 'IMG_7920.jpg',
  'IMG_7928.jpg', 'IMG_7935.jpg', 'IMG_7944.jpg',
  'IMG_7963.jpg', 'IMG_7967.jpg', 'IMG_7974.jpg',
  'IMG_7975.jpg', 'IMG_7976.jpg', 'IMG_7983.jpg',
  'IMG_7993.jpg', 'IMG_7994.jpg', 'IMG_7995.jpg',
  'IMG_8014.jpg', 'IMG_8022.jpg', 'IMG_8024.jpg',
  'IMG_8040.jpg', 'IMG_8055.jpg', 'IMG_8057.jpg',
  'IMG_8061.jpg', 'IMG_8081.jpeg', 'IMG_8131.jpg',
  'IMG_8162.jpg', 'IMG_8169.jpg', 'IMG_8183.jpg',
  'IMG_8204.jpg', 'IMG_8234.jpg', 'IMG_8324.jpg',
  'IMG_8335.jpg', 'IMG_8341.jpg', 'IMG_8366.jpg',
  'IMG_8394.jpg', 'IMG_8437.jpg', 'IMG_8481.jpg',
  'IMG_8487.jpg', 'IMG_8494.jpg', 'IMG_8510.jpg',
  'IMG_8533.jpg', 'IMG_8535.jpg', 'IMG_8571.jpg',
  'IMG_8590.jpg', 'IMG_8596.jpg', 'IMG_8598.jpg',
  'IMG_8605.jpg', 'IMG_8629.jpg', 'IMG_8642.jpg',
  'IMG_8680.jpg', 'IMG_8691.jpg', 'IMG_8698.jpg',
  'IMG_8701.jpg', 'IMG_8706.jpg', 'IMG_8708.jpg',
  'IMG_8713.jpg', 'IMG_8732.jpg', 'IMG_8743.jpg',
  'IMG_8753.jpg', 'IMG_8781.jpg', 'IMG_8807.jpg',
  'IMG_9225.jpg', 'IMG_9227.jpg', 'IMG_9250.jpg',
  'IMG_9277.jpg', 'IMG_9358.jpg', 'IMG_9367.jpg',
  'IMG_9405.jpg', 'IMG_9414.jpg', 'IMG_9419.jpg',
  'IMG_9420.jpg', 'IMG_9448.jpg', 'IMG_9453.jpg',
  'IMG_9454.jpg', 'IMG_9455.jpg', 'IMG_9459.jpg',
  'IMG_9465.jpg', 'IMG_9476.jpg', 'IMG_9485.jpg',
  'IMG_9505.jpg', 'IMG_9515.jpg', 'IMG_9516.jpg',
  'IMG_9521.jpg', 'IMG_9522.jpg', 'IMG_9525.jpg',
  'IMG_9527.jpg', 'IMG_9534.jpg', 'IMG_9539.jpg',
  'IMG_9554.jpg', 'IMG_9567.jpg', 'IMG_9568.jpg',
  'IMG_9569.jpg', 'IMG_9583.jpg', 'IMG_9597.jpg',
  'IMG_9600.jpg', 'IMG_9601.jpg', 'IMG_9608.jpg',
  'IMG_9615.jpg', 'IMG_9616.jpg', 'IMG_9617.jpg',
  'IMG_9618.jpg', 'IMG_9619.jpg', 'IMG_9656.jpg',
]

const show = ref(false)
const current = ref(0)

function openLightbox(i) {
  current.value = i
  show.value = true
  // lock background scroll
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  show.value = false
  document.body.style.overflow = ''
}

function next() {
  current.value = (current.value + 1) % images.length
}

function prev() {
  current.value = (current.value - 1 + images.length) % images.length
}

function onKey(e) {
  if (!show.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))

const currentSrc = computed(() => `/AmericaPictures/${images[current.value]}`)
const currentAlt = computed(() => `America ${current.value + 1}`)
</script>

<template>
  <div class="mx-auto w-9/10 sm:w-4/5 2xl:w-3/5 mt-4">
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      <img
        v-for="(name, index) in images"
        :key="name"
        :src="`/AmericaPictures/${name}`"
        :alt="`America ${index + 1}`"
        loading="lazy"
        class="america-img w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-transform duration-300 hover:scale-105 lg:hover:scale-102 cursor-zoom-in"
        :style="{ animationDelay: (index * 60) + 'ms' }"
        @click="openLightbox(index)"
      />
    </div>

    <div v-if="show" class="lightbox-overlay" @click.self="closeLightbox" role="dialog" aria-modal="true">
      <button class="lb-close" @click="closeLightbox" aria-label="Close">×</button>

      <button class="lb-nav lb-prev" @click.stop="prev" aria-label="Previous">‹</button>

      <img :src="currentSrc" :alt="currentAlt" class="lightbox-img" />

      <button class="lb-nav lb-next" @click.stop="next" aria-label="Next">›</button>

      <div class="lb-caption">{{ images[current] }}</div>
    </div>
  </div>
</template>

<style scoped>
.america-img {
  opacity: 0;
  transform: translate3d(0, 10px, 0) scale(0.98);
  -webkit-transform: translate3d(0, 10px, 0) scale(0.98);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  will-change: transform, opacity;
  animation: fadeInUp 380ms cubic-bezier(.2,.8,.2,1) forwards;
  transition: transform 220ms ease;
}

.america-img:hover {
  transform: translate3d(0, 0, 0) scale(1.03);
}

.america-img:active,
.america-img:focus {
  filter: none;
  -webkit-filter: none;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}

/* Lightbox styles */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(8, 10, 15, 0.85);
  z-index: 60;
  padding: 1.5rem;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
}

.lightbox-img {
  max-width: 92%;
  max-height: 82vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.6);
  transition: transform 200ms ease;
  transform-origin: center center;
}

.lb-close {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  z-index: 70;
}

.lb-nav {
  position: fixed;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: #fff;
  border: none;
  width: 44px;
  height: 66px;
  font-size: 2rem;
  line-height: 1;
  border-radius: 6px;
  cursor: pointer;
  z-index: 70;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lb-prev { left: 1rem; }
.lb-next { right: 1rem; }

.lb-caption {
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 0.9rem;
  background: rgba(0,0,0,0.45);
  padding: 0.35rem 0.6rem;
  border-radius: 6px;
  z-index: 70;
}

/* Mobile adjustments */
@media (max-width: 640px) {
  .lb-nav { display: none; }
  .lb-close { font-size: 1.6rem; top: 0.6rem; right: 0.6rem; }
  .lightbox-img { max-height: 70vh; }
}

/* Preserve original mobile grayscale handling */
@media (hover: none) and (pointer: coarse) {
  .america-img {
    filter: none !important;
    -webkit-filter: none !important;
  }
}
</style>