<script setup lang="ts">
import { initData } from '@telegram-apps/sdk-vue'

const user = initData.user()
</script>

<template>
  <div>
    <h2>Welcome, {{ user }} {{ user?.last_name }}</h2>
  </div>
</template>
