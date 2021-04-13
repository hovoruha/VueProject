<template>
  <div class="showcase">
    <credentialCard
      :title="getLoginCardState ? titleLogin : titleRegister"
      :footer="getLoginCardState ? footerLogin : footerRegister"
      :atributes="
        getLoginCardState ? loginInputAtributes : registerInputAtributes
      "
    ></credentialCard>
  </div>
</template>

<script>
import credentialCard from "./credentialcard.vue";
import { mapGetters } from "vuex";

export default {
  name: "showcase",

  components: {
    credentialCard,
  },

  computed: {
    ...mapGetters(["getLoginCardState"]),
  },

  data() {
    return {
      titleLogin: {
        titleIcon: `<i class="fas fa-user"></i>`,
        titleText: "login to your account",
      },

      titleRegister: {
        titleIcon: `<i class="fas fa-user-edit"></i>`,
        titleText: "register your account",
      },

      footerLogin: {
        footerUrl: "#",
        footerText: "Don't have an account? Click here to register one...",
      },

      footerRegister: {
        footerUrl: "#",
        footerText: "Navigate to login page. Click here...",
      },

      loginInputAtributes: [
        {
          type: "text",
          placeholder: "username here...",
        },
        {
          type: "password",
          placeholder: "password here...",
        },
        { type: "submit", val: "Login" },
      ],

      registerInputAtributes: [
        {
          type: "text",
          placeholder: "first name here...",
        },
        {
          type: "text",
          placeholder: "last name here...",
        },
        {
          type: "text",
          placeholder: "username here...",
        },
        {
          type: "password",
          placeholder: "password here...",
        },
        {
          type: "password",
          placeholder: "retype password...",
        },
        { type: "submit", val: "Register" },
      ],
    };
  },

  methods: {},
};
</script>

<style scoped>
.showcase {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 800px;
}
</style>
