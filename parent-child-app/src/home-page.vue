<script setup lang="ts">
// Vue Stuff
import { computed, ref } from "vue";
import { useRouter } from 'vue-router';

// Student Data
import { GetStudentList } from "./core/data-client/student-data-client";
import type { Student } from "./core/data-client/student-data-interface";
import StudentInfo from './student-info.vue';

// Components
import TableHome from "./core/tables/table-home.vue";

// Button Bar
import ButtonComponent from "./buttons/button-component.vue";
import { Theme } from "./styling/theme";
import FotoButton from "./buttons/button-component.vue";

const router = useRouter();
const students = ref<Student[]>(GetStudentList());
const currentStudent = ref<Student | null>(null)
const currentIndex = ref(0)

function handleSelectStudent(student: Student) {
  currentStudent.value = student
  currentIndex.value = 0
}

function changeTheme() {
  Theme.value = Theme.value === "#262626" ? "White" : "#262626";
  document.body.style.backgroundColor = Theme.value;
}

function returnToHomePage() {
  router.push('/home-page');
  currentStudent.value = null;
}

const currentFoto = computed(() => {
  if (!currentStudent.value) return ''
  return currentStudent.value.fotos[currentIndex.value]
})

function changeImage() {
  if (!currentStudent.value) return
  currentIndex.value = (currentIndex.value + 1) % currentStudent.value.fotos.length
}
</script>
<template>
  <!-- Display Button Bar -->
  <div class="button-bar">
    <ButtonComponent :buttonclicked="returnToHomePage" :type="'image'"
      :label="'https://pbs.twimg.com/profile_images/1677014185870254090/1PlB5Whm_200x200.jpg'"></ButtonComponent>
    <ButtonComponent :buttonclicked='changeTheme' :type="'text'" :label="'Change Theme'">Change Theme</ButtonComponent>
    <FotoButton v-if="currentStudent != null" :buttonclicked="changeImage" type="text" label="Change Image" />
  </div>

  <!-- hier components activeren  -->
  <TableHome v-if="currentStudent === null" :students="students" @select-student="handleSelectStudent"/>

  <template v-if="currentStudent != null">
    <StudentInfo :student="currentStudent" :foto="currentFoto"/>
  </template>
</template>

