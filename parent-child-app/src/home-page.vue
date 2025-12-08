<script setup lang="ts">
import { students } from "./json-data/json-home";
import TableHome from "./tables/table-home.vue";
import ColorButton from "./buttons/button-lijsten.vue";

let Theme = "";

function buttonclicked() {
    Theme = Theme === "#262626" ? "White" : "#262626";
    document.body.style.backgroundColor = Theme;

    document.querySelectorAll('.ButtonLijst').forEach(btn => {
        btn.style.backgroundColor = Theme;
    });
}

</script>
<template>
    <h1>Studenten Lijst</h1>
    <TableHome :students='students'></TableHome>

    <h3>Change Theme</h3>
    <ColorButton :buttonclicked='buttonclicked'></ColorButton>
</template>