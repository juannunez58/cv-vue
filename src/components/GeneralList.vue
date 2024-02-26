<template>
  <div class="lister">
    <h2 class="lister__title">{{ listData.title }}</h2>
    <div class="lister__container">
      <div
        class="lister__item"
        v-for="(item, index) in listData.data"
        :key="index"
      >
        <p class="lister__item__title">{{ item.title }}</p>
        <span class="lister__item__description">{{ item.description }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface generalListInterface {
  title: string;
  data: listDataInterface[];
}

interface listDataInterface {
  title: string;
  description: string;
}
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    isSpanish: {
      type: Boolean,
      required: true,
    },
    listData: {
      type: Object as PropType<generalListInterface>,
      required: true,
    },
  },
  data() {
    return {};
  },
});
</script>
