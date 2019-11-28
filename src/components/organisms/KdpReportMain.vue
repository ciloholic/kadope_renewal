<template>
  <KdpFrame>
    <KdpAggregateCondition :class="$style.block" />
    <KdpReportTable :class="$style.block" />
  </KdpFrame>
</template>

<script>
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpReportTable from '@/components/molecules/KdpReportTable'
import KdpAggregateCondition from '@/components/molecules/KdpAggregateCondition'

export default {
  components: { KdpFrame, KdpReportTable, KdpAggregateCondition }
}
</script>

<style lang="scss" module>
.block + .block {
  margin-top: 10px;
}
</style>
