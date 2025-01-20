<template>
    <BlockHero :items="hero"/>
    <BlockContent />
</template>

<script setup lang="ts">
import { hero } from "../data/index.json";
</script>