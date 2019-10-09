<template>
  <div :class="$style.editButton" />
</template>

<script>
export default {
  methods: {
    onClick() {}
  }
}
</script>

<style lang="scss" module>
.editButton {
  background: var(--base-background-primary);
  display: none;
  width: 2.4rem;
  font-size: 1rem;
  border-radius: 0 0 0 3px;
  cursor: default;

  &::before {
    display: block;
    content: 'edit';
    margin: auto;
    line-height: 1.3rem;
  }
}
</style>
