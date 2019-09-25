<template>
  <div :class="$style.calendarDay">
    <div :class="$style.header">
      <span :class="[$style.dayOfWeek, { [$style.active]: isCurrentDay }]">{{ currentDay.format('ddd') }}</span>
      <span :class="[$style.day, { [$style.active]: isCurrentDay }]">{{ currentDay.format('DD') }}</span>
    </div>
    <ul>
      <li :class="[$style.minute, classObject(hour)]" v-for="hour in hours" :key="hour.format('HH:mm')"></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    currentDay: {
      type: Object,
      required: true
    }
  },
  methods: {
    classObject(hour) {
      return {
        [this.$style.m00]: hour.format('mm') === '00',
        [this.$style.m15]: hour.format('mm') === '15',
        [this.$style.m30]: hour.format('mm') === '30',
        [this.$style.m45]: hour.format('mm') === '45'
      }
    }
  },
  computed: {
    ...mapGetters(['getCurrentDay']),
    isCurrentDay() {
      return this.currentDay.isSame(this.getCurrentDay, 'day')
    },
    hours: function() {
      let start = this.moment().startOf('day')
      return [...Array(24 * 4).keys()].map(x => start.clone().add(x * 15, 'minutes'))
    }
  }
}
</script>

<style lang="scss" module>
.calendarDay {
  flex-grow: 1;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50px;
  position: sticky;
  top: 0;
}

.dayOfWeek {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  &.active {
    color: var(--base-background-sub);
  }
}

.day {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.8rem;
  height: 28px;
  width: 28px;

  &.active {
    color: var(--base-font-color-sub);
    background: var(--base-background-sub);
  }
}

.minute {
  height: 15px;
  list-style: none;
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
</style>
