<template>
    <BlockNav :items="nav"></BlockNav>
    <main>
        <slot></slot>        
    </main>
    <BlockFooter></BlockFooter>
</template>

<script setup lang="ts">
import { nav } from "../data/common.json";
</script>