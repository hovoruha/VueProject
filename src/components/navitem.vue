<template>
  <li class="navbar-menu-item" v-for="item in Items" :key="item">
    <a :href="item.url"
      ><span class="navbar-menu-icon" v-html="item.icon"></span
      >{{ item.text }}</a
    >
  </li>
</template>

<script>
export default {
  name: "navitem",

  props: {
    Items: Array,
  },
};
</script>

<style scoped>
.navbar .navbar-menu .navbar-menu-item {
  margin-right: 20px;
  font-size: 15px;
  transition: color 0.3s ease;
}

.navbar .navbar-menu .navbar-menu-item:hover {
  color: red;
  transition: color 0.3s ease;
}

.navbar .navbar-menu .navbar-menu-item .navbar-menu-icon {
  margin-right: 10px;
}
</style>
