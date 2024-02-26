<template>
  <div class="container">
    <Header :isSpanish="isSpanish" @triggerLanguage="changeLanguage" />
    <Description :isSpanish="isSpanish" />
    <Skills :isSpanish="isSpanish" />

    <!-- Educacion -->
    <GeneralList :isSpanish="isSpanish" :list-data="educationData" />
    <!-- Experience -->
    <GeneralList :isSpanish="isSpanish" :list-data="experienceData" />
    <!-- Personal Data -->
    <GeneralList :isSpanish="isSpanish" :list-data="personalData" />
    <!-- Personal references -->
    <GeneralList :isSpanish="isSpanish" :list-data="personalReferencesData" />
    <!-- Aditional courses -->
    <GeneralList :isSpanish="isSpanish" :list-data="aditionalCoursesData" />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
import {
  educationData,
  educationDataEn,
  jobExperienceData,
  jobExperienceDataEn,
  referenceData,
  referenceDataEn,
  cursosData,
  cursosDataEn,
  personalData,
  personalDataEn,
} from "@/Constants";

export default defineComponent({
  data() {
    return {
      isSpanish: true,
    };
  },
  components: {
    Header: defineAsyncComponent(() => import("@/components/Header.vue")),
    Description: defineAsyncComponent(
      () => import("@/components/Description.vue")
    ),
    Skills: defineAsyncComponent(() => import("@/components/Skills.vue")),
    GeneralList: defineAsyncComponent(
      () => import("@/components/GeneralList.vue")
    ),
  },
  methods: {
    changeLanguage() {
      this.isSpanish = !this.isSpanish;
    },
  },
  computed: {
    educationData: function () {
      return {
        title: this.isSpanish ? "Educación" : "Education",
        data: this.isSpanish ? educationData : educationDataEn,
      };
    },
    experienceData: function () {
      return {
        title: this.isSpanish ? "Experiencia" : "Experience",
        data: this.isSpanish ? jobExperienceData : jobExperienceDataEn,
      };
    },
    personalReferencesData: function () {
      return {
        title: this.isSpanish
          ? "Referencias Personales"
          : "Personal References",
        data: this.isSpanish ? referenceData : referenceDataEn,
      };
    },
    aditionalCoursesData: function () {
      return {
        title: this.isSpanish ? "Cursos Adicionales" : "Aditional Courses",
        data: this.isSpanish ? cursosData : cursosDataEn,
      };
    },
    personalData: function () {
      return {
        title: this.isSpanish ? "Datos Personales" : "Personal Data",
        data: this.isSpanish ? personalData : personalDataEn,
      };
    },
  },
});
</script>
