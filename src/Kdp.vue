<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import '~normalize.css/normalize.css';
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap&subset=japanese');

:root {
  --base-font-family: 'Noto Sans JP', sans-serif;
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
  box-sizing: border-box;
  padding: 0;
  margin: 0;
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
