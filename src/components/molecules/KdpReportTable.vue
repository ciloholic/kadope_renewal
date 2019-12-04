<template>
  <div>
    <template v-if="aggregateUnit == 1">
      <KdpH1 :class="$style.h1">プロジェクト毎</KdpH1>
    </template>
    <template v-else>
      <KdpH1 :class="$style.h1">ユーザ毎</KdpH1>
    </template>
    <KdpTable :items="items" />
  </div>
</template>

<script>
import KdpH1 from '@/components/atoms/KdpH1'
import KdpTable from '@/components/atoms/KdpTable'

export default {
  components: { KdpH1, KdpTable },
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
