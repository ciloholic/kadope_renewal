<template>
  <div :class="$style.container">
    <KdpHeader :class="$style.header" />
    <div :class="$style.dailyReportList">
      <KdpDailyReportList />
    </div>
    <div :class="$style.dailyReportMain">
      <KdpDailyReportMain />
    </div>
  </div>
</template>

<script>
import KdpHeader from '@/components/molecules/KdpHeader'
import KdpDailyReportList from '@/components/organisms/KdpDailyReportList'
import KdpDailyReportMain from '@/components/organisms/KdpDailyReportMain'

export default {
  components: { KdpHeader, KdpDailyReportList, KdpDailyReportMain }
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-areas:
    'area-h . .......... .......... .'
    'area-h . area-d-r-l area-d-r-m .'
    'area-h . .......... .......... .';
  grid-template-rows: 15px 1fr 15px;
  grid-template-columns: 75px 1fr 300px 700px 1fr;
  grid-gap: 0 15px;
  height: 100vh;
  margin-right: 15px;
}

.header {
  grid-area: area-h;
}

.dailyReportList {
  grid-area: area-d-r-l;
}

.dailyReportMain {
  grid-area: area-d-r-m;
}
</style>
