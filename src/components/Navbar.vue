<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <div class="flex items-center gap-2">
          <span class="text-2xl">🍽️</span>
          <span class="text-xl font-bold text-[#3f2d1c]">
            Spice Garden
          </span>
        </div>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex items-center gap-6">

          <RouterLink
            to="/"
            class="text-[#8c7b6d] font-medium hover:text-[#3f2d1c] transition"
          >
            Home
          </RouterLink>

          <RouterLink
            to="/menu"
            class="text-[#8c7b6d] font-medium hover:text-[#3f2d1c] transition"
          >
            Menu
          </RouterLink>

          <RouterLink
            to="/contact"
            class="text-[#8c7b6d] font-medium hover:text-[#3f2d1c] transition"
          >
            Contact
          </RouterLink>

          <!-- Cart Button -->
          <button
            @click="$emit('open-cart')"
            class="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#3f2d1c] text-white hover:bg-[#5a422d] transition shadow-lg"
          >
            <!-- Cart Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.6a2 2 0 0 0 2-1.6L23 6H6"/>
            </svg>

            <!-- Cart Count Badge -->
            <span
              v-if="cartCount > 0"
              class="absolute -top-1 -right-1 bg-white text-[#3f2d1c] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow"
            >
              {{ cartCount }}
            </span>
          </button>

        </nav>

      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  cartCount: {
    type: Number,
    default: 0,
  },
})
</script>
