<script>
import TheWelcome from "../components/TheWelcome.vue";
import FooterModule from "../components/FooterModule.vue";
import Notibanner from "../components/Notibanner.vue";

import moment from "moment";
export default {
  computed: {
    GetHours() {
      return moment().format("MMM Do YY");
    },
  },
};
</script>

<template>
  <div>
    <Notibanner />
    <TheWelcome />
    <br />
    <div class="box-msg">
      <p>Time Is: {{ GetHours() }}</p>
      <p>
        <span
          ><i
            style="color: blue; font-size: 20px"
            class="bi bi-exclamation-circle-fill"
          ></i
        ></span>
        The Partner Site | Program partners with community members worldwide to
        grow TeamLitho content and expand its usage. Click below to learn more
        about the role.
        <br />
        <br />
        <router-link
          style="
            background-color: orange;
            padding: 1rem;
            border-radius: 5px;
            text-decoration: none;
            color: black;
          "
          to="/PartnerSite/LearnMore/PartnerSite/"
          >Learn More <span><i class="bi bi-arrow-right"></i></span>
        </router-link>
      </p>
    </div>
    <br />
    <div class="homeIndex">
      <h1>
        Technology is defined as “purposeful intervention by design”, and
        technological practice as the activity through which technological
        outcomes are created and have impact in the world. Technological
        outcomes are designed to enhance the capabilities of people and expand
        human possibilities
      </h1>
    </div>
    <div class="contactIndex">
      <h1>
        Japan has a large conglomerate of international level such as: Fujifilm
        (which developed the first general public computer, the FUJIC (in) 1999
        in 1956) and Sony, Panasonic, Canon, Nikon, Fujitsu, Hitachi, Sharp, NEC
        , Nintendo, Epson or Toshiba are among the most famous companies in the
        world.
      </h1>
    </div>
    <div class="supportIndex">
      <h1>
        A help desk is a resource intended to provide the customer or end user
        with information and support related to a company's or institution's
        products and services
      </h1>
    </div>
    <FooterModule />
  </div>
</template>
