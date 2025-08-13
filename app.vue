<script setup lang="ts">
import { initData, useSignal } from '@telegram-apps/sdk-vue'

const initDataRaw = useSignal(initData.raw)
</script>

<template>
  <div>
    <h2>Welcome, {{ initDataRaw }}</h2>
  </div>
</template>
