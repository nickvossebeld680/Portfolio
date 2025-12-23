<script setup>
 import Topbar from "@/Components/Topbar.vue";
  import Swiper from "@/Components/Swiper.vue";
 import { RouterLink } from 'vue-router';
</script>

<template>
<topbar />

  <div class="flex flex-col mx-auto border-b-1 border-gray-300 w-9/10 sm:w-4/5 lg:hidden">
    <img class="w-65 py-4" src="/Profiel.png" alt="">
    <div class="flex flex-col justify-center xs:w-9/10">
      <h1 class="text-xl text-po-600 font-semibold w-80 lg:text-2xl">Hello, I’m Nick Vossebeld a student Software Developer,</h1>
      <p class="text-pog-600 mt-3">But I’m also into design — Making things not just work, but make them look good at the same time. </p>
      <h2 class="text-xl text-pos-600 font-semibold mt-4">About me</h2>
      <p class="mt-4 text-pog-600">I’m a third-year Software Development student at MBO level 4. At the moment, I am doing my internship at Coddin, where I am gaining hands-on experience in real-world development projects.</p>
      <p class="mt-3 mb-4 text-pog-600 lg:text-sm">I am motivated, eager to learn, and always looking for opportunities to grow as a developer. My goal is to continue developing my skills and eventually become a skilled and reliable software developer in the industry.</p>
    </div>
  </div>
  <div class="hidden lg:flex lg:flex-row lg:items-center mx-auto border-b-1 border-gray-300 w-9/10 sm:w-4/5 2xl:w-3/5 lg:mt-4 py-25">
    <div class="w-4/10">
      <h1 class="text-xl text-po-600 font-semibold w-80 lg:text-2xl">Hello, I’m Nick Vossebeld a student Software Developer,</h1>
      <p class="text-pog-600 mt-3">But I’m also into design — Making things not just work, but make them look good at the same time. </p>
      <h2 class="text-xl text-pos-600 font-semibold mt-4">About me</h2>
      <p class="mt-4 text-pog-600">I’m a third-year Software Development student at MBO level 4. At the moment, I am doing my internship at Coddin, where I am gaining hands-on experience in real-world development projects.</p>
      <p class="mt-3 mb-4 text-pog-600">I am motivated, eager to learn, and always looking for opportunities to grow as a developer. My goal is to continue developing my skills and eventually become a skilled and reliable software developer in the industry.</p>
    </div>
    <img class="w-70 mx-auto" src="/Profiel.png" alt="">
  </div>
  <div class="flex flex-col mx-auto border-b-1 border-gray-300 w-9/10 sm:w-4/5 2xl:w-3/5 lg:hidden">
    <h2 class="text-xl text-pos-600 font-semibold mt-4">From begin to now</h2>
    <div class="text-pog-600 mt-4 xs:w-9/10">
      <p>I grew up in Beckum, a small town in the countryside of Overijssel. I love the freedom of having space around you without neighbors right next door, but I also enjoy the city—the energy, the people, shops within walking distance, and the overall vibe, but growing up in the countryside shaped who I am today and gave me the friends I have now, and I’m very grateful for that.</p>
      <p class="mt-3 mb-4">In terms of education, I spent four years in higher general secondary education (HAVO), but I realized I enjoy practical work more than studying from a book every day. That’s why I switched to MBO, and I’m now in my third year of Software Development. I really enjoy diving deeper into ICT and programming. Looking ahead, I’m considering pursuing a Graphic Design program at HBO. Combining creativity with technology excites me and fits perfectly with my interests in design.</p>
      <video controls class="w-60 rounded-2xl" src="/1f6656d0-e2e8-42fc-822f-779cb9c8859d.mp4"></video>
      <p class="mt-4 mb-3">Over the years, I’ve had several jobs, and I currently work at Domino’s Pizza. Working has not only given me income, but also taught me the importance of teamwork and persistence—skills I use almost every day.</p>
      <p class="mt-3">Outside of school and work, I like to stay active. I go to the gym 4–5 times a week, and I enjoy spending time with friends, whether it’s going out or just hanging out together.</p>
      <p class="mt-3 mb-4">I’m ambitious, eager to learn, and always looking to bring out the best in myself. At the same time, I value fun, friendship, and enjoying the little things in life. For me, finding a balance between working hard and living well is very important. (Sometimes I’m also stupid (Look at the video))</p>
    </div>
  </div>
  <div class="mx-auto w-9/10 sm:w-4/5 2xl:w-3/5 hidden lg:flex lg:mt-4 py-25">
    <video controls class="w-70 rounded-2xl mx-auto self-center mb-3" src="/1f6656d0-e2e8-42fc-822f-779cb9c8859d.mp4"></video>
    <div>
      <h2 class="text-xl text-pos-600 font-semibold mt-4 ms-6 mx-3 xl:mx-15">From begin to now</h2>
      <div class="text-pog-600 mt-4 lg:flex lg:flex-row">
        <div class="w-3/5 ms-6 mx-3 xl:mx-15">
          <p class="">I grew up in Beckum, a small town in the countryside of Overijssel. I love the freedom of having space around you without neighbors right next door, but I also enjoy the city—the energy, the people, shops within walking distance, and the overall vibe, but growing up in the countryside shaped who I am today and gave me the friends I have now, and I’m very grateful for that.</p>
          <p class=" mt-3 mb-4">In terms of education, I spent four years in higher general secondary education (HAVO), but I realized I enjoy practical work more than studying from a book every day. That’s why I switched to MBO, and I’m now in my third year of Software Development. I really enjoy diving deeper into ICT and programming. Looking ahead, I’m considering pursuing a Graphic Design program at HBO. Combining creativity with technology excites me and fits perfectly with my interests in design.</p>
        </div>
        <div class="w-3/5 ms-3 xl:ms-5">
          <p class="mt-4 mb-3 lg:mt-0">Over the years, I’ve had several jobs, and I currently work at Domino’s Pizza. Working has not only given me income, but also taught me the importance of teamwork and persistence—skills I use almost every day.</p>
          <p class="mt-3">Outside of school and work, I like to stay active. I go to the gym 4–5 times a week, and I enjoy spending time with friends, whether it’s going out or just hanging out together.</p>
          <p class="mt-3 mb-4">I’m ambitious, eager to learn, and always looking to bring out the best in myself. At the same time, I value fun, friendship, and enjoying the little things in life. For me, finding a balance between working hard and living well is very important. (Sometimes I’m also stupid (Look at the video))</p>
        </div>
      </div>
    </div>

  </div>
  <div class="bg-po-100">
    <div class="flex flex-col mx-auto py-25 w-9/10 sm:w-4/5 2xl:w-3/5">
      <swiper/>
    </div>
  </div>

  <div class="flex flex-col mx-auto w-9/10 sm:w-4/5 2xl:w-3/5 xl:py-25">
    <div class="xs:w-9/10 lg:w-7/10">
      <div class="text-pog-600">
        <h2 class="text-xl text-pos-600 font-semibold mt-4">Capturing moments, Creating visuals</h2>
        <p class="mt-3">I like to hold onto the things that matter — not just in my memory, but also in images that I can look back on for the rest of my life.</p>
        <p class="mt-3">I love traveling because it gives me the chance to experience new places, meet new people, and capture moments that feel unique. Traveling isn’t just about seeing the world — it’s about collecting memories that shape who I am.</p>
        <p class="mt-3">My trip to America was a real life changer for me. Being there opened my eyes to how big the world is and how many different stories and perspectives are out there. It made me realize how much I want to explore, learn, and keep capturing the moments that stay with me forever.</p>
      </div>
      <div class="text-pog-600">
        <h2 class="text-xl text-pos-600 font-semibold mt-4">Such an impact</h2>
        <p class="mt-3">America had such a big impact on me that I want to go back and study there for a year. I want to explore more of the country, improve my English, and learn new things by actually living there. Since I’ll probably go with one or two friends — or maybe even on my own — I’ll have to start from zero again. New people, new places, new experiences. It’s a bit scary, but also exciting.</p>
        <p class="mt-3 mb-4">I want to get to know the culture and the vibe of the cities. I’m especially looking at Los Angeles, San Francisco, New York, or Boston — each with its own story and energy. For me, studying abroad isn’t just about school — it’s about growing, discovering, and capturing memories.</p>
      </div>
    </div>
    <div>
      <div class="relative lg:hidden">
        <router-link to="/America"><img src="/Zion.png" class="absolute left-20 w-45 rounded-xl hover:ring-2 hover:ring-white hover:shadow-white hover:shadow-lg cursor-pointer" alt=""></router-link>
        <router-link to="/America"><img src="/LosAngeles.png" class="absolute top-35 left-39 w-45 -z-2 rounded-xl hover:z-1 hover:ring-2 hover:ring-white hover:shadow-white hover:shadow-lg cursor-pointer" alt=""></router-link>
        <router-link to="/America"><img src="/Hogsmeade.png" class="absolute top-20 w-45 -z-1 rounded-xl hover:z-1 hover:ring-2 hover:ring-white hover:shadow-white hover:shadow-lg cursor-pointer" alt=""></router-link>
        <router-link to="America"><img src="/Yellowstone.png" class="absolute top-50 left-20 w-45 -z-3 rounded-xl hover:z-1 hover:ring-2 hover:ring-white hover:shadow-white hover:shadow-lg cursor-pointer" alt=""></router-link>
      </div>
      <div class="hidden lg:flex lg:flex-row">
        <router-link to="/America" class="hidden lg:flex"><img src="/Zion.png" class="w-50 xl:w-60 my-4 me-2 rounded-xl hover:ring-2 hover:ring-pos-400 hover:shadow-pos-400 hover:shadow-lg hover:scale-105 duration-300" alt=""></router-link>
        <router-link to="/America" class="hidden lg:flex"><img src="/LosAngeles.png" class="w-50 xl:w-60 my-4 mx-2 rounded-xl hover:ring-2 hover:ring-pos-400 hover:shadow-pos-400 hover:shadow-lg hover:scale-105 duration-300" alt=""></router-link>
        <router-link to="/America" class="hidden lg:flex"><img src="/Hogsmeade.png" class="w-50 xl:w-60 my-4 mx-2 rounded-xl hover:ring-2 hover:ring-pos-400 hover:shadow-pos-400 hover:shadow-lg hover:scale-105 duration-300" alt=""></router-link>
        <router-link to="/America" class="hidden lg:flex"><img src="/Yellowstone.png" class="w-50 xl:w-60 my-4 ms-2 rounded-xl hover:ring-2 hover:ring-pos-400 hover:shadow-pos-400 hover:shadow-lg hover:scale-105 duration-300" alt=""></router-link>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>