<script setup lang="ts">
import { Ref, inject } from 'vue'
import { ThemeType } from '@/core/themes/themeType';

let theme = inject<Ref<ThemeType>>('theme')
const props = defineProps<{
    buttonclicked: () => void,
    label?: string,
    type?: 'text' | 'image'
}>();
</script>
<template>
    <button @click="props.buttonclicked" :class="[
      'button-component',
      theme,
      props.type === 'image' ? 'no-border-button' : '']">

    <img v-if="props.type === 'image'" :src="props.label" class="home-button-image" />
    <span v-else>{{ props.label }}</span>
    </button>
</template>
