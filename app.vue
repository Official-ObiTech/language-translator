<script setup lang="ts">
import LangSwitcher from "./components/langSwitcher.vue";
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />

      <NuxtPage />
      <div class="switch">
        <LangSwitcher />
      </div>
    </NuxtLayout>
  </div>
</template>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 1rem;
}

a {
  border: solid 1px black;
  padding: 4px 20px;
  border-radius: 6px;
  text-decoration: none;
  text-transform: capitalize;
  margin: auto;
}

.switch {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
