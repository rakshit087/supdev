<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <nav className="flex justify-end h-24 pr-8 md:h-1/6">
    <button @click="toggleDark()">
      <p class="text-2xl font-bold">{{ isDark ? '🌞' : '🌙' }}</p>
    </button>
  </nav>
</template>
