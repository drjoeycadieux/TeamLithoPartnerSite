<template>
  <div class="header-welcome">
    <ul>
      <li>
        <router-link class="rightSide" to="/"
          >TeamLitho | Partner Site</router-link
        >
      </li>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
      <li>
        <router-link
          style="
            background-color: orange;
            padding: 4px;
            margin-bottom: 8px;
            border-radius: 5px;
            color: black;
            font-weight: normal;
          "
          class="leftSide"
          to="/request"
          >Report/Request</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script setup></script>
