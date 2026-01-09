<script setup lang="ts">
import type { Student } from '../data-client/student-data-interface'
import { Ref, inject } from 'vue'
import { ThemeType } from '@/core/themes/themeType';

let theme = inject<Ref<ThemeType>>('theme')

const props = defineProps<{
  students: Student[]
}>()

const emit = defineEmits<{
  (e: 'select-student', student: Student): void
}>()

function selectStudent(student: Student) {
  emit('select-student', student)
}
</script>

<template>
  <h1>Student Data</h1>

  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Voornaam</th>
        <th>Achternaam</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="student in students" :key="student.id">
        <td>{{ student.id }}</td>

        <td>
          <button :class="['button-component', theme]"  @click="selectStudent(student)">
            {{ student.voornaam }}
          </button>
        </td>

        <td>{{ student.achternaam }}</td>
      </tr>
    </tbody>
  </table>
</template>
