<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <div class="contact">
    <Navbar />
    <h1>This is an contact page</h1>
  </div>
</template>

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
