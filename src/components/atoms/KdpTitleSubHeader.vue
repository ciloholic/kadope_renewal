<template>
  <div :class="$style.titleSubHeader">
    <slot />
  </div>
</template>

<style lang="scss" module>
.titleSubHeader {
  font-size: 1.4rem;
  user-select: none;
  border-bottom: solid 1px;
}
</style>
