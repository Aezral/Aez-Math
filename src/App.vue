<template>
  <vNavbar></vNavbar>
  <router-view></router-view>
  <vFooter></vFooter>
</template>

<script setup>
import vNavbar from "./components/vNavbar.vue";
import vFooter from "./components/vFooter.vue";
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body::-webkit-scrollbar {
  display: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

</style>
