<template>
    <div>
        <Sidebar :references></Sidebar>
    </div>
</template>

<script setup lang="ts">
import Sidebar from '~/web-components/vue-components/components/content/Sidebar.vue';
const props = defineProps({
    items : {
        type: Object,
        default: null
    }
});
const { content } = props.items;
const references = computed(() => content.references ?? null);
</script>