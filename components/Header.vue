<template>
    <header>
        <h1><nuxt-link to="/"><img src="../assets/images/logo.png" alt="Logo"></nuxt-link></h1>
        <ul>
            <li><nuxt-link to="/about">/about</nuxt-link></li>
            <li><nuxt-link to="/blog">/blog</nuxt-link></li>
            <li><nuxt-link to="/contact">/contact</nuxt-link></li>
        </ul>
    </header>
</template>

<script setup>


</script>

<style scoped>
header {
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 2rem 1rem;
    font-family: 'JetBrains Mono Regular', sans-serif;
    font-size: .8rem;
}

header>h1>a>img {
    width: 60px;
    height: 60px;
}

h1 > a {
    border-bottom: none;
}

ul {
    display: flex;
    list-style: none;
}

ul>li {
    margin-right: 2rem;
}
</style>