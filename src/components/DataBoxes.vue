<script>
import PartnerList from "../assets/data/PartnerList";
import PartnerShip from "../assets/data/PartnerShip";

export default {
  data() {
    return {
      PartnerList: PartnerList,
      PartnerShip: PartnerShip,
    };
  },
};
</script>

<template>
  <div class="data-boxes">
    <div class="boxes1">
      <p v-for="PartnerList in PartnerList" :key="PartnerList.name">
        Partner List. {{ PartnerList.Name }}
      </p>
      <div v-for="PartnerList in PartnerList" :key="index">
        <span>{{ PartnerList.Description }}</span>
      </div>
    </div>
    <div class="boxes2">
      <p v-for="PartnerShip in PartnerShip" :key="PartnerShip.Name">
       Partner List. {{ PartnerShip.Name }}
      </p>
      <div v-for="PartnerShip in PartnerShip" :key="index">
        <span>{{ PartnerShip.Description }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.data-boxes {
  padding: 45px;
  display: flex;
  justify-content: space-between;
}

.boxes1 {
  padding: 10px;
  border: black 1px solid;
  width: 600px;
  margin: auto;
  border-radius: 15px;
}

.boxes1 p {
  font-family: sans-serif;
  font-weight: bold;
  font-size: 25px;
}

.boxes2 {
  padding: 10px;
  border: black 1px solid;
  width: 600px;
  margin: auto;
  border-radius: 15px;
}

.boxes2 p {
  font-family: sans-serif;
  font-weight: bold;
  font-size: 25px;
}
</style>
