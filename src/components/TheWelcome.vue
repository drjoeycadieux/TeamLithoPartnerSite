<script setup></script>

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
            padding: 5px;
            margin-bottom: 8px;
            border-radius: 5px;
            color: black;
            font-weight: bold;
          "
          class="leftSide"
          to="/request"
          >Report/Request</router-link
        >
      </li>
    </ul>
  </div>
</template>
