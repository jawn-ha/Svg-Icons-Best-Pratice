<template>
  <div id="app">
    <h1>工程化使用 SVG 图标最佳实践</h1>
    <div class="icon-wrap">
      <svg-icon name="apple" class="icon"></svg-icon>
      <svg-icon name="huawei" class="icon"></svg-icon>
      <svg-icon name="oneplus" class="icon"></svg-icon>
      <svg-icon name="pixel" class="icon"></svg-icon>
      <svg-icon name="apple" class="icon red"></svg-icon>
      <svg-icon name="huawei" class="icon green"></svg-icon>
      <svg-icon name="oneplus" class="icon yellow"></svg-icon>
      <svg-icon name="pixel" class="icon dark"></svg-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.icon-wrap {
  width: 800px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#app .icon {
  width: 50px;
  height: 50px;
}
.red {
  color: red;
}
.green {
  color: green;
}
.yellow {
  color: yellow;
}
.dark {
  color: dark;
}
</style>
