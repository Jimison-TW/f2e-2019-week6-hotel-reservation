<template>
  <router-view />
</template>

<script>
import HomePage from './views/HomePage.vue'

export default {
  components: {
    HomePage
  },
  created() {
    this.axios.defaults.baseURL = 'https://challenge.thef2e.com/api/thef2e2019/stage6'
    this.axios.defaults.headers.common['Authorization'] = 'Bearer X4Q1RLm71Fi8MbfPdhlZT6xkV1bR4QeSipvRPk6nKnM3IvPO9N3VthtKgYQa'
  }
}
</script>

<style scoped></style>
