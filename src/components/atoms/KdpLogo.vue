<template>
  <div :class="$style.logo">
    <slot />
  </div>
</template>

<style lang="scss" module>
.logo {
  right: 0;
  bottom: 54px;
  left: 0;
  padding: 2px 0 1px;
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--base-font-color-secondary);
  letter-spacing: 0.5em;
  cursor: default;
  user-select: none;
  transform: rotate(270deg);
}
</style>
