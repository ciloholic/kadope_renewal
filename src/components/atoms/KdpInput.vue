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
  width: 100%;
  height: 30px;
  padding: 5px 10px;
  font-size: 1.6rem;
  color: var(--base-font-color-default);
  user-select: none;
  background: var(--base-background-primary);
  border: none;
  border-radius: 3px;
}
</style>
