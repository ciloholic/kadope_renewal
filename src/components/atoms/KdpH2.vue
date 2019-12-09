<template>
  <div :class="$style.h2">
    <slot />
  </div>
</template>

<style lang="scss" module>
.h2 {
  font-size: 1.4rem;
  user-select: none;
  border-bottom: solid 1px;
}
</style>
