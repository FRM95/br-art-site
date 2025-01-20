<template>
    <Hero :isFullHeight :title></Hero>
</template>

<script setup lang="ts">
import Hero from '~/web-components/vue-components/components/content/Hero.vue';
const props = defineProps({
    items : {
        type: Object,
        default: null
    }
});
const { isFullHeight, title } = props.items;
</script>