<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <div class="about">
    <Navbar />
    <h1>This is an about page</h1>
  </div>
</template>

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
