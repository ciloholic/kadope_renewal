<template>
  <div :class="$style.h1">
    <slot />
  </div>
</template>

<style lang="scss" module>
.h1 {
  font-size: 1.6rem;
  user-select: none;
  border-bottom: solid 2px;
}
</style>
