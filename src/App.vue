<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="min-vh-100 d-flex flex-column bg-light">
    <NavBar />
    <div class="flex-grow-1">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss"></style>
