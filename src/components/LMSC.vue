<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import lmscImg from '../assets/logoLastMileSharedCar.png'

const { t } = useI18n()
const count = ref(0)
</script>

<template>
  <section id="center">
    <div class="lmsc">
      <img :src="lmscImg" class="base" alt="" />
    </div>
  </section>
</template>