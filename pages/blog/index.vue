<template>
    <div>
        <ContentList path="/blog" v-slot="{ list }" class="name">
            <div v-for="blog in list" :key="blog._path">
                <NuxtLink :to="`/blog/${blog.slug}`">
                    <h1>{{ blog.title }}</h1>
                    <br>
                    <p>{{ blog.date }}</p>
                </NuxtLink>
            </div>

        </ContentList>
    </div>
</template>