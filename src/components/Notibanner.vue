<script>
import AlertList from "../assets/alert/AlertsList.js";

export default {
  data() {
    return {
      AlertList: AlertList,
    };
  },
};
</script>

<template>
  <div class="notifbanner">
    <p v-for="AlertList in AlertList" :key="index">
      <span style="font-size: 25px; color: white">
        <i class="bi bi-info-square-fill"></i>
      </span>
      {{ AlertList.TextInfo }}
    </p>
  </div>
</template>

<style scoped>
.notifbanner {
  padding: 10px;
  background-color: dodgerblue;
}

.notifbanner p {
  color: white;
  font-family: sans-serif;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
}
</style>
