<template>
    <div>
        <button aria-label="Change site theme" :class="$colorMode.value === 'dark'
            ? 'theme-light'
            : 'theme-dark'" type="button" @click="
        $colorMode.value === 'dark'
            ? ($colorMode.preference = 'light')
            : ($colorMode.preference = 'dark')
        ">
        </button>
    </div>
</template>


<style scoped>
button.theme-light {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: none;
    background-color: #ccc;

}

button.theme-dark {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: none;
    background-color: #000;
}
</style>