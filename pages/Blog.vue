<template>
    <div>
        <main class="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
            <div class="mx-auto max-w-lg lg:max-w-7xl">
                <div class="border-b border-b-gray-200 pb-6">
                    <h2 class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                        Recent Posts
                    </h2>
                </div>
                <div class="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
                    <ContentList path="/blog" v-slot="{ list }">
                        <div v-for="article in list" :key="article._path"
                            class="flex flex-col justify-between rounded-lg border border-gray-200 p-4">
                            <nuxt-link :href="article._path">
                                <p class="text-xl text-gray-900">{{ article.title }}</p>
                                <img class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                                    :src="getImgUrl(article.image)">
                                <p class="mt-3 text-gray-500">{{ article.description }}</p>
                            </nuxt-link>
                            <div class="mt-6">
                                <a :href="`?author=${article.author}`" class="text-sm font-medium text-gray-900">
                                    {{ article.author }}
                                </a>
                                <div class="text-sm text-gray-500">
                                    {{ convertDate(article.date) }}
                                </div>
                                <div class="space-x-1">
                                    <span v-for="tag in article.tags" :key="tag"
                                        class="inline-block bg-purple-500 px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">{{
                                                tag
                                        }}</span>
                                </div>
                            </div>
                        </div>
                    </ContentList>
                </div>
            </div>
        </main>
    </div>

</template>


<script setup>
import { convertDate } from '../utils'

// Get the route and then query the files in the content/blog folder
// qc should be an array of objects each representing a blog.
const { query } = useRoute();
const { author } = query;
const qc = await queryContent("blog")
    .where({ author })
    .sort({ _file: -1, $numeric: true })
    .find();
const getImgUrl = (i) => i
</script>

<style>
</style>