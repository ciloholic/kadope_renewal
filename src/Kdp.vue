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
  --base-background-default: #514a44;
  --base-background-primary: #332a25;
  --base-background-secondary: #fd0;
  --base-background-light: #777;
  --base-font-color-default: #fff;
  --base-font-color-primary: #000;
  --base-font-color-secondary: #332a25;
  --base-border-color-default: #fff;
  --base-border-color-primary: #000;
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
  color: var(--base-font-color-primary);
  background: var(--base-background-primary);
}
</style>
