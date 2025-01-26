<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <div>
    <h1>{{ $t("about.title") }}</h1>
    <NuxtLink :to="localePath('/')">
      {{ $t("about.button") }}
    </NuxtLink>
    <NuxtLink :to="localePath('/')">
      {{ $t("about.button") }}
    </NuxtLink>
  </div>
</template>
