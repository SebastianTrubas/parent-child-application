<script setup lang="ts">
import { Theme } from "../styling/theme";
const props = defineProps<{
    buttonclicked: () => void
}>();
</script>
<template>
    <button @click="props.buttonclicked" class="ButtonLijst" :style="{ backgroundColor: Theme}"> Click Me</button>
</template>