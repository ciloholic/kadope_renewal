<template>
  <div :class="$style.frame">
    <slot />
  </div>
</template>

<style lang="scss" module>
.frame {
  padding: 10px;
  color: var(--base-font-color-default);
  background: var(--base-background-default);
  border-radius: 3px;
}
</style>
