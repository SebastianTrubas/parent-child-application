<script setup lang="ts">
interface Student {
    id: number
    voornaam: string
    achternaam: string
}

const props = defineProps<{
    students: Student[]
}>()
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Id:</th>
                <th>Voornaam:</th>
                <th>Achternaam:</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="student in props.students" :key="student.id">
                <td>{{ student.id }}</td>
                <td>
                    <router-link :to="`/student-info/${student.id}`">
                        {{ student.voornaam }}
                    </router-link>
                </td>
                <td>{{ student.achternaam }}</td>
            </tr>
        </tbody>
    </table>
</template>
