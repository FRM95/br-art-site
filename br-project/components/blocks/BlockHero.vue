<template>
    <section :class="isFullHeight ? 'h-lvh' : 'h-auto'">
        hero
    </section>
</template>

<script setup lang="ts">
const props = defineProps({
    items : {
        type: Object,
        default: null
    }
});
const { isFullHeight } = props.items;
</script>