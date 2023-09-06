<template>
    <main>
        <Header></Header>
        <div class="content">
            <slot />
        </div>
        <Footer />
    </main>
</template>

<style scoped>
div.content {
    max-width: 45rem;
    margin: 2rem auto;
    padding: 1rem;
}

</style>