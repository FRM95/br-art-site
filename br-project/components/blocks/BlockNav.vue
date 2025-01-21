<template>
    <nav :class="navFixed" class="h-16 w-full">
        <Header :isHomeRef :title class="text-white">
            <MenuToogle class="items-center">
                <BootstrapList/>
            </MenuToogle>
        </Header>
    </nav>
</template>

<script setup lang="ts">
import Header from '~/web-components/vue-components/components/content/Header.vue';
import MenuToogle from '~/web-components/vue-components/components/buttons/MenuToogle.vue';
import BootstrapList from '~/web-components/vue-components/components/icons/BootstrapList.vue';
const props = defineProps({
    items : {
        type: Object,
        default: null
    }
});
const { isFixed, content} = props.items;
const navFixed = computed(() => isFixed ? 'z-50 fixed' : '');
const isHomeRef = computed(() => content.isHomeRef);
const title = computed(() => content.title ?? null);
</script>
