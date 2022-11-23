import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import RequestView from "../views/RequestView.vue";
import PartnerSiteView from "../views/PartnerSite/LearnMore/PartnerSiteView.vue";

import FoundAnIssuesView from "../views/IssuesReporting/FoundAnIssuesView.vue";
import LegalInformationView from "../views/LegalInformation/LegalInformationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "TeamLitho | Partner Site",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/IssuesReporting/FoundAnIssues",
      name: "foundanissues",
      component: FoundAnIssuesView,
    },
    {
      path: "/LegalInformation/LegalInformation",
      name: "legalinformation",
      component: LegalInformationView,
    },
    {
      path: "/request",
      name: "request",
      component: RequestView,
    },
    {
      path: "/PartnerSite/LearnMore/PartnerSite",
      name: "partnersite",
      component: PartnerSiteView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
