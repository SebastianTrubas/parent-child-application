<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getStudentById } from "./json-data/json-infopage";
import TableStudent from "./tables/table-infopage.vue";
import HomeButton from "./buttons/returnhome-button.vue";

const route = useRoute();
const studentId = route.params.id as string;
const student = getStudentById(studentId);
</script>

<template>
    <HomeButton />
    <h1>{{ student.voornaam }}'s data</h1>
    <TableStudent :student="student" />
</template>
