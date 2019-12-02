<template>
  <div :class="$style.titleHeader">
    <slot />
  </div>
</template>

<style lang="scss" module>
.titleHeader {
  font-size: 1.6rem;
  user-select: none;
  border-bottom: solid 2px;
}
</style>
