<template>
  <div :class="$style.container">
    <KdpSideHeader :class="$style.sideHeader" />
    <div :class="$style.scroll">
      <KdpGroupList :class="$style.groupList" />
      <KdpCalendar :class="$style.calendar" />
    </div>
  </div>
</template>

<script>
import KdpSideHeader from '@/components/molecules/KdpSideHeader'
import KdpGroupList from '@/components/organisms/KdpGroupList'
import KdpCalendar from '@/components/organisms/KdpCalendar'

export default {
  components: { KdpSideHeader, KdpGroupList, KdpCalendar }
}
</script>

<style lang="scss" module>
.container {
  margin-right: 15px;
  height: 100vh;
  display: grid;
  grid-gap: 0 15px;
  grid-template-rows: 15px 1fr 15px;
  grid-template-columns: 75px 1fr;
  grid-template-areas:
    'area-s-h ......'
    'area-s-h area-s'
    'area-s-h ......';
}

.sideHeader {
  grid-area: area-s-h;
}

.scroll {
  grid-area: area-s;
  overflow-y: scroll;
  display: grid;
  grid-gap: 0 15px;
  grid-template-rows: 1fr;
  grid-template-columns: 250px 1fr;
  grid-template-areas: 'area-t-l area-c';
}

.groupList {
  grid-area: area-t-l;
}

.calendar {
  grid-area: area-c;
}
</style>
