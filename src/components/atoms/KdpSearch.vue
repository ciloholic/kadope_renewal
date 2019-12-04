<template>
  <input v-model="inputSearch" :class="$style.search" type="search" placeholder="タスクを検索" />
</template>

<script>
export default {
  model: {
    prop: 'search',
    event: 'input'
  },
  props: {
    search: {
      type: String,
      required: true
    }
  },
  computed: {
    inputSearch: {
      get() {
        return this.search
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss" module>
.search {
  width: 100%;
  padding: 5px 10px;
  font-size: 1.6rem;
  color: var(--base-font-color-default);
  user-select: none;
  background: var(--base-background-primary);
  border: none;
  border-radius: 3px;

  &:focus {
    outline: 0;
  }
}
</style>
