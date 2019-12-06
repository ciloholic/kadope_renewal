<template>
  <div :class="$style.container">
    <KdpHeader :class="$style.header" />
    <div :class="$style.scroll">
      <div :class="$style.groupList">
        <KdpGroupList />
      </div>
      <KdpCalendarInput :class="$style.calendarInput" />
    </div>
  </div>
</template>

<script>
import KdpHeader from '@/components/molecules/KdpHeader'
import KdpGroupList from '@/components/organisms/KdpGroupList'
import KdpCalendarInput from '@/components/organisms/KdpCalendarInput'

export default {
  components: { KdpHeader, KdpGroupList, KdpCalendarInput }
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-areas:
    'area-h ......'
    'area-h area-s'
    'area-h ......';
  grid-template-rows: 15px 1fr 15px;
  grid-template-columns: 75px 1fr;
  grid-gap: 0 15px;
  height: 100vh;
  margin-right: 15px;

  > .header {
    grid-area: area-h;
  }

  > .scroll {
    display: grid;
    grid-area: area-s;
    grid-template-areas: 'area-g-l area-c-i';
    grid-template-rows: 1fr;
    grid-template-columns: 250px 1fr;
    grid-gap: 0 15px;
    overflow-y: scroll;
  }

  > .groupList {
    grid-area: area-g-l;
  }

  > .calendarInput {
    grid-area: area-c-i;
  }
}
</style>
