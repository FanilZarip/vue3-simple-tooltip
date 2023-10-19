<script setup lang="ts">
import HeaderTitle from "./components/icons/HeaderTitle.vue";
import STooltip from "@/components/STooltip.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <HeaderTitle />
      <div class="test">
        <STooltip :arrow-size="30" text="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
          <button class="button">Lorem ipsum.</button>
        </STooltip>
      </div>
    </div>
  </header>

  <main></main>
</template>

<style scoped>
.test {
  margin-left: 500px;
  margin-top: 300px;
}
.button {
  padding: 10px;
  background-color: teal;
  color: white;
}
</style>
