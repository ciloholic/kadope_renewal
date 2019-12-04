<template>
  <ul :class="$style.items">
    <li v-for="item in items" v-show="shown" :key="item.id" :class="$style.item" @click="onClick">
      <div :class="$style.name">{{ item.name }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    shown: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick(e) {
      this.$emit('onClick', e)
    }
  }
}
</script>

<style lang="scss" module>
.items {
  list-style: none;
}

.item {
  margin-top: 5px;
}

.name {
  display: flex;
  align-items: flex-start;
  min-height: 3rem;
  padding: 5px;
  font-size: 1.2rem;
  word-break: break-all;
  cursor: pointer;
  user-select: none;
  background: var(--base-background-light);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
}
</style>
