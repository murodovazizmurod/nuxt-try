<template>
    <div>
        <ContentList path="/blog" v-slot="{ list }">
            <article v-for="blog in list" :key="blog._path" class="article">
                <NuxtLink :to="`/blog/${blog.slug}`">
                    <span class="article-title">{{ blog.title }}</span>
                </NuxtLink>
                <span class="dot"> ● </span>
                <span class="article-meta">{{ blog.date }}</span>
            </article>

        </ContentList>
    </div>
</template>

<style scoped>
span.article-title {
    font-size: 1rem;
}

span.dot {
    font-size: .5rem;
}
span.article-meta {
    font-size: .8rem;
    color: #ffffff5c;
}
</style>