<template>
    <BlockHero :items="hero"/>
    <BlockBio />
</template>

<script setup lang="ts">
import { hero } from "../data/index.json";
</script>