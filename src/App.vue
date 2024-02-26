<template>
  <Home />
</template>

<script lang="ts">
import Home from "./views/Home.vue";
import { defineComponent } from "vue";
import "@/styles/Global.css";

export default defineComponent({
  name: "App",
  components: {
    Home,
  },
});
</script>
