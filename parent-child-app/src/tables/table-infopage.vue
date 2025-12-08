<script setup lang="ts">

interface Student {
    id: number
    voornaam: string
    achternaam: string
    woonplaats: string
    geboortejaar: string
    email: string
    status: string
    fotos: string[]
}

const props = defineProps<{
    student: Student,
    foto: string
}>();


</script>

<template>
    <div class="image_student">
        <img :src="props.foto" alt="Student photo" heigth="300px" width="300px" />
    </div>
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
                <td>{{ props.student.voornaam }}</td>
                <td>{{ props.student.achternaam }}</td>
                <td>{{ props.student.woonplaats }}</td>
                <td>{{ props.student.geboortejaar }}</td>
                <td>{{ props.student.email }}</td>
                <td>{{ props.student.status }}</td>
            </tr>
        </tbody>
    </table>
</template>