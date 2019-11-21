<template>
  <div :class="$style.frame">
    <slot />
  </div>
</template>

<style lang="scss" module>
.frame {
  color: var(--base-font-color-default);
  background: var(--base-background-default);
  border-radius: 3px;
  padding: 10px;
}
</style>
