<script setup lang="ts">
import { computed } from "vue";

type Positions = "top" | "bottom" | "left" | "right";

interface Arrow {
  arrowSize: number;
  text: string;
  position?: Positions;
  customClass?: string;
}

const props = defineProps<Arrow>();

const arrowSizeCss = computed(() => props.arrowSize + "px");
const tooltipMainPosition = computed(() => Math.floor(Math.sqrt(2) * props.arrowSize) / 2 + "px");
</script>

<template>
  <div class="tooltip-wrapper">
    <slot></slot>
    <div class="tooltip-main" :class="customClass">
      {{ text }}
    </div>
  </div>
</template>

<style scoped>
.tooltip-wrapper {
  width: fit-content;
  position: relative;
}

.tooltip-main {
  position: absolute;
  width: max-content;
  border: 1px solid black;
  padding: 10px;
  background-color: #ffffff;
  top: 0;
  left: 50%;
  translate: -50% calc(-100% - v-bind(tooltipMainPosition));
}

.tooltip-main::after {
  position: absolute;
  content: "";
  width: v-bind(arrowSizeCss);
  height: v-bind(arrowSizeCss);
  background-color: inherit;
  rotate: -45deg;
  translate: -50% 50%;
  border: 1px solid black;
  left: 50%;
  bottom: 0;
  clip-path: polygon(0 0, 0 100%, 100% 100%);
}
</style>
