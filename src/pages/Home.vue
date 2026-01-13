<template>
  <section class="relative min-h-[90vh] overflow-hidden">

    <!-- Background Slider -->
    <transition-group name="fade" tag="div">
      <div
        v-for="(img, index) in images"
        v-show="currentIndex === index"
        :key="img"
        class="absolute inset-0 bg-contain bg-center animate-soft-zoom"
        :style="{ backgroundImage: `url(${img})` }"
      ></div>
    </transition-group>

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/45"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center text-white">
      <div>
        <h1 class="text-4xl md:text-5xl font-bold leading-tight">
          Delicious Food,<br />
          Delivered Fresh 🍽️
        </h1>

        <p class="mt-6 text-white/90 text-lg">
          Authentic flavours • Fast delivery • Dine-in available
        </p>

        <div class="mt-8 flex gap-4">
          <RouterLink
            to="/menu"
            class="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition"
          >
            View Menu
          </RouterLink>

          
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const images = [
  '/images/items/mutton-mandi.jpg',
  '/images/items/chicken-mandi.jpg',
  '/images/items/biscoff-milkcake.jpg',
  '/images/items/blackcurrant-milkcake.jpg',
  '/images/items/chocolate-frappe.jpg'
]

const currentIndex = ref(0)
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }, 1000) // Change image every 2    sdssssdconds
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* VERY subtle zoom (almost static) */
@keyframes softZoom {
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(1.03);
  }
}

.animate-soft-zoom {
  animation: softZoom 20s ease-in-out infinite alternate;
}
</style>
