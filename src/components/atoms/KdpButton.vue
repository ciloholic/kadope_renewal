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
  color: var(--base-font-color-primary);
  background: var(--base-background-secondary);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  cursor: default;
}
</style>
