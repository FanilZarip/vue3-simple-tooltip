<template>
  <header>
    <HeaderTitle />
  </header>

  <main class="wrapper">
    <div>
      <SButton text="I am Button" type="radial">
        <template #append-icon> <span>i</span> </template>
      </SButton>
      <SButton text="I am Button" type="radial" />
    </div>
    <div>
      <STooltip tooltip-text="Hi, i am here again">
        <SButton text="I am Button" type="radial" />
      </STooltip>
      <STooltip tooltip-text="Hi, i am here again" has-array>
        <SButton text="I am Button" type="radial" />
      </STooltip>
    </div>
  </main>
</template>

<script setup lang="ts">
import HeaderTitle from "./components/HeaderTitle.vue";
import SButton from "./components/SButton.vue";
import STooltip from "./components/STooltip.vue";
</script>

<style scoped>
.wrapper {
  width: 1200px;
  margin: 0 auto;
}
</style>
