<template>
  <div>
    <main class="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 text-gray-900">
      <div class="mx-auto max-w-lg lg:max-w-7xl">
        <div class="border-b border-b-gray-200 pb-6">
          <h2 class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Cloudflare Workers</h2>
        </div>
        <div class="text-3xl mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12 ">
          <header>
            <nav>
              <ul class="space-y-5">
                <li v-for="w in workersList" :key="w">
                  <NuxtLink :to=w.path>{{ w.name }}</NuxtLink>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </main>
  </div>
</template>


<script setup>
const config = useRuntimeConfig()
let workersList = []
let tmpArr = config.WORKERS_ARRAY.split(',')
tmpArr.forEach(element => {
  workersList.push({ name: element, path: "worker/" + element })
});
</script>

<style>

</style>
