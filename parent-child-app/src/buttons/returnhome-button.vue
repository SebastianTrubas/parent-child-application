<script setup lang="ts">
import { Theme } from "../styling/theme";
</script>
<template>
    <div class="HomeButtonDiv">
        <button class="HomeButton" :style="{ backgroundColor: Theme }"><router-link to="/home-page">Thuis Pagina</router-link></button>
    </div>
</template>