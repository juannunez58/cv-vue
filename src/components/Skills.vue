<template>
  <div class="skills">
    <h2 class="skills__title">{{ title }}</h2>
    <div class="skills__container">
      <div
        class="skill"
        v-for="(hability, index) in habilitiesData"
        :key="index"
      >
        <div class="skill__text">
          {{ hability.title }}
          <span class="skill__text__value">
            {{ calcSkillValue(hability.value) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { habilitiesData } from "@/Constants";

export default defineComponent({
  props: {
    isSpanish: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      habilitiesData,
    };
  },
  methods: {
    calcSkillValue(val: number) {
      switch (val) {
        case 1:
          return this.isSpanish ? "Básico" : "Basic";
          break;

        case 2:
          return this.isSpanish ? "Intermedio" : "Intermediate";
          break;

        case 3:
          return this.isSpanish ? "Avanzado" : "Advanced";
          break;
      }
    },
  },
  computed: {
    title: function (): string {
      return this.isSpanish ? "Competencias" : "Skills";
    },
  },
});
</script>
