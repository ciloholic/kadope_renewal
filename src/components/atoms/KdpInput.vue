<template>
  <input v-model="input" :class="$style.input" :type="type" :placeholder="placeholder" />
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    input: {
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
.input {
  color: var(--base-font-color-default);
  background: var(--base-background-primary);
  font-size: 1.4rem;
  border-radius: 3px;
  padding: 5px 10px;
  border: none;
  width: 100%;
  height: 30px;
  user-select: none;
}
</style>
