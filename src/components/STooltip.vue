<template>
  <div class="tooltip_wrapper" @mouseover="showTooltip" @mouseleave="hideTooltip">
    <slot />
  </div>
  <Teleport to="body">
    <template v-if="isInitiated">
      <span v-show="isVisible && !disabled" class="s-tooltip">
        {{ tooltipText }}
        <slot name="tooltipBody" />
      </span>
      <template v-if="hasArray">
        <span v-show="isVisible" class="s-tooltip-arrow"></span>
      </template>
    </template>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface Tooltip {
  tooltipText?: string;
  hasArray?: boolean;
  disabled?: boolean;
}
const props = withDefaults(defineProps<Tooltip>(), {
  hasArray: false,
  disabled: false,
});

const isVisible = ref(false);
const isInitiated = ref(false);

function showTooltip(): void {
  if (props.disabled) {
    return;
  }

  if (!isInitiated.value) {
    isInitiated.value = true;
  }

  isVisible.value = true;
}

function hideTooltip(): void {
  isVisible.value = false;
}
</script>

<style scoped>
.tooltip_wrapper {
  display: inline-block;
}

.s-tooltip {
  padding: 6px 10px;
  border-radius: 4px;
  color: #fff;
  background-color: blue;
  position: absolute;
  top: 57px;
  left: 230px;
}

.s-tooltip-arrow {
  background-color: blue;
  position: absolute;
  top: 80px;
  left: 276px;
  display: inline-block;
  width: 11px;
  height: 11px;
  rotate: 45deg;
}
</style>
