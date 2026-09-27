<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import HelloWorld from './components/LMSC.vue'
import { setLocale } from './i18n'

const { locale, t } = useI18n()
</script>

<template>
  <div class="lang-switcher">
    <button
      v-for="code in ['fr', 'en']"
      :key="code"
      type="button"
      :class="{ active: locale === code }"
      @click="setLocale(code)"
    >
      {{ t(`lang.${code}`) }}
    </button>
  </div>
  <HelloWorld />
</template>

<style scoped>
.lang-switcher {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  z-index: 10;
}
.lang-switcher button {
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: transparent;
  cursor: pointer;
}
.lang-switcher button.active {
  font-weight: bold;
  border-color: currentColor;
}
</style>
