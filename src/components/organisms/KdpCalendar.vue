<template>
  <main :class="$style.calendar">
    <span :class="$style.calendarHeader">{{ getCurrentDay | $_formatMoment('gggg年M月') }}</span>
    <ul>
      <li :class="$style.calendarLabel" v-for="hour in hours" :key="hour | $_formatMoment('HH:mm')">
        {{ hour | $_formatMoment('HH:mm') }}
      </li>
    </ul>
    <KdpCalendarMain :class="$style.calendarMain" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import mixinMoment from '@/mixins/moment'
import KdpCalendarMain from '@/components/molecules/KdpCalendarMain'

export default {
  computed: {
    ...mapGetters(['getCurrentDay']),
    hours: function() {
      let start = this.moment().startOf('day')
      return [...Array(24).keys()].map(x => start.clone().add(x, 'hours'))
    }
  },
  components: { KdpCalendarMain },
  mixins: [mixinMoment]
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  height: 100%;
}

.calendarLabel {
  grid-area: area-c-l;
  height: 15px;
  list-style: none;

  & + .calendarLabel {
    margin-top: 45px;
  }
}

.calendarMain {
  grid-area: area-c-b;
}
</style>
