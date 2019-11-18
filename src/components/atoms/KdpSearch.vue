<template>
  <input :class="$style.search" v-model="inputSearch" type="search" placeholder="タスクを検索" />
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
  color: var(--base-font-color-default);
  background: var(--base-background-primary);
  font-size: 1.4rem;
  border-radius: 3px;
  padding: 5px 10px;
  border: none;
  width: 100%;
  user-select: none;

  &:focus {
    outline: 0;
  }
}
</style>
