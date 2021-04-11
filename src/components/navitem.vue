<template>
  <li
    class="navbar-menu-item"
    :class="isReg && item.icon2 == null ? 'hidden' : ''"
    v-for="item in Items"
    :key="item"
  >
    <!--TODO: de legat cu credentialcard.vue prin $root.$on / eventHub...-->
    <a
      :href="item.url"
      @click="
        !isReg && item.icon2 ? [toggleSubscribe(), testing()] : activateLogin()
      "
      ><span
        class="navbar-menu-icon"
        v-html="isReg ? item.icon2 : item.icon"
      ></span
      >{{ isReg ? item.text2 : item.text }}</a
    >
  </li>
</template>

<script>
// import { EventBus } from "../eventBus";

export default {
  name: "navitem",

  props: {
    Items: Array,
    isReg: Boolean,
  },

  emits: ["open:subscribe", "open:eventfail", "testy"],

  methods: {
    toggleSubscribe: function(value) {
      this.$emit("open:subscribe", value);
    },

    activateLogin(value) {
      this.$emit("open:eventfail", value);
    },

    testing(data) {
      this.$root.$emit("testy", data);
      data = false;
    },
  },
};
</script>

<style scoped>
.navbar .navbar-menu .navbar-menu-item {
  height: 100%;
  font-size: 15px;
  padding: 25px 10px;
  transition: color 0.3s ease;
}

.navbar .navbar-menu .navbar-menu-item:hover {
  color: red;
  border-bottom: 2px solid red;
  transition: color 0.3s ease;
}

.navbar .navbar-menu .navbar-menu-item .navbar-menu-icon {
  margin-right: 10px;
}
</style>
