<template>
  <main :class="$style.calendar">
    <KdpCalendarHeader :class="$style.calendarHeader" />
    <KdpCalendarLabel :class="$style.calendarLabel" />
    <KdpCalendarMain :class="$style.calendarBody" />
  </main>
</template>

<script>
import KdpCalendarHeader from '@/components/atoms/KdpCalendarHeader'
import KdpCalendarLabel from '@/components/atoms/KdpCalendarLabel'
import KdpCalendarMain from '@/components/molecules/KdpCalendarMain'

export default {
  components: { KdpCalendarHeader, KdpCalendarLabel, KdpCalendarMain }
}
</script>

<style lang="scss" module>
.calendar {
  color: var(--base-font-color-default);
  background: rgba(255, 255, 255, 0.15);
  height: 100%;
  border-radius: 3px;
  padding: 10px;
  font-size: 0.9rem;
  display: grid;
  grid-template-rows: 30px 1fr;
  grid-template-columns: 50px 1fr;
  grid-template-areas:
    'area-c-h area-c-h'
    'area-c-l area-c-b';
}

.calendarHeader {
  grid-area: area-c-h;
}

.calendarLabel {
  grid-area: area-c-l;
}

.calendarBody {
  grid-area: area-c-b;
}
</style>
