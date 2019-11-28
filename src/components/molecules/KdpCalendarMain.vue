<template>
  <div :class="$style.calendarMain">
    <KdpCalendarDay
      v-for="day in days"
      :key="day.format('YYYY-MM-DD')"
      :class="$style.calendarDay"
      :current-day="day"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpCalendarDay from '@/components/molecules/KdpCalendarDay'

export default {
  components: { KdpCalendarDay },
  computed: {
    ...mapGetters(['calendarInfo']),
    days: function() {
      if (this.calendarInfo.displayDays === 5) {
        let start = this.calendarInfo.currentDay
          .clone()
          .startOf('week')
          .add(1, 'days')
        return [...Array(this.calendarInfo.displayDays).keys()].map(x => start.clone().add(x, 'days'))
      } else {
        let start = this.calendarInfo.currentDay.clone().startOf('week')
        return [...Array(this.calendarInfo.displayDays).keys()].map(x => start.clone().add(x, 'days'))
      }
    }
  }
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
