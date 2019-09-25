<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import '~normalize.css/normalize.css';
@import url('https://fonts.googleapis.com/css?family=M+PLUS+1p&subset=japanese');

:root {
  --base-font-family: 'M PLUS 1p', sans-serif;
  --base-background-main: #332a25;
  --base-background-sub: #fd0;
  --base-background-default: #514a44;
  --base-font-color-default: #fff;
  --base-font-color-main: #000;
  --base-font-color-sub: #332a25;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: var(--base-font-family);
  font-size: 1.4rem;
  line-height: 1.6;
  color: var(--base-font-color-main);
  background: var(--base-background-main);
}
</style>
