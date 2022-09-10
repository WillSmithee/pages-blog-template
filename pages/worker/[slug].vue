// pages/posts/[slug].vue
<script setup>
const route = useRoute()
const slug = route.params.slug
// console.log(route)
const { data: worker } = await useFetch(`/${slug}`)
console.log(slug)

</script>

<template>
  <div>
    <main class="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 text-gray-900">
      <div class="mx-auto max-w-lg lg:max-w-7xl">
        <div class="border-b border-b-gray-200 pb-6">
          <NuxtLink class="block cursor-pointer" to="/workers">
            <svg xmlns="http://www.w3.org/2000/svg" class="inline h-6 w-6 " fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Back
          </NuxtLink>
          <br />
          <h1 class="text-orange-600 font-extrabold">Worker Name: {{ slug }}</h1><br /><br />
          <span>
            <p class="text-black">{{worker}}</p>
          </span>
        </div>
      </div>
    </main>
  </div>
</template>