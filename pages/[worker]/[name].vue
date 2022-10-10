<template>
    <div>
        <main class="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 text-gray-900">
            <div class="mx-auto max-w-lg lg:max-w-7xl">
                <div class="border-b border-b-gray-200 pb-6">
                    <h2 class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl ">
                        <NuxtLink to="/workers">Cloudflare Workers</NuxtLink>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ route.params.name }}
                    </h2>
                </div>
                <iframe v-bind:src="workerUrl" class="min-w-200 min-h-200 m-8" bg-white dark:bg-black></iframe>
                <!-- <embed type="text/plain;text/html;charset=UTF-8" v-bind:src="workerUrl" width="640" height="480" title="Title of my video" /> -->
            </div>

        </main>
    </div>
</template>

<script setup>
const route = useRoute();
const workerUrl = `https://${route.params.name}.${useRuntimeConfig().BASE_DOMAIN}`
</script>

<style>
.center {
    margin-left: auto;
    margin-right: auto;
}
</style>