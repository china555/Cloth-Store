<template>
  <div id="secure">
    <h1>Secure Area</h1>
    <p>
      This is a secure area
    </p>
  </div>
</template>

<script>
export default {
  name: "Secure",
  data() {
    return {};
  }
};
</script>

<style scoped>
#secure {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 10px;
  margin-top: 10px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  font-size: 12px;
}
</style>
