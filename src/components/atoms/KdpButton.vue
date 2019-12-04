<template>
  <div :class="$style.button" @click="onClick">
    <slot />
  </div>
</template>

<script>
export default {
  methods: {
    onClick(e) {
      this.$emit('onClick', e)
    }
  }
}
</script>

<style lang="scss" module>
.button {
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: var(--base-font-color-primary);
  cursor: default;
  background: var(--base-background-secondary);
  border-radius: 3px;
}
</style>
