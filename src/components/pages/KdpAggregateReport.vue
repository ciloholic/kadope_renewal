<template>
  <div :class="$style.container">
    <KdpHeader :class="$style.header" />
    <div :class="$style.reportFilter">
      <KdpReportFilter />
    </div>
    <div :class="$style.reportMain">
      <KdpReportMain />
    </div>
    <div :class="$style.reportSave">
      <KdpReportSave />
    </div>
  </div>
</template>

<script>
import KdpHeader from '@/components/molecules/KdpHeader'
import KdpReportFilter from '@/components/organisms/KdpReportFilter'
import KdpReportMain from '@/components/organisms/KdpReportMain'
import KdpReportSave from '@/components/organisms/KdpReportSave'

export default {
  components: { KdpHeader, KdpReportFilter, KdpReportMain, KdpReportSave }
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-areas:
    'area-s-h ........ ........ ........'
    'area-s-h area-r-f area-r-m area-r-s'
    'area-s-h ........ ........ ........';
  grid-template-rows: 15px 1fr 15px;
  grid-template-columns: 75px 300px 1fr 300px;
  grid-gap: 0 15px;
  height: 100vh;
  margin-right: 15px;
}

.header {
  grid-area: area-s-h;
}

.reportFilter {
  grid-area: area-r-f;
}

.reportMain {
  grid-area: area-r-m;
}

.reportSave {
  grid-area: area-r-s;
}
</style>
