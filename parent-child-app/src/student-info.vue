<script setup lang="ts">
import type { Student } from './core/data-client/student-data-interface'

import TableStudent from './core/tables/table-infopage.vue'

const props = defineProps<{
  student: Student
  foto: string
}>()
</script>
<template>
  <h1>{{ props.student.voornaam }}'s data</h1>
  <TableStudent :student="props.student" :foto="props.foto" />
</template>
