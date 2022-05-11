<template>
  <Header />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <router-view />
  <Footer />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  html,
  body {
    padding: 0;
    margin: 0;
  }
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
