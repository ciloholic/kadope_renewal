<template>
  <KdpFrame :class="$style.calendar">
    <!-- calendar header -->
    <div :class="$style.calendarHeader">
      <font-awesome-icon :class="$style.prev" icon="angle-left" size="lg" fixed-width @click="onPrev" />
      <p @click="onToday">{{ getCalendarInfo.currentDay | $_formatMoment('gggg年M月') }}</p>
      <font-awesome-icon :class="$style.next" icon="angle-right" size="lg" fixed-width @click="onNext" />
    </div>
    <!-- calendar time label -->
    <ul :class="$style.calendarLabel">
      <li :class="$style.calendarLabelList" v-for="hour in hours" :key="hour | $_formatMoment('HH:mm')">
        {{ hour | $_formatMoment('HH:mm') }}
      </li>
    </ul>
    <!-- calendar main -->
    <KdpCalendarMain :class="$style.calendarMain" />
  </KdpFrame>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import mixinMoment from '@/mixins/moment'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpCalendarMain from '@/components/molecules/KdpCalendarMain'

export default {
  methods: {
    ...mapMutations(['CALENDAR_INFO_UPDATE']),
    onToday() {
      this.CALENDAR_INFO_UPDATE({ currentDay: this.moment() })
    },
    onPrev() {
      this.CALENDAR_INFO_UPDATE({ currentDay: this.getCalendarInfo.currentDay.clone().subtract(1, 'weeks') })
    },
    onNext() {
      this.CALENDAR_INFO_UPDATE({ currentDay: this.getCalendarInfo.currentDay.clone().add(1, 'weeks') })
    }
  },
  computed: {
    ...mapGetters(['getCalendarInfo']),
    hours() {
      let start = this.moment().startOf('day')
      return [...Array(24).keys()].map(x => start.clone().add(x, 'hours'))
    }
  },
  components: { KdpFrame, KdpCalendarMain },
  mixins: [mixinMoment]
}
</script>

<style lang="scss" module>
.calendar {
  height: 100%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  font-size: 1.5rem;
  height: 100%;

  .topLink {
    color: var(--base-font-color-default);
    text-decoration: none;
  }

  .prev {
    margin-right: 20px;
  }

  .next {
    margin-left: 20px;
  }
}

.calendarLabel {
  grid-area: area-c-l;

  .calendarLabelList {
    height: 15px;
    list-style: none;
    user-select: none;

    & + .calendarLabelList {
      margin-top: 33px;
    }
  }
}

.calendarMain {
  grid-area: area-c-b;
}
</style>
