<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <div>
    <h1>{{ $t("home.title") }}</h1>
    <NuxtLink :to="localePath('/about')">
      {{ $t("about.button") }}
    </NuxtLink>
  </div>
</template>

<!-- <script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <NuxtLink
    v-for="locale in availableLocales"
    :key="locale.code"
    :to="switchLocalePath(locale.code)"
  >
    {{ locale.name }}
  </NuxtLink>
  <p>{{ $t("lan.title") }}</p>
</template> -->
