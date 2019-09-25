<template>
  <div :class="$style.container">
    <KdpSideHeader :class="$style.sideHeader" />
    <KdpTaskList :class="$style.taskList" />
    <KdpCalendar :class="$style.calendar" />
  </div>
</template>

<script>
import KdpSideHeader from '@/components/molecules/KdpSideHeader'
import KdpTaskList from '@/components/organisms/KdpTaskList'
import KdpCalendar from '@/components/organisms/KdpCalendar'

export default {
  components: { KdpSideHeader, KdpTaskList, KdpCalendar }
}
</script>

<style lang="scss" module>
.container {
  margin-right: 15px;
  display: grid;
  grid-gap: 0 15px;
  grid-template-rows: 15px 1fr 15px;
  grid-template-columns: 80px 250px 1fr;
  grid-template-areas:
    'area-s-h ........ ......'
    'area-s-h area-t-l area-c'
    'area-s-h ........ ......';
}

.sideHeader {
  grid-area: area-s-h;
}

.taskList {
  grid-area: area-t-l;
}

.calendar {
  grid-area: area-c;
}
</style>
