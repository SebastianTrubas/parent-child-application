<script setup lang="ts">
import { students } from "./json-data/json-home";
import TableHome from "./tables/table-home.vue";
import ColorButton from "./buttons/button-lijsten.vue";
import { Theme } from "./styling/theme";

function buttonclicked() {
    Theme.value = Theme.value === "#262626" ? "White" : "#262626";
    document.body.style.backgroundColor = Theme.value;
}
</script>
<template>
    <h1>Studenten Lijst</h1>
    <TableHome :students='students'></TableHome>

    <h3>Change Theme</h3>
    <ColorButton :buttonclicked='buttonclicked'></ColorButton>
</template>