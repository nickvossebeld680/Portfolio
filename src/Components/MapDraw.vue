<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const svg = ref<SVGSVGElement | null>(null);

onMounted(() => {
  const svgEl = svg.value;
  if (!svgEl) return;

  const path = svgEl.querySelector('path');
  if (!path) return;

  const pathLength = (path as SVGPathElement).getTotalLength();

  gsap.set(path, { strokeDasharray: pathLength });

  gsap.fromTo(
      path,
      { strokeDashoffset: pathLength },
      {
        strokeDashoffset: 0,
        duration: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.svg-container',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      }
  );
});
</script>

<template>
  <div class="svg-container">
    <svg ref="svg" width="222" height="273" viewBox="0 0 222 273" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.2042 202.447L52.2042 259.447L78.7042 270.947L144.704 215.947L159.704 226.447L207.704 217.447L220.204 193.947L188.704 189.947L205.704 178.447L210.704 112.447L216.704 0.447205L201.204 31.4472L133.704 98.9472L55.7042 129.947L51.2042 144.447L1.20423 170.447L11.2042 202.447Z" stroke="blue" stroke-width="2"/>
    </svg>

  </div>
</template>

<style scoped>
.svg-container {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1500px;
}

svg {
  height: 100%;
}
</style>