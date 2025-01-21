<template>
    <Hero :isFullHeight :title class="z-0 relative">
        <ImagesCarrousel :images />
    </Hero>
</template>

<script setup lang="ts">
import Hero from '~/web-components/vue-components/components/content/Hero.vue';
import ImagesCarrousel from '~/web-components/vue-components/components/media/ImagesCarrousel.vue';
const props = defineProps({
    items : {
        type: Object,
        default: null
    }
});
const { isFullHeight, title, images } = props.items;
</script>