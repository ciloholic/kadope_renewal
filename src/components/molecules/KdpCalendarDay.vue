<template>
  <div :class="$style.calendarDay">
    <div :class="$style.header">
      <span :class="[$style.dayOfWeek, { [$style.active]: isToDay }]">{{ currentDay.format('ddd') }}</span>
      <span :class="[$style.day, { [$style.active]: isToDay }]">{{ currentDay.format('DD') }}</span>
    </div>
    <div :class="$style.cells">
      <KdpEvent v-for="event in currentEvent" :key="event.id" :class="$style.eventList" :event="event" />
      <div v-for="hour in hours" :key="hour.format('HH:mm')" :class="[$style.minute, classObject(hour)]"></div>
    </div>
    <KdpTimeLine v-if="isToDay" :class="$style.timeLine" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpEvent from '@/components/atoms/KdpEvent'
import KdpTimeLine from '@/components/atoms/KdpTimeLine'

export default {
  components: { KdpEvent, KdpTimeLine },
  props: {
    currentDay: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['events', 'calendarInfo']),
    isToDay() {
      return this.currentDay.isSame(this.calendarInfo.today, 'day')
    },
    hours() {
      let start = this.moment().startOf('day')
      return [...Array(24 * 4).keys()].map(x => start.clone().add(x * 15, 'minutes'))
    },
    currentEvent() {
      let self = this
      return this.events.filter(event => self.currentDay.isSame(event.start, 'day'))
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
  flex-grow: 1;
  position: relative;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  user-select: none;
  height: 50px;
  position: sticky;
  top: 0;
  z-index: 10;
}

.dayOfWeek {
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  font-size: 1rem;

  &.active {
    color: var(--base-background-secondary);
  }
}

.day {
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  border-radius: 50%;
  font-size: 1.8rem;
  height: 32px;
  width: 32px;
  margin-bottom: 2px;

  &.active {
    color: var(--base-font-color-secondary);
    background: var(--base-background-secondary);
  }
}

.cells {
  position: relative;

  .minute {
    height: 12px;
    list-style: none;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  .m00,
  .m45 + .m00 {
    border-top: 1px solid #888;
  }

  .m45:last-child {
    border-bottom: 1px solid #888;
  }

  .m30 {
    border-top: 1px dashed #888;
  }

  .eventList {
    height: 12px;
    width: 100%;
    position: absolute;
    list-style: none;
  }
}

.timeLine {
  position: absolute;
}
</style>
