<template>
  <KdpFrame>
    <KdpTitleHeader :class="$style.h1">過去の日報</KdpTitleHeader>
    <ul :class="$style.items">
      <li v-for="item in items" :key="item.id" :class="$style.item" @click="onClick(item.id)">
        <div :class="$style.status" :data-completed="item.completed">{{ statusText(item.completed) }}</div>
        <div>{{ item.title }}</div>
        <div :class="$style.total">{{ item.total | $_formatMinute() }}</div>
      </li>
    </ul>
  </KdpFrame>
</template>

<script>
import mixinMoment from '@/mixins/moment'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpTitleHeader from '@/components/atoms/KdpTitleHeader'

export default {
  components: { KdpFrame, KdpTitleHeader },
  mixins: [mixinMoment],
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    onClick(id) {
      this.$emit('onClick', id)
    },
    statusText(completed) {
      return completed ? '【済】' : '【未】'
    }
  }
}
</script>

<style lang="scss" module>
.h1 {
  margin-bottom: 5px;
}

.items {
  list-style: none;
  user-select: none;
  cursor: pointer;
}

.item {
  display: flex;
  font-size: 1.4rem;
}

.item + .item {
  border-top: dashed 1px var(--base-border-color-default);
}

.status {
  color: #ff5544;

  &[data-completed] {
    color: #44cc22;
  }
}

.total {
  margin: 0 5px 0 auto;
}
</style>
