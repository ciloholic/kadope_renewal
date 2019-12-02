<template>
  <select v-model="_selected" :class="$style.select">
    <option value="-1">手動選択</option>
    <option v-for="item in items" :key="item.id" :value="item.id">{{ item.name }}</option>
  </select>
</template>

<script>
export default {
  model: {
    prop: '_selected',
    event: 'input'
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    _selected: {
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
  font-size: 1.6rem;
  border: none;
  width: 100%;
  height: 30px;
}
</style>
