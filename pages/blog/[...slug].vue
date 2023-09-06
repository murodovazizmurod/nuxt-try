<template>
  <main>
    <nuxt-link to="/blog" class="back-button">cd ..</nuxt-link>
    <ContentDoc v-slot="{ doc }">
      <h1 class="post-title">{{ doc.title }}</h1>
      <div class="meta">
        <span class="date">{{ doc.date }}</span>
        <span class="dot"> ● </span>
        <div class="tags" style="display:flex">
          <!-- <span style="margin-right: 1rem;">tags:</span> -->
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


h1.post-title {
  margin-top: 3.5rem;
}

div.tags {
  display: flex; 
  align-items: center;
}

div.tags > ul > li {
  background-color: #dddddde0;
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
