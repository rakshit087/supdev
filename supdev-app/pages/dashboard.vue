<template>
  <div
    class="flex flex-col items-center justify-center md:justify-start md:flex-row w-full h-72 bg-slate-100 dark:bg-slate-950 rounded-2xl px-4 md:px-16 lg:px-24 max-w-4xl mx-auto"
  >
    <img
      :src="avatarUrl"
      class="w-32 h-32 rounded-full"
    />
    <div class="mt-4 md:mt-0 md:ml-8">
      <p class="text-2xl font-semibold text-slate-900 dark:text-slate-100">{{ username }}</p>
      <p class="text-sm text-slate-600 dark:text-slate-400">{{ email }}</p>
    </div>
  </div>
  <div class="flex flex-col md:flex-row w-full max-w-4xl mx-auto">
    <button
      class="dark:bg-green-200 bg-green-500 dark:text-gray-900 text-white p-2 rounded-2xl mt-4 md:w-1/2"
      @click="() => {}"
    >
      Mint NFT
    </button>
    <button
      class="dark:bg-red-200 bg-red-400 dark:text-gray-900 text-white p-2 rounded-2xl mt-4 md:w-1/2 md:ml-4"
      @click="() => {}"
    >
      Sign Out
    </button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});
const { data } = useAuth();
const username = data.value?.user?.name || '';
const avatarUrl = data.value?.user?.image || '';
const email = data.value?.user?.email || '';
</script>
