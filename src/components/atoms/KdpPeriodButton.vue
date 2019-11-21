<template>
  <div
    :class="$style.periodButton"
    @click.stop="onClick"
    ref="periodButton"
    :data-start="period.start.format('YYYY-MM-DD')"
    :data-end="period.end.format('YYYY-MM-DD')"
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
  background: var(--base-background-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 25px;
  height: 20px;
  border-radius: 3px;
  cursor: default;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
}
</style>
