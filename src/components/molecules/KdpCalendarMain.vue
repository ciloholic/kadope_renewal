<template>
  <div :class="$style.calendarMain">
    <KdpCalendarDay :class="$style.calendarDay" v-for="day in days" :key="day.format('YYYY-MM-DD')" :currentDay="day" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpCalendarDay from '@/components/molecules/KdpCalendarDay'

export default {
  computed: {
    ...mapGetters(['getCalendarInfo']),
    days: function() {
      if (this.getCalendarInfo.displayDays === 5) {
        let start = this.getCalendarInfo.currentDay
          .clone()
          .startOf('week')
          .add(1, 'days')
        return [...Array(this.getCalendarInfo.displayDays).keys()].map(x => start.clone().add(x, 'days'))
      } else {
        let start = this.getCalendarInfo.currentDay.clone().startOf('week')
        return [...Array(this.getCalendarInfo.displayDays).keys()].map(x => start.clone().add(x, 'days'))
      }
    }
  },
  components: { KdpCalendarDay }
}
</script>

<style lang="scss" module>
.calendarMain {
  display: flex;
}

.calendarDay {
  border-left: 1px solid #888;

  &:last-child {
    border-right: 1px solid #888;
  }
}
</style>
