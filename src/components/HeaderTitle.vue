<template>
  <p class="header-title">{{ title }}</p>
</template>

<script setup lang="ts">
interface Title {
  title?: string;
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
