<template>
    <nav :class="[navFixed, navFullScreen]" class='grid w-full'>
        <Header class='h-20 px-8 text-white' :references="headerReferences">
            <button class="items-center" @click="sidebarStore.toogleSidebar">
                <BootstrapList v-if="!sidebarStore.isSidebarOpen"/>
                <BootstrapClose v-else/>
            </button>
        </Header>
        <div class="nav-sidebar py-12" v-if="sidebarStore.isSidebarOpen">
            <Sidebar :references="sidebarReferences"></Sidebar>
        </div>
    </nav>
</template>

<script setup lang="ts">
const sidebarStore = useSidebarStore();
import Header from '~/web-components/vue-components/components/content/Header.vue';
import BootstrapList from '~/web-components/vue-components/components/icons/BootstrapList.vue';
import BootstrapClose from '~/web-components/vue-components/components/icons/BootstrapClose.vue';
import Sidebar from '~/web-components/vue-components/components/content/Sidebar.vue';

const props = defineProps({
    headerItems : {
        type: Object,
        default: null
    },
    sidebarItems : {
        type: Object,
        default: null
    },
});

/* Header items */
const headerFixed = props.headerItems.isFixed ?? false;
const headerReferences = props.headerItems.content.references ?? null;
const navFixed = computed(() => headerFixed ? 'z-50 fixed' : '');
const navFullScreen = computed(() => sidebarStore.isSidebarOpen ? 'h-screen grid-rows-12' : '');

/* Header items */
const sidebarReferences = computed(() => props.sidebarItems.content.references ?? null);
</script>

<style scoped>
nav {
    grid-template-rows: auto 1fr;
}
.nav-sidebar{
    background-color: antiquewhite;
}
</style>