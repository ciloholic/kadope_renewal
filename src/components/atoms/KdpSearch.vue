<template>
  <input :class="$style.search" type="search" placeholder="タスクを検索" />
</template>

<style lang="scss" module>
.search {
  color: var(--base-font-color-default);
  background: var(--base-background-main);
  font-size: 1.4rem;
  border-radius: 3px;
  padding: 5px 10px;
  border: none;
  width: 100%;

  &:focus {
    outline: 0;
  }
}
</style>
