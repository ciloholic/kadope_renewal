<template>
  <div :class="$style.switchGroup">
    <input :class="$style.input" :value="value" type="checkbox" />
    <div
      v-for="label in labels"
      :key="label.id"
      :class="[$style.switch, $style._switch, setClass(label.id)]"
      @click.stop="onClick(label.id)"
    >
      {{ label.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    labels: {
      type: Array,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  methods: {
    setClass(id) {
      return this.value === id ? this.$style.on : this.$style.off
    },
    onClick(id) {
      this.$emit('onClick', id)
    }
  }
}
</script>

<style lang="scss" module>
.switchGroup {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
}

.input {
  display: none;
}

.switch {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  &:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  &.on {
    color: var(--base-font-color-primary);
    background: var(--base-background-secondary);
  }

  &.off {
    color: var(--base-font-color-default);
    background: var(--base-background-primary);
  }
}
</style>
