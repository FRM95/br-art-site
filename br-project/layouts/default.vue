<template>
    <BlockNav :headerItems="nav" :sidebarItems="sidebar"></BlockNav>
    <main>
        <slot></slot>        
    </main>
    <BlockFooter :items="footer"></BlockFooter>
</template>

<script setup lang="ts">
import { nav, sidebar, footer } from "~/data/common.json";
</script>