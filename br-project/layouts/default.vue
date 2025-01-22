<template>
    <BlockNav :headerItems="nav" :sidebarItems="sidebar"></BlockNav>
    <main>
        <slot></slot>        
    </main>
    <BlockFooter></BlockFooter>
</template>

<script setup lang="ts">
import { nav, sidebar } from "~/data/common.json";
</script>