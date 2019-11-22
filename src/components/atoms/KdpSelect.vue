<template>
  <select v-model="selected" :class="$style.select">
    <option value=""></option>
    <option v-for="value in values" :key="value.id" :value="value.id">{{ value.name }}</option>
  </select>
</template>

<script>
export default {
  model: {
    prop: 'selected',
    event: 'input'
  },
  props: {
    values: {
      type: Array,
      required: true
    }
  },
  computed: {
    selected: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss" module>
.select {
  color: var(--base-font-color-default);
  background: var(--base-background-primary);
  font-size: 1.4rem;
  border: none;
  width: 100%;
  height: 30px;
}
</style>
