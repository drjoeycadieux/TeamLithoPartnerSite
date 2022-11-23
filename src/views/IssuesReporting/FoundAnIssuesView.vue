<template>
  <div class="issues">
    <TheWelcomeVue />
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSeF3CJoZjzQqHrQ9QCBY7aMJ1BSk-fVh-jSad2LAPCtbw125w/viewform?embedded=true"
      width="640"
      height="788"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >Chargement en cours…</iframe
    >
  </div>
</template>

<script setup>
import TheWelcomeVue from "../../components/TheWelcome.vue";
</script>

<style>
@media (min-width: 1024px) {
  .issues {
    min-height: 100vh;
    align-items: center;
  }
}

.issues h1 {
  text-align: center;
  padding: 25px;
}
</style>
