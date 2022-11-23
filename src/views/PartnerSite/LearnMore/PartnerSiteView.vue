<template>
  <div class="partner-site">
    <TheWelcome />
    <h1>This is an PartnerSite page</h1>
  </div>
</template>

<script setup>
import TheWelcome from "../../../components/TheWelcome.vue";
</script>

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
