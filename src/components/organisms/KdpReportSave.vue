<template>
  <KdpFrame :class="$style.reportSave">
    <KdpTitleHeader>保存したレポート</KdpTitleHeader>
  </KdpFrame>
</template>

<script>
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpTitleHeader from '@/components/atoms/KdpTitleHeader'

export default {
  components: { KdpTitleHeader, KdpFrame }
}
</script>

<style lang="scss" module>
.reportSave {
}
</style>
