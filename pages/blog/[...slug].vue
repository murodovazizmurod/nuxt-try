<template>
  <main>
    <nuxt-link to="/blog" class="back-button">cd ..</nuxt-link><br>
    <ContentDoc v-slot="{ doc }">
      <h1 v-html="doc.title"></h1>
      <div class="meta">
        <span class="date">{{ doc.date }}</span>
        <span class="dot">●</span>
        <div class="tags">
          <span style="margin-right: 1rem; font-family: 'JetBrains Mono Bold', sans-serif;">tags:</span>
          <ul>
            <li v-for="i in doc.tags" :key="i">/{{ i }}</li>
          </ul>
        </div>
      </div>
      <hr>

      <ContentRenderer :value="doc" class="content" />
    </ContentDoc>
  </main>
</template>

<style scoped>
div.meta {
  font-size: .8rem;
  margin-top: .5rem;
  display: flex;
  align-items: baseline;
  margin-bottom: 15px;
}

div.tags {
  display: flex; 
  align-items: center;
}

div.tags > ul > li {
  background-color: #ddd;
  color: #050505;
  padding: 3px;
  border-radius: 5px;
}


hr {
  margin-bottom: 5rem;
}

span.dot {
  margin-right: 1rem;
  margin-left: 1rem;
}


ul {
  display: flex;
  list-style: none;
  padding-left: 0px;
  margin-bottom: 0rem;
  margin-top: 0rem;
}

ul>li {
  margin-right: 1rem;
  margin-bottom: 0px;
}
</style>