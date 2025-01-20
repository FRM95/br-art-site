<template>
    <nav class="h-16 bg-transparent fixed w-full">
        <Header :isHomeRef :title>
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
const { isHomeRef, title} = props.items;
</script>