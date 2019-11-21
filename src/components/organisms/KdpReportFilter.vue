<template>
  <KdpFrame :class="$style.reportFilter">
    <!-- specify the time period -->
    <KdpTitleHeader :class="$style.titleHeader">条件指定</KdpTitleHeader>
    <KdpTitleSubHeader :class="$style.titleSubHeader">期間</KdpTitleSubHeader>
    <KdpInput :class="$style.calendarInput" v-model="start" type="date"></KdpInput>
    <KdpInput :class="$style.calendarInput" v-model="end" type="date"></KdpInput>
    <div :class="$style.periodGroup">
      <KdpPeriodButton v-for="(period, key) in periods" :key="key" :period="period" @onClick="onPeriodClick" />
    </div>
    <!-- selected group -->
  </KdpFrame>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpInput from '@/components/atoms/KdpInput'
import KdpPeriodButton from '@/components/atoms/KdpPeriodButton'
import KdpTitleHeader from '@/components/atoms/KdpTitleHeader'
import KdpTitleSubHeader from '@/components/atoms/KdpTitleSubHeader'

export default {
  data() {
    return {
      start: null,
      end: null,
      periods: []
    }
  },
  methods: {
    onPeriodClick(e) {
      this.start = e['start']
      this.end = e['end']
    }
  },
  computed: {
    ...mapGetters(['getGroupAll', 'getCalendarInfo']),
    baseline() {
      let baseline = this.getCalendarInfo.today
        .clone()
        .startOf('month')
        .month(7 - 1)
      if (this.getCalendarInfo.today.clone().isBefore(baseline)) {
        // 1〜6月の場合、基準を前年7月に設定
        return baseline.subtract(1, 'years')
      } else {
        // 7〜12月の場合、基準を今年7月に設定
        return baseline
      }
    }
  },
  created() {
    this.start = this.getCalendarInfo.today
      .clone()
      .startOf('month')
      .format('YYYY-MM-DD')
    this.end = this.getCalendarInfo.today
      .clone()
      .endOf('month')
      .format('YYYY-MM-DD')
    this.periods = [
      {
        key: 'this_week',
        text: '今週',
        start: this.getCalendarInfo.today.clone().startOf('week'),
        end: this.getCalendarInfo.today.clone().endOf('week')
      },
      {
        key: 'last_week',
        text: '先週',
        start: this.getCalendarInfo.today
          .clone()
          .startOf('week')
          .subtract(7, 'days'),
        end: this.getCalendarInfo.today
          .clone()
          .endOf('week')
          .subtract(7, 'days')
      },
      {
        key: 'this_month',
        text: '今月',
        start: this.getCalendarInfo.today.clone().startOf('month'),
        end: this.getCalendarInfo.today.clone().endOf('month')
      },
      {
        key: 'last_month',
        text: '先月',
        start: this.getCalendarInfo.today
          .clone()
          .subtract(1, 'months')
          .startOf('month'),
        end: this.getCalendarInfo.today
          .clone()
          .subtract(1, 'months')
          .endOf('month')
      },
      {
        key: 'first_half',
        text: '上期',
        start: this.baseline,
        end: this.baseline
          .clone()
          .add(5, 'months')
          .endOf('month')
      },
      {
        key: 'second_half',
        text: '下期',
        start: this.baseline.clone().add(6, 'months'),
        end: this.baseline
          .clone()
          .add(11, 'months')
          .endOf('months')
      },
      {
        key: 'one_quota',
        text: '1Q',
        start: this.baseline,
        end: this.baseline
          .clone()
          .add(2, 'months')
          .endOf('months')
      },
      {
        key: 'two_quota',
        text: '2Q',
        start: this.baseline.clone().add(3, 'months'),
        end: this.baseline
          .clone()
          .add(5, 'months')
          .endOf('months')
      },
      {
        key: 'three_quota',
        text: '3Q',
        start: this.baseline.clone().add(6, 'months'),
        end: this.baseline
          .clone()
          .add(8, 'months')
          .endOf('months')
      },
      {
        key: 'four_quota',
        text: '4Q',
        start: this.baseline.clone().add(9, 'months'),
        end: this.baseline
          .clone()
          .add(11, 'months')
          .endOf('months')
      }
    ]
  },
  components: { KdpTitleHeader, KdpTitleSubHeader, KdpFrame, KdpInput, KdpPeriodButton }
}
</script>

<style lang="scss" module>
.reportFilter {
  display: flex;
  flex-direction: column;
}

.titleHeader,
.titleSubHeader {
  margin-bottom: 5px;
}

.calendarInput {
  margin-bottom: 5px;
}

.periodGroup {
  display: flex;
  justify-content: space-between;
}
</style>
