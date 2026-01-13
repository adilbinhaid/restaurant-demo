<template>
  <transition name="slide-right">
    <div v-if="open" class="fixed inset-0 z-50 flex">

      <!-- Overlay -->
      <div
        class="flex-1 bg-black/40 backdrop-blur-sm"
        @click="$emit('close')"
      ></div>

      <!-- Drawer -->
      <div class="w-full sm:w-[420px] bg-[#FDFBF7] h-full p-6 flex flex-col">

        <!-- Header -->
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-3xl font-brittany text-[#3f2d1c]">
            Checkout
          </h2>
          <button
            @click="$emit('close')"
            class="text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        <!-- Cart Items -->
        <div class="flex-1 overflow-y-auto space-y-4 mb-6">
          <div
            v-for="item in cart"
            :key="item.name"
            class="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm"
          >
            <div>
              <p class="font-medium text-[#3f2d1c]">
                {{ item.name }}
              </p>
              <p class="text-sm text-gray-500">
                ₹{{ item.price }} × {{ item.qty }}
              </p>
            </div>

            <div class="flex items-center gap-2">
              <button
                @click="$emit('decrease', item)"
                class="w-8 h-8 rounded-full border flex items-center justify-center"
              >
                −
              </button>
              <span class="font-medium">{{ item.qty }}</span>
              <button
                @click="$emit('increase', item)"
                class="w-8 h-8 rounded-full border flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <!-- Customer Info -->
        <div class="space-y-4 mb-6">
          <input
            v-model="name"
            placeholder="Your Name"
            class="w-full px-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-[#3f2d1c]/20"
          />
          <input
            v-model="phone"
            placeholder="Phone Number"
            class="w-full px-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-[#3f2d1c]/20"
          />
          <textarea
            v-model="note"
            placeholder="Notes (optional)"
            class="w-full px-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-[#3f2d1c]/20"
          ></textarea>
        </div>

        <!-- Footer -->
        <div class="border-t pt-4">
          <div class="flex justify-between mb-4">
            <span class="text-gray-600">Total</span>
            <span class="font-bold text-[#3f2d1c]">
              ₹{{ total }}
            </span>
          </div>

          <button
            @click="placeOrder"
            class="w-full bg-[#3f2d1c] text-white py-3 rounded-full font-bold hover:bg-[#5a422d] transition"
          >
            Place Order
          </button>
        </div>

      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  open: Boolean,
  cart: Array,
  total: Number,
})

const emit = defineEmits(['close', 'increase', 'decrease', 'submit'])

const name = ref('')
const phone = ref('')
const note = ref('')

function placeOrder() {
  emit('submit', {
    name: name.value,
    phone: phone.value,
    note: note.value,
  })
}
</script>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
