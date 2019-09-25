<template>
  <div :class="$style.calendarMain">
    <KdpCalendarDay :class="$style.calendarDay" v-for="day in days" :key="day.format('YYYY-MM-DD')" :currentDay="day" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import mixinMoment from '@/mixins/moment'
import KdpCalendarDay from '@/components/atoms/KdpCalendarDay'

export default {
  computed: {
    ...mapGetters(['getCalendarConfig']),
    days: function() {
      let start = this.moment().startOf('week')
      return [...Array(this.getCalendarConfig.displayDays).keys()].map(x => start.clone().add(x, 'days'))
    }
  },
  components: { KdpCalendarDay },
  mixins: [mixinMoment]
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
