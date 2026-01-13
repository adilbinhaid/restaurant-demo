<template>
  <section class="min-h-screen bg-[#FDFBF7] text-[#3f2d1c] font-sans pb-32">

    <!-- HEADER -->
    <div class="relative pt-16 pb-12 px-6 text-center">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-[#3f2d1c]/20"></div>
      <h1 class="text-6xl md:text-7xl font-brittany mb-3">
        Our Menu
      </h1>
      <p class="text-[#8c7b6d] max-w-lg mx-auto text-lg font-light">
        Crafted with care, served with passion.
      </p>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6">

      <!-- CATEGORY BAR -->
      <div class="sticky top-4 z-40 mb-10">
        <div class="bg-white/80 backdrop-blur-md border border-white/40 shadow-lg rounded-2xl p-2">
          <div class="flex gap-2 overflow-x-auto no-scrollbar">
            <button
              v-for="section in menu"
              :key="section.category"
              @click="setCategory(section.category)"
              class="px-5 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap"
              :class="activeCategory === section.category
                ? 'bg-[#3f2d1c] text-white'
                : 'text-[#8c7b6d] hover:bg-[#3f2d1c]/5 hover:text-[#3f2d1c]'"
            >
              {{ section.category }}
            </button>
          </div>
        </div>
      </div>

      <!-- ITEMS -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="item in filteredItems"
          :key="item.name"
          class="bg-white rounded-2xl p-3 shadow-sm hover:shadow-lg transition flex flex-col"
        >
          <div class="relative h-64 rounded-xl overflow-hidden bg-gray-100">
            <img
              v-if="item.image"
              :src="item.image"
              :alt="item.name"
              class="w-full h-full object-cover"
            />
            <div class="absolute top-4 right-4 bg-white px-4 py-1 rounded-full font-semibold">
              ₹{{ item.price }}
            </div>
          </div>

          <div class="px-3 pt-5 flex-1 flex flex-col">
            <h3 class="text-2xl font-brittany">
              {{ item.name }}
            </h3>

            <p class="text-sm text-gray-500 mt-2 mb-6">
              {{ item.desc || 'A delicious choice from our kitchen.' }}
            </p>

            <div class="mt-auto flex justify-between items-center">
              <span class="text-xs text-gray-400">
                {{ getItemQty(item) ? getItemQty(item) + ' in cart' : 'Ready to serve' }}
              </span>

              <button
                @click="$emit('add-to-cart', item)"
                class="bg-[#3f2d1c] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#5a422d] transition"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- FLOATING CART -->
    <transition name="slide-up">
      <div
        v-if="cart.length"
        class="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-6"
      >
        <button
          @click="$emit('open-checkout')"
          class="bg-[#1a120b] text-white px-8 py-3 rounded-full font-bold shadow-xl"
        >
          Checkout →
        </button>
      </div>
    </transition>

  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { menu } from '../data/menu'

const props = defineProps({
  cart: {
    type: Array,
    required: true,
  },
})

defineEmits(['add-to-cart', 'open-checkout'])

const activeCategory = ref(menu[0].category)

function setCategory(cat) {
  activeCategory.value = cat
}

const filteredItems = computed(() =>
  menu.find(m => m.category === activeCategory.value)?.items || []
)

function getItemQty(item) {
  const found = props.cart.find(i => i.name === item.name)
  return found ? found.qty : 0
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}
</style>
