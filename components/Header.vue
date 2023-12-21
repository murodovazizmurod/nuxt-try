<template>
  <header>
    <h1>
      <nuxt-link to="/"
        ><img src="../assets/images/logo.png" alt="Logo"
      /></nuxt-link>
    </h1>
    <ul>
      <li><nuxt-link to="/blog">/blog</nuxt-link></li>

      <li>
        ●
        <a
          href="https://drive.google.com/file/d/1A4Uxho2Qf2JMIMHUJnBg0Q803okePAv3/view?usp=drive_link"
          target="”_blank”"
          >/resume
          <img
            style="width: 15px; height: 15px"
            alt="external link icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtElEQVR4nO2SMQ6DMAxFuQSoR0A9Sc7dDgztVIbuqVT1Fg+BMiES7GCKWuWNUeJn/7iqCr8IcCVOd5SY3cSzJmrg8VUx0AB98PUiMeCAFzo+wDkibaRibykN5yLx+qX1P30CJ1VNMsSxSWfbfjEVJ+Kd4td0P7ElXqAF3ruIScQbFg5zMYlF0jSfI74tTaqpkSvugPuSVFrD5pFFDYo4gxK1iCOXy2OD14qdgXx875RBFf6MAeVoDxazOQxKAAAAAElFTkSuQmCC"
        /></a>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
useHead({
  title: "murodov azizmurod v2.0",
  meta: [
    {
      name: "description",
      content:
        "a bit autistic version of my website where i write only using lowercase)",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
});
useSeoMeta({
  title: "murodov azizmurod v2.0",
  ogTitle: "murodov azizmurod v2.0",
  description:
    "a bit autistic version of my website where i write only using lowercase)",
  ogDescription:
    "a bit autistic version of my website where i write only using lowercase)",
  ogImage: "https://www.azizmurod.uz/poster.png",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
header {
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: "JetBrains Mono Regular", sans-serif;
  font-size: 0.8rem;
}

header > h1 > a > img {
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

h1 > a {
  border-bottom: none;
}

ul {
  display: flex;
  list-style: none;
  align-items: center;
}

ul > li {
  margin-right: 1rem;
}
</style>
