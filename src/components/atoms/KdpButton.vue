<template>
  <button :class="$style.button" @click="onClick">
    <slot />
  </button>
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: var(--base-font-color-primary);
  cursor: default;
  background: var(--base-background-secondary);
  border: none;
  border-radius: 3px;

  &:hover {
    opacity: 0.7;
  }
}
</style>
