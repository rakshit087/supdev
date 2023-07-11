<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  },
});
</script>

<template>
  <div class="min-h-screen transition-colors md:h-screen dark:bg-gray-900 dark:text-white">
    <Navbar />
    <div class="dark:text-white text-black">Login</div>
  </div>
</template>
