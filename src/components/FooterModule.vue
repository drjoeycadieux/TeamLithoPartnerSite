<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<template>
  <div class="footer">
    <p class="text-info">
      &copy; TeamLitho PartnerSite 2021 - {{ currentYear() }} All Right
      Reserved.
      <router-link class="textlink" to="/LegalInformation/LegalInformation"
        >Legal Information</router-link
      >
      <router-link class="textlink" to="/IssuesReporting/FoundAnIssues/"
        >Found An Issues!</router-link
      >
    </p>
  </div>
</template>
