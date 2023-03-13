<script setup>
import TheWelcomeVue from "../../components/TheWelcome.vue";
import FooterModule from "../../components/FooterModule.vue";
</script>

<template>
  <div class="issues">
    <TheWelcomeVue />
    <div class="container">
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
    <FooterModule />
  </div>
</template>

<style>
.container {
  justify-content: center;
}
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
