<script setup>
import Menu from '@/components/Menu.vue';
</script>

<template>
  <Menu />
  <div class="about">
    <h1>on learning Vue</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    align-items: center;
  }
}
</style>
