<template>
  <div class="navbar" :class="hasRegClass ? navRegClass : ''">
    <div class="navbar-logo">
      <span><i class="fab fa-html5"></i></span>
      <span><i class="fab fa-css3-alt"></i></span>
    </div>
    <div class="navbar-menu">
      <navitem :Items="Items" :isReg="hasRegClass" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import navitem from "./navitem.vue";

export default {
  name: "navbar",

  components: {
    navitem,
  },

  data() {
    return {
      Items: [],
      navRegClass: "reg",
    };
  },

  computed: {
    ...mapGetters({
      hasRegClass: "getNavbarDisplayState",
    }),
  },

  methods: {},

  created() {
    this.Items = [
      { icon: `<i class="fas fa-home"></i>`, text: "Home", url: "#" },
      {
        icon: `<i class="fas fa-address-card"></i>`,
        text: "About Us",
        url: "#",
      },
      {
        icon: `<i class="fas fa-phone-volume"></i>`,
        text: "Contact",
        url: "#",
      },
      {
        icon: `<i class="fas fa-sign-in-alt"></i>`,
        icon2: `<i class="fas fa-hand-point-left"></i>`,
        text: "Subscribe",
        text2: "Back to Login",
        url: "#",
      },
    ];
  },
};
</script>

<style scoped>
.navbar {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0 30px;
}

.navbar::before {
  z-index: -1;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 750px;
  background: url("../assets/bg1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 88%, 0 49%);
}

.navbar.reg::before {
  z-index: -1;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 750px;
  background: url("../assets/bg2.jpg");
  clip-path: polygon(0 0, 100% 0, 100% 88%, 0 49%);
}

.navbar .navbar-logo span {
  margin-right: 10px;
}

.navbar .navbar-logo span i {
  font-size: 45px;
  color: red;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
}

.navbar .navbar-logo span:last-child i {
  font-size: 30px;
  color: lightskyblue;
}

.navbar .navbar-menu {
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}
</style>
