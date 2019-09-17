<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Kdp'
}
</script>

<style lang="scss">
@import '~normalize.css/normalize.css';
@import url('https://fonts.googleapis.com/css?family=M+PLUS+1p&subset=japanese');

$base-font-family: 'M PLUS 1p', sans-serif;
$base-background: #332a25;
$base-font-color: #fff;

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

// html,
// body,
// #app {
//   height: 100vh;
// }

html {
  font-size: 62.5%;
}

body {
  font-family: $base-font-family;
  font-size: 1.4rem;
  line-height: 1.6;
  color: $base-font-color;
  background: $base-background;
}

li {
  list-style: none;
}

a {
  color: $base-font-color;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

span {
  color: $base-font-color;
  text-decoration: none;
}
</style>
