<script lang="ts" setup>
const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>

<template>
  <div>Select Language</div>
  <select v-model="language">
    <option
      v-for="lang in locales"
      :key="typeof lang === 'object' ? lang.code : lang"
      :value="typeof lang === 'object' ? lang.code : lang"
    >
      {{ typeof lang === "object" ? lang.name : lang }}
    </option>
  </select>
</template>
