<template>
  <div :class="$style.container">
    <KdpHeader :class="$style.header" />
    <KdpTaskList :class="$style.taskList" />
    <KdpCalendar :class="$style.calendar" />
  </div>
</template>

<script>
import KdpHeader from '@/components/molecules/KdpHeader'
import KdpTaskList from '@/components/organisms/KdpTaskList'
import KdpCalendar from '@/components/organisms/KdpCalendar'

export default {
  components: {
    KdpHeader,
    KdpTaskList,
    KdpCalendar
  }
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
    'area-h ........ ......'
    'area-h area-t-l area-c'
    'area-h ........ ......';
}

.header {
  grid-area: area-h;
}

.taskList {
  grid-area: area-t-l;
}

.calendar {
  grid-area: area-c;
}
</style>
