<script setup>
import Navbar from "../../components/Navbar.vue";
</script>

<template>
  <div class="legal-info">
    <Navbar />
    <h1>This is an legal info page.</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .legal-info {
    min-height: 100vh;
    align-items: center;
  }
}

.legal-info h1 {
  text-align: center;
  padding: 25px;
}
</style>
