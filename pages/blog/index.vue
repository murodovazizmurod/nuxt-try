    
<template>
    <div>
        <NuxtLoadingIndicator color="white" />
        <ContentList path="/blog" v-slot="{ list }">
            <article v-for="blog in list" :key="blog._path" class="article">
                > <NuxtLink :to="`/blog/${blog.slug}`">
                    <span class="article-title">{{ blog.title }}</span>
                </NuxtLink><br>
                <span class="article-meta">({{ blog.language }})</span>
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

article {
    margin-bottom: 1rem;
}

span.dot {
    font-size: .5rem;
    margin: 0 .4rem;
}
span.article-meta {
    font-size: .8rem;
    color: #ffffff5c;
}

a {
    border-bottom: none ;
    transition: .4s all ease-in-out;

}

a:hover {
    border-bottom: 1px solid #bbb;
    transition: .4s all ease-in-out;
}
</style>