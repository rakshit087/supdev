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
    <h1 className="mb-8 font-mono md:mb-16 text-7xl">SupDev &#60;3</h1>
    <p className="font-mono leading-loose">
      Verify your Github account on SupDev and mint your Github profile as an NFT to recieve support from the
      community for your open source contributions.
    </p>
  </main>
</template>
