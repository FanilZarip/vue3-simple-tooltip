<template>
  <button class="button" :class="{ 'button-radial': type === 'radial' }">
    <slot name="prepend-icon" />
    <span>
      {{ text }}
    </span>
    <slot name="append-icon" />
  </button>
</template>
<script setup lang="ts">
type buttonType = "radial" | "default";

interface Button {
  text: string;
  backgroundColor?: string;
  color?: string;
  type: buttonType;
}

withDefaults(defineProps<Button>(), {
  backgroundColor: "#1a73e8",
  color: "white",
});

// TODO добавить ts для слота и пропса названия кнопки
</script>

<style scoped>
.button {
  background-color: v-bind("backgroundColor");

  padding: 10px 30px;

  border: none;
  color: v-bind("color");

  cursor: pointer;
}

.button:hover {
  filter: brightness(1.2);
}

.button:active {
  filter: brightness(0.9);
}

.button-radial {
  border-radius: 4px;
}

.button > span {
  padding: 0 10px;
}
</style>
