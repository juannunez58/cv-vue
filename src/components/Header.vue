<template>
  <div class="header">
    <div class="header__image"></div>
    <div class="header__name">
      <h1>Juan David Nuñez Aguilar</h1>
      <h2 class="header__name__job">{{ job }}</h2>
    </div>
    <div class="header__buttons">
      <button class="btn" @click="changeLanguage">
        <i class="fa-solid fa-language"></i>
      </button>
      <button class="btn" @click="print">
        <i class="fa-solid fa-floppy-disk"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import profile from "@/assets/face.jpeg";

export default defineComponent({
  props: {
    isSpanish: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      profileImg: profile,
    };
  },
  methods: {
    changeLanguage() {
      this.$emit("triggerLanguage");
    },
    print() {
      window.print();
    },
  },
  computed: {
    job: function (): string {
      return this.isSpanish ? "Desarrollador front end" : "Front end developer";
    },
  },
});
</script>
