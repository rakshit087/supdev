<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  },
});
</script>

<template>
  <main>
    <h1 class="mb-8 font-mono md:mb-16  md:text-6xl text-5xl lg:text-7xl">SupDev &#60;3</h1>
    <p class="font-mono leading-loose ">
      Verify your Github account on SupDev and mint your Github profile as an NFT to recieve support from the
      community for your open source contributions.
    </p>
    <button class="mt-16 btn">Login with Github</button>
  </main>
</template>
