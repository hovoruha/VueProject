<template>
  <div class="wrapper">
    <navbar></navbar>
    <showcase></showcase>
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";
import showcase from "./components/showcase.vue";

export default {
  name: "App",

  components: {
    navbar,
    showcase,
  },
};
</script>

<style>
/* main resets & global styling... */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  line-height: 1.5rem;
  text-decoration: none;
  list-style: none;
}

body {
  background-color: lightgray;
}

a,
a:active,
a:visited {
  color: inherit;
}

.wrapper {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
}

/* utility classes... */
.visible {
  display: block;
}

.hidden {
  display: none;
}
</style>
