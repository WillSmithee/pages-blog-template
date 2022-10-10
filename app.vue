<template>
    <!-- <TheHeader />
    <NuxtPage />
    <TheFooter /> -->
    <NuxtLayout>
    <NuxtPage />
    </NuxtLayout>
</template>


<script setup>
const config = useRuntimeConfig()
console.log('Runtime config:', config)
if (process.server) {
    console.log('API secret:', config.apiSecret)
}
</script>

<!-- <script lang="ts">
export default {}
</script> -->

<!-- <style>
</style> -->