<template>
  <KdpFrame :class="$style.calendarInput">
    <div :class="$style.header">
      <font-awesome-icon :class="$style.prev" icon="angle-left" size="lg" fixed-width @click="onPrev" />
      <span @click="onToday">{{ calendarInfo.currentDay | $_formatMoment('gggg年M月') }}</span>
      <font-awesome-icon :class="$style.next" icon="angle-right" size="lg" fixed-width @click="onNext" />
    </div>
    <ul :class="$style.labels">
      <li v-for="hour in hours" :key="hour | $_formatMoment('HH:mm')" :class="$style.label">
        {{ hour | $_formatMoment('HH:mm') }}
      </li>
    </ul>
    <KdpCalendarMain :class="$style.calendarMain" />
  </KdpFrame>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import mixinMoment from '@/mixins/moment'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpCalendarMain from '@/components/molecules/KdpCalendarMain'

export default {
  components: { KdpFrame, KdpCalendarMain },
  mixins: [mixinMoment],
  computed: {
    ...mapGetters(['calendarInfo']),
    hours() {
      let start = this.moment().startOf('day')
      return [...Array(24).keys()].map(x => start.clone().add(x, 'hours'))
    }
  },
  methods: {
    ...mapMutations(['CALENDAR_INFO_UPDATE']),
    onToday() {
      this.CALENDAR_INFO_UPDATE({ currentDay: this.moment() })
    },
    onPrev() {
      this.CALENDAR_INFO_UPDATE({ currentDay: this.calendarInfo.currentDay.clone().subtract(1, 'weeks') })
    },
    onNext() {
      this.CALENDAR_INFO_UPDATE({ currentDay: this.calendarInfo.currentDay.clone().add(1, 'weeks') })
    }
  }
}
</script>

<style lang="scss" module>
.calendarInput {
  display: grid;
  grid-template-areas:
    'area-c-h area-c-h'
    '........ area-c-b'
    'area-c-l area-c-b';
  grid-template-rows: 20px 42px 1fr;
  grid-template-columns: 40px 1fr;
  height: 100%;
  font-size: 0.9rem;

  > .calendarMain {
    display: flex;
    grid-area: area-c-b;
  }
}

.header {
  display: flex;
  grid-area: area-c-h;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1.5rem;
  user-select: none;

  > .topLink {
    color: var(--base-font-color-default);
    text-decoration: none;
  }

  > .prev {
    margin-right: 20px;
  }

  > .next {
    margin-left: 20px;
  }
}

.labels {
  grid-area: area-c-l;

  > .label {
    height: 15px;
    list-style: none;
    user-select: none;
  }

  .label + .label {
    margin-top: 33px;
  }
}
</style>
