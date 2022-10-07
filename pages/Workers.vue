<template>
  <div>
    <main class="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 text-gray-900">
      <div class="mx-auto max-w-lg lg:max-w-7xl">
        <div class="border-b border-b-gray-200 pb-6">
          <h2 class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Cloudflare Workers
          </h2>
        </div>
        <div class="text-3xl mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12 ">
          <header>
            <nav>
              <ul class="space-y-5">
                <li>
                  <NuxtLink to="/worker/codeclub-1">Code Club 1</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/worker/codeclub-2">Code Club 2</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/worker/codeclub-3">Code Club 3</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/worker/geolocation-hello-world">geolocation-hello-world</NuxtLink>
                </li>
                <!-- <li>
                  <NuxtLink to="/worker/codeclub-4">Code Club 4</NuxtLink>
                </li> -->
                <!-- <li>
                  <NuxtLink to="/worker/codeclub-5">Code Club 5</NuxtLink>
                </li> -->
                <!-- <li>
                  <NuxtLink to="/worker/codeclub-6">Code Club 6</NuxtLink>
                </li> -->
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </main>
  </div>

</template>


<script setup>
// import { convertDate } from '../utils'

// Get the route and then query the files in the content/blog folder
// qc should be an array of objects each representing a blog.
// const { query } = useRoute();
// const { author } = query;
// const qc = await queryContent("functions/hello-world.js")
//   .where({ author })
//   .sort({ _file: -1, $numeric: true })
//   .find();
// const getImgUrl = (i) => i
</script>

<style>

</style>