<script setup>
import Navbar from "../../../components/Navbar.vue";
</script>

<template>
  <div class="partner-site">
    <Navbar />
    <h1>This is an PartnerSite page. Coming Soon!</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .partner-site {
    min-height: 100vh;
    align-items: center;
  }
}

.partner-site h1 {
  text-align: center;
  padding: 25px;
}
</style>
