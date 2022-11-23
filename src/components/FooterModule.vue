<template>
  <div>
    <div class="footer-module">
      <p>&copy; Copyright TeamLitho 2021 - {{ currentYear }}
        
         <ul>
        <li>
          <router-link
            style="color: lightgray; text-decoration: none; font-weight: bold"
            to="/LegalInformation/LegalInformation"
            >Legal Information
            <span><i class="bi bi-arrow-up-right-square"></i> </span>
          </router-link>
        </li>
        <li>
          <router-link
            style="color: lightgray; text-decoration: none; font-weight: bold"
            to="/IssuesReporting/FoundAnIssues/"
            >Found An Issues
            <span><i class="bi bi-arrow-up-right-square"></i> </span>
          </router-link>
        </li>
      </ul>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
