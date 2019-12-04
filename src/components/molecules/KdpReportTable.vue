<template>
  <div>
    <template v-if="aggregateUnit == 1">
      <KdpTitleHeader :class="$style.h1">プロジェクト毎</KdpTitleHeader>
    </template>
    <template v-else>
      <KdpTitleHeader :class="$style.h1">ユーザ毎</KdpTitleHeader>
    </template>
    <KdpTable :items="items" />
  </div>
</template>

<script>
import KdpTitleHeader from '@/components/atoms/KdpTitleHeader'
import KdpTable from '@/components/atoms/KdpTable'

export default {
  components: { KdpTitleHeader, KdpTable },
  props: {
    aggregateUnit: {
      type: Number,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
.h1 {
  margin-bottom: 10px;
}
</style>
