<template>
  <div :class="$style.calendarDay">
    <div :class="$style.header">
      <span :data-active="isToDay" :class="$style.dayOfWeek">{{ currentDay.format('ddd') }}</span>
      <span :data-active="isToDay" :class="$style.day">{{ currentDay.format('DD') }}</span>
    </div>
    <div :class="$style.cells">
      <KdpJob v-for="job in currentJob" :key="job.id" :class="$style.jobList" :job="job" />
      <div v-for="hour in hours" :key="hour.format('HH:mm')" :class="[$style.minute, classObject(hour)]"></div>
    </div>
    <KdpTimeLine v-if="isToDay" :class="$style.timeLine" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpJob from '@/components/atoms/KdpJob'
import KdpTimeLine from '@/components/atoms/KdpTimeLine'

export default {
  components: { KdpJob, KdpTimeLine },
  props: {
    currentDay: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['jobs', 'calendarInfo']),
    isToDay() {
      return this.currentDay.isSame(this.calendarInfo.today, 'day')
    },
    hours() {
      let start = this.moment().startOf('day')
      return [...Array(24 * 4).keys()].map(x => start.clone().add(x * 15, 'minutes'))
    },
    currentJob() {
      let self = this
      return this.jobs.filter(job => self.currentDay.isSame(job.start, 'day'))
    }
  },
  methods: {
    classObject(hour) {
      return {
        [this.$style.m00]: hour.format('mm') === '00',
        [this.$style.m30]: hour.format('mm') === '30',
        [this.$style.m45]: hour.format('mm') === '45'
      }
    }
  }
}
</script>

<style lang="scss" module>
.calendarDay {
  position: relative;
  flex-grow: 1;

  > .timeLine {
    position: absolute;
  }
}

.header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;
  user-select: none;

  > .dayOfWeek {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    user-select: none;
  }

  > .dayOfWeek[data-active] {
    color: var(--base-background-secondary);
  }

  > .day {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-bottom: 2px;
    font-size: 1.8rem;
    user-select: none;
    border-radius: 50%;
  }

  > .day[data-active] {
    color: var(--base-font-color-secondary);
    background: var(--base-background-secondary);
  }
}

.cells {
  position: relative;

  > .minute {
    height: 12px;
    list-style: none;
  }

  > .minute:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  > .m00,
  .m45 + .m00 {
    border-top: 1px solid #888;
  }

  > .m45:last-child {
    border-bottom: 1px solid #888;
  }

  > .m30 {
    border-top: 1px dashed #888;
  }

  > .jobList {
    position: absolute;
    width: 100%;
    height: 12px;
    list-style: none;
  }
}
</style>
