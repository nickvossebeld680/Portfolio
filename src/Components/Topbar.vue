<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)

let previousOverflow = ''

watch(menuOpen, (open) => {
  if (typeof window === 'undefined') return
  const body = document.body
  if (open) {
    previousOverflow = body.style.overflow
    body.style.overflow = 'hidden'
  } else {
    body.style.overflow = previousOverflow || ''
  }
})

onUnmounted(() => {
  document.body.style.overflow = previousOverflow || ''
})
</script>

<template>
  <header class="hidden sm:flex sm:flex-row sm:justify-between md:py-4 sm:items-center w-9/10 sm:w-4/5 2xl:w-3/5 m-auto">
    <RouterLink to="/" class="flex flex-row items-center gap-2" aria-label="Home">
      <img src="/Logo.png" alt="Logo" class="w-12 h-12 object-contain" />
      <div class="flex flex-col gap-0">
        <p class="text-gray-600 font-medium m-0 leading-tight">Software Developer</p>
        <p class="font-medium m-0 leading-tight">Nick Vossebeld</p>
      </div>
    </RouterLink>

    <nav class="flex items-center gap-4">
      <RouterLink to="/Work"   class="text-gray-600 hover:text-po-600 font-medium">Work</RouterLink>
      <RouterLink to="/about" class="text-gray-600 hover:text-po-600 font-medium">About Me</RouterLink>
      <a href="mailto:0357236@student.rocvantwente.nl?subject=Hi Nick, I'd like to get in touch" target="_blank" rel="noopener noreferrer">
        <button class="bg-po-600 text-white px-4 py-2 rounded-md hover:cursor-pointer">Contact me</button>
      </a>
    </nav>
  </header>

  <header class="flex items-center gap-4 sm:hidden py-4 w-9/10 m-auto">
    <RouterLink to="/" class="flex flex-row items-center gap-2" aria-label="Home">
      <img src="/Logo.png" alt="Logo" class="w-12 h-12 object-contain" />
      <div class="flex flex-col gap-0">
        <p class="text-gray-600 font-medium m-0 leading-tight">Software Developer</p>
        <p class="font-medium m-0 leading-tight">Nick Vossebeld</p>
      </div>
    </RouterLink>

    <svg
        v-if="!menuOpen"
        @click="toggleMenu"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-8 ml-auto hover:cursor-pointer"
        aria-label="Open menu"
        role="button"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>

    <svg
        v-else
        @click="toggleMenu"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-8 ml-auto hover:cursor-pointer"
        aria-label="Close menu"
        role="button"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>

    <nav>
      <div v-if="menuOpen" class="absolute top-16 left-0 w-full h-full backdrop-blur-sm py-4 flex flex-col items-center justify-center gap-4 z-10">
        <RouterLink @click="toggleMenu" to="/Work" class="text-po-200 font-bold text-2xl">Work</RouterLink>
        <RouterLink @click="toggleMenu" to="/about" class="text-po-200 font-bold text-2xl">About Me</RouterLink>
        <a @click="toggleMenu" href="mailto:0357236@student.rocvantwente.nl?subject=Hi Nick, I'd like to get in touch" target="_blank" rel="noopener noreferrer">
          <button class="bg-po-600 text-white px-6 py-3 rounded-md text-2xl hover:cursor-pointer">Contact me</button>
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
</style>