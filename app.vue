<script setup lang="ts">
import { computed } from 'vue'
import { initData, useSignal, type User } from '@telegram-apps/sdk-vue'
const initDataRef = useSignal(initData.state)

const userRows = computed<any[] | undefined>(() => {
  const user = initDataRef.value?.user

  return user ? getUserRows(user) : undefined
})

function getUserRows(user: User): any[] {
  return [
    { title: 'id', value: user.id.toString() },
    { title: 'username', value: user.username },
    { title: 'photo_url', value: user.photo_url },
    { title: 'last_name', value: user.last_name },
    { title: 'first_name', value: user.first_name },
    { title: 'is_bot', value: user.is_bot },
    { title: 'is_premium', value: user.is_premium },
    { title: 'language_code', value: user.language_code },
    { title: 'allows_to_write_to_pm', value: user.allows_write_to_pm },
    { title: 'added_to_attachment_menu', value: user.added_to_attachment_menu },
  ]
}
</script>

<template>
  <h2 class="init-data-page__section-title">User</h2>
  <i v-if="!userRows">User information missing</i>
  {{ userRows }}
</template>
