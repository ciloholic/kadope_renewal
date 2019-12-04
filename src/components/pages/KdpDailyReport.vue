<template>
  <div :class="$style.container">
    <KdpSideHeader :class="$style.sideHeader" />
    <div :class="$style.dailyReportList">
      <KdpDailyReportList />
    </div>
    <div :class="$style.dailyReportMain">
      <KdpDailyReportMain />
    </div>
  </div>
</template>

<script>
import KdpSideHeader from '@/components/molecules/KdpSideHeader'
import KdpDailyReportList from '@/components/organisms/KdpDailyReportList'
import KdpDailyReportMain from '@/components/organisms/KdpDailyReportMain'

export default {
  components: { KdpSideHeader, KdpDailyReportList, KdpDailyReportMain }
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-areas:
    'area-s-h . .......... .......... .'
    'area-s-h . area-d-r-l area-d-r-m .'
    'area-s-h . .......... .......... .';
  grid-template-rows: 15px 1fr 15px;
  grid-template-columns: 75px 1fr 300px 700px 1fr;
  grid-gap: 0 15px;
  height: 100vh;
  margin-right: 15px;
}

.sideHeader {
  grid-area: area-s-h;
}

.dailyReportList {
  grid-area: area-d-r-l;
}

.dailyReportMain {
  grid-area: area-d-r-m;
}
</style>
