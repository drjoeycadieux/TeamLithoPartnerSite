<template>
  <div class="about">
    <TheWelcomeVue />
    <h1>This is an about page</h1>
  </div>
</template>

<script setup>
import TheWelcomeVue from "../components/TheWelcome.vue";
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    align-items: center;
  }
}

.about h1 {
  text-align: center;
  padding: 25px;
}
</style>
