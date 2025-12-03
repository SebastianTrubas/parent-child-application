<script setup lang="ts">
import { students } from "./json-data/json-home";
import TableHome from "./tables/table-home.vue";

</script>
<template>
    <h1>Studenten Lijst</h1>
    <TableHome :students='students'></TableHome>
</template>