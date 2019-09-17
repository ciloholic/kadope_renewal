<template>
  <div :class="$style.container">
    <KdpHeader />
    <KdpTaskList />
    <KdpCalendar />
  </div>
</template>

<script>
import KdpHeader from '@/components/molecules/KdpHeader'
import KdpTaskList from '@/components/organisms/KdpTaskList'
import KdpCalendar from '@/components/organisms/KdpCalendar'

export default {
  name: 'KdpTopTmp',
  components: {
    KdpHeader,
    KdpTaskList,
    KdpCalendar
  }
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 80px 250px 1fr;
}
</style>
