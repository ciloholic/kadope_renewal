<template>
  <main :class="$style.calendar">
    <KdpCalendarHeader :class="$style.calendarHeader" />
    <KdpCalendarLabel :class="$style.calendarLabel" />
    <KdpCalendarMain :class="$style.calendarMain" />
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
  grid-template-rows: 20px 42px 1fr;
  grid-template-columns: 40px 1fr;
  grid-template-areas:
    'area-c-h area-c-h'
    '........ area-c-b'
    'area-c-l area-c-b';
}

.calendarHeader {
  grid-area: area-c-h;
}

.calendarLabel {
  grid-area: area-c-l;
}

.calendarMain {
  grid-area: area-c-b;
}
</style>
