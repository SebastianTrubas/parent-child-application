<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from 'vue-router';
import { getStudentById } from "./json-data/json-infopage";
import TableStudent from "./tables/table-infopage.vue";
import HomeButton from "./buttons/returnhome-button.vue";
import FotoButton from "./buttons/button-lijsten.vue";

const route = useRoute();
const studentId = route.params.id as string;
const student = ref(getStudentById(studentId));

const currentIndex = ref(0);

const currentFoto = computed(() =>
    student.value.fotos[currentIndex.value]
);

function buttonclicked() {
    currentIndex.value =
        (currentIndex.value + 1) % student.value.fotos.length;
}

</script>
<template>
    <HomeButton />
    <h1>{{ student.voornaam }}'s data</h1>
    <TableStudent :student="student" :foto="currentFoto" />
    <div class="changeImage">
        <h3>Change Image:</h3>
    <FotoButton :buttonclicked="buttonclicked"></FotoButton>
    </div>
</template>
