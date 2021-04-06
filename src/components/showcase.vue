<template>
  <div class="showcase">
    <credentialCard
      :title="title"
      :footer="footer"
      :atributes="inputAtributes"
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
      title: {
        titleIcon: `<i class="fas fa-user"></i>`,
        titleText: "login to your account",
      },

      footer: {
        footerUrl: "#",
        footerText: "Don't have an account? Click here to register one...",
      },

      inputAtributes: [
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
