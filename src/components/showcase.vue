<template>
  <div class="showcase">
    <credentialCard
      :title1="titleLogin"
      :footer1="footerLogin"
      :atributes1="loginInputAtributes"
      :title2="titleRegister"
      :footer2="footerRegister"
      :atributes2="registerInputAtributes"
    ></credentialCard>
  </div>
</template>

<script>
import credentialCard from "./credentialcard.vue";

export default {
  name: "showcase",

  components: {
    credentialCard,
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
