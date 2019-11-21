<template>
  <KdpFrame :class="$style.reportMain">
    <KdpTitleHeader>レポート</KdpTitleHeader>
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
.reportMain {
}
</style>
