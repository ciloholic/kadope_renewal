<template>
  <textarea v-model="input" :class="$style.textarea" />
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
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
.textarea {
  width: 100%;
  height: 200px;
  padding: 5px 10px;
  color: var(--base-font-color-default);
  resize: none;
  background: var(--base-background-primary);
  border: none;
  border-radius: 3px;
}
</style>
