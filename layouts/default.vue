<template>
    <main>
        <Header></Header>
        <div class="content">
            <slot />

        </div>
    </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");


div.content {
    max-width: 45rem;
    margin: 2rem auto;
    padding: 15px;
}
</style>