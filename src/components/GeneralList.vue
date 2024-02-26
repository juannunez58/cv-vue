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
        <span v-if="!item.type" class="lister__item__description">{{
          item.description
        }}</span>
        <a
          v-if="item.type === 'email'"
          :href="'mailto:' + item.description"
          target="_blank"
          class="lister__item__description lister__item__description--link"
        >
          {{ item.description }}
        </a>
        <a
          v-if="item.type === 'phone'"
          :href="'tel:' + item.description"
          target="_blank"
          class="lister__item__description lister__item__description--link"
        >
          {{ item.description }}
        </a>
        <a
          v-if="item.type === 'url'"
          :href="item.description"
          target="_blank"
          class="lister__item__description lister__item__description--link"
          >{{ item.description }}</a
        >
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
  type?: "url" | "phone" | "email";
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
