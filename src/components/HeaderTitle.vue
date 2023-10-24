<template>
  <p class="header-title">{{ title }}</p>
  <SButton text="I am Button">
    <template #prepend-icon>
      <p>p-icon</p>
    </template>
    <template #append-icon>
      <p>a-icon</p>
    </template>
  </SButton>
</template>

<script setup lang="ts">
import SButton from "./SButton.vue";

interface Title {
  title: string;
}

withDefaults(defineProps<Title>(), {
  title: "Vue3 simple tooltip",
});
</script>

<style scoped>
.header-title {
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
}
</style>
