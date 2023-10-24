<template>
  <div class="button">
    <slot name="prepend-icon" />
    <button v-bind="$attrs">
      {{ text }}
    </button>
    <slot name="append-icon" />
  </div>
</template>
<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

interface Button {
  text: string;
  backgroundColor: string;
  color: string;
}

const props = withDefaults(defineProps<Button>(), {
  backgroundColor: "#1a73e8",
  color: "white",
});

// TODO добавить ts для слота и пропса названия кнопки
</script>

<style scoped>
.button {
  background-color: v-bind("props.backgroundColor");
  display: inline-flex;
  padding: 10px 30px;
}

.button > button {
  border: none;
  background: none;
  color: v-bind("props.color");
}
</style>
