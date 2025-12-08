<script setup lang="ts">
const props = defineProps<{
    buttonclicked: () => void
}>();
</script>
<template>
    <button @click="props.buttonclicked" class="ButtonLijst"> Click Me</button>
</template>