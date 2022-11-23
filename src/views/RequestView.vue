<template>
  <div class="request">
    <TheWelcomeVue />
    <h1>This is an request page</h1>
  </div>
</template>

<script setup>
import TheWelcomeVue from "../components/TheWelcome.vue";
</script>

<style>
@media (min-width: 1024px) {
  .request {
    min-height: 100vh;
    align-items: center;
  }
}

.request h1 {
  text-align: center;
  padding: 25px;
}
</style>
