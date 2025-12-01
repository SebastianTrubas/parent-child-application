<script setup lang="ts">
const stored = localStorage.getItem('students')
const students = stored ? JSON.parse(stored) : [];
</script>

<template>
    <h1>Studenten Lijst</h1>
        <table>
            <thead>
                <tr>
                    <th>Id:</th>
                    <th>Voornaam:</th>
                    <th>Achternaam:</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="student in students" :key="student.id">
                    <td>{{ student.id }}</td>
                    <td> <router-link :to="`/student-info/${student.id}`">{{ student.voornaam }}</router-link></td>
                    <td>{{ student.achternaam }}</td>
                </tr>
            </tbody>
        </table>
</template>