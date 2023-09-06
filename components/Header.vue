<template>
    <header>
        <h1><nuxt-link to="/"><img src="../assets/images/logo.png" alt="Logo"></nuxt-link></h1>
        <ul>
            <li><nuxt-link to="/about">/about</nuxt-link></li>
            <li> ● <nuxt-link to="/blog">/blog</nuxt-link></li>
            <li> ● <nuxt-link to="/contact">/contact</nuxt-link></li>
        </ul>
    </header>
</template>

<script setup>

useHead({
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
      tagPosition: 'head'
    }
  ]
})

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

a {
    border-bottom: none;

}


a.router-link-active,
a.router-link-exact-active {
    transition: 0.1s color ease-in;
    border-bottom: 2px solid #ddd;
}

h1>a {
    border-bottom: none;
}

ul {
    display: flex;
    list-style: none;
}

ul>li {
    margin-right: 1rem;
}
</style>