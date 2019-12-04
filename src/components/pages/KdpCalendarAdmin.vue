<template>
  <div :class="$style.container">
    <KdpHeader :class="$style.header" />
    <div :class="$style.scroll">
      <div :class="$style.groupList">
        <KdpGroupList />
      </div>
      <KdpCalendar :class="$style.calendar" />
    </div>
  </div>
</template>

<script>
import KdpHeader from '@/components/molecules/KdpHeader'
import KdpGroupList from '@/components/organisms/KdpGroupList'
import KdpCalendar from '@/components/organisms/KdpCalendar'

export default {
  components: { KdpHeader, KdpGroupList, KdpCalendar }
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-areas:
    'area-s-h ......'
    'area-s-h area-s'
    'area-s-h ......';
  grid-template-rows: 15px 1fr 15px;
  grid-template-columns: 75px 1fr;
  grid-gap: 0 15px;
  height: 100vh;
  margin-right: 15px;
}

.header {
  grid-area: area-s-h;
}

.scroll {
  display: grid;
  grid-area: area-s;
  grid-template-areas: 'area-t-l area-c';
  grid-template-rows: 1fr;
  grid-template-columns: 250px 1fr;
  grid-gap: 0 15px;
  overflow-y: scroll;
}

.groupList {
  grid-area: area-t-l;
}

.calendar {
  grid-area: area-c;
}
</style>
