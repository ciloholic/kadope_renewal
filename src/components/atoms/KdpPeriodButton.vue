<template>
  <div
    ref="periodButton"
    :class="$style.periodButton"
    :data-start="period.start.format('YYYY-MM-DD')"
    :data-end="period.end.format('YYYY-MM-DD')"
    @click.stop="onClick"
  >
    {{ period.text }}
  </div>
</template>

<script>
export default {
  props: {
    period: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick', Object.assign({}, this.$refs.periodButton.dataset))
    }
  }
}
</script>

<style lang="scss" module>
.periodButton {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 20px;
  font-size: 1rem;
  cursor: default;
  background: var(--base-background-primary);
  border-radius: 3px;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
}
</style>
