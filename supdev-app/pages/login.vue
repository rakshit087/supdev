<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  },
});

const isDark = useDark();
</script>

<template>
  <main class="flex flex-col-reverse lg:flex-row justify-center items-center">
    <div class="mr-0 lg:mr-8 text-center lg:text-left mt-12 md:mt-16 lg:mt-0">
      <h1 class="mb-8 font-mono md:mb-16  md:text-6xl text-5xl lg:text-7xl">SupDev &#60;3</h1>
      <p class="font-mono leading-loose ">
        Verify your Github account on SupDev and mint your Github profile as an NFT to recieve support from the
        community for your open source contributions.
      </p>
      <button class="mt-16 btn">Login with Github</button>
    </div>
    <img v-if="isDark" src="~/assets/images/mint_nft_dark.svg" alt="hero" class="w-52 md:w-96 lg:w-2/5">
    <img v-else src="~/assets/images/mint_nft_light.svg" alt="hero" class="w-52 md:w-96 lg:w-2/5">

  </main>
</template>
