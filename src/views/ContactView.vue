<template>
  <div class="contact">
    <TheWelcomeVue />
    <h1>This is an contact page</h1>
  </div>
</template>

<script setup>
import TheWelcomeVue from "../components/TheWelcome.vue";
</script>

<style>
@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    align-items: center;
  }
}

.contact h1 {
  text-align: center;
  padding: 25px;
}
</style>
