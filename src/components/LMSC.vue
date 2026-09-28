<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import lmscImg from '../assets/logoLastMileSharedCar.png'
import manifestoFr from '../assets/Le Manifeste de la Mobilité Partagée du Dernier Kilomètre.pdf'
import manifestoEn from '../assets/The Last Mile Shared Mobility Manifesto.pdf'

const { t, locale } = useI18n()

const manifesto = computed(() =>
  locale.value === 'en'
    ? { href: manifestoEn, filename: 'The Last Mile Shared Mobility Manifesto.pdf' }
    : { href: manifestoFr, filename: 'Le Manifeste de la Mobilité Partagée du Dernier Kilomètre.pdf' },
)
</script>

<template>
  <section id="center">
    <div class="lmsc">
      <img :src="lmscImg" class="base" alt="" />
    </div>
    <div class="mt-8 flex flex-col items-center gap-4 text-center">
      <h2>{{ t('lmsc.manifestoTitle') }}</h2>
      <a
        :href="manifesto.href"
        :download="manifesto.filename"
        class="inline-flex items-center gap-2 rounded-lg bg-(--brand-blue) px-5 py-2.5 font-medium text-white no-underline transition-colors hover:bg-(--brand-navy)"
      >
        {{ t('lmsc.downloadManifesto') }}
      </a>
    </div>
  </section>
</template>
