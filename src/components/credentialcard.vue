<template>
  <!-- card user login... -->
  <div class="card" v-if="visible">
    <div class="card-title">
      <span v-html="title1.titleIcon"></span>
      <span>{{ title1.titleText }}</span>
    </div>
    <div class="card-content">
      <form action="#" class="card-form">
        <input
          v-for="item in atributes1"
          :key="item"
          :type="item.type"
          :placeholder="item.placeholder"
          :value="item.val"
        />
      </form>
    </div>
    <div class="card-footer">
      <a :href="footer1.footerUrl" @click.prevent="toggleForms">{{
        footer1.footerText
      }}</a>
    </div>
  </div>
  <!-- card register user... -->
  <div class="card" v-else>
    <div class="card-title">
      <span v-html="title2.titleIcon"></span>
      <span>{{ title2.titleText }}</span>
    </div>
    <div class="card-content">
      <form action="#" class="card-form">
        <input
          v-for="item in atributes2"
          :key="item"
          :type="item.type"
          :placeholder="item.placeholder"
          :value="item.val"
        />
      </form>
    </div>
    <div class="card-footer">
      <a :href="footer2.footerUrl" @click.prevent="toggleForms">{{
        footer2.footerText
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "credentialCard",

  data() {
    return {
      visible: true,
    };
  },

  props: {
    title1: Object,
    footer1: Object,
    atributes1: Array,
    title2: Object,
    footer2: Object,
    atributes2: Array,
  },

  methods: {
    toggleForms() {
      // console.log("rulez la link activ...");
      this.visible = !this.visible;
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  width: 400px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card .card-title {
  text-align: center;
  padding: 20px 0;
  font-size: 25px;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
}

.card .card-title span:first-child {
  margin-right: 50px;
}

.card .card-title span i {
  font-size: 30px;
}

.card .card-content {
  padding: 10px 30px;
  width: 100%;
}

.card .card-content .card-form {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
}

.card .card-content .card-form input[type] {
  margin-bottom: 20px;
  width: 100%;
  height: 50px;
  padding-left: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease-in-out;
}

.card .card-content .card-form input[type="text"]:hover,
.card .card-content .card-form input[type="password"]:hover,
.card .card-content .card-form input[type="email"]:hover {
  border: 1px solid lime;
  transition: all 0.3s ease-in-out;
  background-color: rgba(144, 238, 144, 0.3);
  cursor: pointer;
}

.card .card-content .card-form input[type="submit"] {
  border-color: rgba(0, 126, 255);
  color: rgba(0, 126, 255);
  font-weight: bold;
  font-size: 20px;
}

.card .card-content .card-form input[type="submit"]:hover {
  background-color: rgba(0, 126, 255);
  color: white;
  cursor: pointer;
}

.card .card-footer {
  width: 100%;
  font-size: 12px;
  font-style: italic;
  color: rgba(0, 126, 255);
  text-align: right;
  padding: 0 30px;
}
</style>
