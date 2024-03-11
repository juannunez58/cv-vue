<template>
  <div class="description">
    <!-- <h2 class="description__title">{{ title }}</h2> -->
    <p class="description__text">
      {{ isSpanish ? profileText : profileTextEn }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { profileText, profileTextEn } from "@/Constants";

export default defineComponent({
  props: {
    isSpanish: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      profileText,
      profileTextEn,
    };
  },
  computed: {
    title: function (): string {
      return this.isSpanish ? "Perfil" : "Profile";
    },
  },
});
</script>
