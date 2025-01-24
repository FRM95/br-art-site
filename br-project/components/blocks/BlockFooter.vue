<template>
    <Footer :sections class="py-4 px-4 md:py-6 md:px-6 lg:py-8 lg:px-8"></Footer>
</template>

<script setup lang="ts">
import Footer from '~/web-components/vue-components/components/content/Footer.vue';
const props = defineProps({
    items : {
        type: Object,
        default: null
    }
});
const sections = computed(() => props.items.sections ?? null);
</script>