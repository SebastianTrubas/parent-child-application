<script setup lang="ts">
import { Theme } from "../styling/theme";
const props = defineProps<{
    buttonclicked: () => void,
    label?: string,
    type?: 'text' | 'image'
}>();
</script>
<template>
    <button @click="props.buttonclicked" class="button-component" :class="props.type === 'image' ? 'no-border-button' : ''"
    :style="{ backgroundColor: Theme }">
    <img v-if="props.type === 'image'" :src="props.label" class="home-button-image" />
    <span v-else>{{ props.label }}</span>
    </button>
</template>