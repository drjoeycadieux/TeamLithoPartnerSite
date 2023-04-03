<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <div class="request">
    <Navbar />
    <h1>This is an request page.</h1>
  </div>
</template>

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
