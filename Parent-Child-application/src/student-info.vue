<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const studentId = route.params.id as string;

const stored = localStorage.getItem('students');
const students = stored ? JSON.parse(stored) : [];

const student = students.find(s => s.id === studentId);

</script>
<template>
    <div class="HomeButtonDiv">
        <button class="HomeButton"><router-link to="/home-page">Thuis Pagina</router-link></button>
    </div>
    <h1>{{ student.voornaam }}'s data</h1>
    <table class="StudentInfoTable">
        <thead>
            <tr>
                <th>Voornaam:</th>
                <th>Achternaam:</th>
                <th>Woonplaats:</th>
                <th>Geboortejaar:</th>
                <th>E-mail:</th>
                <th>Status:</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>{{ student.voornaam }}</td>
                <td>{{ student.achternaam }}</td>
                <td>{{ student.woonplaats }}</td>
                <td>{{ student.geboortejaar }}</td>
                <td>{{ student.email }}</td>
                <td>{{ student.status }}</td>
            </tr>
        </tbody>
    </table>
</template>