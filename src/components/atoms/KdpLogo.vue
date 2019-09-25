<template>
  <div :class="$style.logo">
    <slot />
  </div>
</template>

<style lang="scss" module>
.logo {
  color: var(--base-font-color-sub);
  padding: 2px 0 1px;
  font-weight: bold;
  font-size: 1.4rem;
  bottom: 54px;
  left: 0;
  right: 0;
  transform: rotate(270deg);
  letter-spacing: 0.5em;
  user-select: none;
  cursor: default;
}
</style>
