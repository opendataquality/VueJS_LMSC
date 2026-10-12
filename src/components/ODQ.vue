<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import odqLogo from '../assets/ODQ_Logo_plain.svg'

const { t } = useI18n()
</script>

<template>
  <section id="center">
    <div class="odq">
      <img :src="odqLogo" class="base" alt="Open Data Quality" />
    </div>
    <div class="mt-8 flex flex-col items-center gap-4 text-center">
      <h2>{{ t('odq.title') }}</h2>
    </div>
  </section>
</template>
