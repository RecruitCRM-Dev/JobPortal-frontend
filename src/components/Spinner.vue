<template>
  <div
    :class="{ 'h-20 w-20': giant, 'h-16 w-16': medium, 'h-6 w-6': small }"
    class="border-gray-300 animate-spin rounded-full border-8 border-t-blue-600 text-center"
  />
</template>

<script setup>
defineProps({
  giant: Boolean,
  medium: Boolean,
  small: Boolean
})
</script>