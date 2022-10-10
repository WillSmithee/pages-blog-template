<template>

  <section class="relative w-full px-8 text-gray-700 bg-white">
    <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
      <h1>Index Page</h1>
    </div>
  </section>

</template>

<script setup>
const config = useRuntimeConfig()
if (process.server) {
  console.log('BASE_DOMAIN: %o', config.BASE_DOMAIN)
}
</script>

<style>
</style>