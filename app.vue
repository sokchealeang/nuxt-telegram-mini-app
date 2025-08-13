<script setup lang="ts">
import { initData } from '@telegram-apps/sdk-vue'

const user = ref({})

onMounted(() => {
  user.value = initData.user || {}
})
</script>

<template>
  <div>
    <h2>Welcome, {{ user }}</h2>
  </div>
</template>
