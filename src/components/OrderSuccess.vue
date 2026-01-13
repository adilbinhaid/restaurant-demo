<template>
  <transition name="success">
    <div
      v-if="open"
      class="fixed inset-0 z-[100] bg-[#FDFBF7] flex items-center justify-center px-6"
    >
      <div class="text-center max-w-md">

        <!-- Check Icon -->
        <div
          class="mx-auto mb-6 w-24 h-24 rounded-full bg-[#3f2d1c]/10 flex items-center justify-center animate-pop"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3f2d1c"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20 6 9 17l-5-5"/>
          </svg>
        </div>

        <!-- Text -->
        <h2 class="text-4xl font-brittany text-[#3f2d1c] mb-3">
          Order Placed
        </h2>

        <p class="text-[#8c7b6d] text-lg mb-8">
          Thank you! Your order has been successfully placed.
        </p>

        <!-- CTA -->
        <button
          @click="$emit('close')"
          class="bg-[#3f2d1c] text-white px-8 py-3 rounded-full font-bold hover:bg-[#5a422d] transition"
        >
          Continue Browsing
        </button>

      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  open: {
    type: Boolean,
    required: true,
  },
})

defineEmits(['close'])
</script>

<style scoped>
/* Overlay animation */
.success-enter-active,
.success-leave-active {
  transition: opacity 0.4s ease;
}
.success-enter-from,
.success-leave-to {
  opacity: 0;
}

/* Check pop animation */
@keyframes pop {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  70% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

.animate-pop {
  animation: pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
</style>
