<template>
  <KdpFrame :class="$style.reportFilter">
    <div :class="$style.mainBlock">
      <KdpTitleHeader :class="$style.titleHeader">条件指定</KdpTitleHeader>
      <!-- period -->
      <div :class="$style.subBlock">
        <KdpTitleSubHeader :class="$style.titleSubHeader">期間</KdpTitleSubHeader>
        <KdpInput :class="$style.input" v-model="start" type="date" />
        <KdpInput :class="$style.input" v-model="end" type="date" />
        <div :class="$style.periodGroup">
          <KdpPeriodButton v-for="(period, key) in periods" :key="key" :period="period" @onClick="onPeriodClick" />
        </div>
      </div>
      <!-- group -->
      <div :class="$style.subBlock">
        <KdpTitleSubHeader :class="$style.titleSubHeader">グループ</KdpTitleSubHeader>
        <KdpSelect :class="$style.select" v-model="group" :values="getGroupAll" />
      </div>
    </div>
    <div :class="$style.mainBlock">
      <KdpTitleHeader :class="$style.titleHeader">詳細指定</KdpTitleHeader>
      <!-- aggregate unit -->
      <div :class="$style.subBlock">
        <KdpTitleSubHeader :class="$style.titleSubHeader">集計単位</KdpTitleSubHeader>
        <KdpSwitch
          :class="$style.switch"
          v-model="aggregateUnit.value"
          :lists="aggregateUnit.lists"
          :value="aggregateUnit.value"
          @onClick="onSwitchClick"
        />
      </div>
      <!-- project -->
      <div :class="$style.subBlock">
        <KdpTitleSubHeader :class="$style.titleSubHeader">プロジェクト</KdpTitleSubHeader>
      </div>
      <!-- user -->
      <div :class="$style.subBlock">
        <KdpTitleSubHeader :class="$style.titleSubHeader">ユーザ</KdpTitleSubHeader>
      </div>
    </div>
  </KdpFrame>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpInput from '@/components/atoms/KdpInput'
import KdpSelect from '@/components/atoms/KdpSelect'
import KdpSwitch from '@/components/atoms/KdpSwitch'
import KdpPeriodButton from '@/components/atoms/KdpPeriodButton'
import KdpTitleHeader from '@/components/atoms/KdpTitleHeader'
import KdpTitleSubHeader from '@/components/atoms/KdpTitleSubHeader'

export default {
  data() {
    return {
      start: null,
      end: null,
      periods: [],
      group: '',
      aggregateUnit: {
        lists: [
          { id: 1, text: 'プロジェクト' },
          { id: 2, text: 'ユーザ' }
        ],
        value: 1
      }
    }
  },
  methods: {
    onPeriodClick(e) {
      this.start = e['start']
      this.end = e['end']
    },
    onSwitchClick(e) {
      this.aggregateUnit.value = e
    }
  },
  computed: {
    ...mapGetters(['getGroupAll', 'getCalendarInfo']),
    baseline() {
      let baseline = this.getCalendarInfo.today
        .clone()
        .startOf('month')
        .month(6)
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
  components: { KdpTitleHeader, KdpTitleSubHeader, KdpFrame, KdpInput, KdpSelect, KdpSwitch, KdpPeriodButton }
}
</script>

<style lang="scss" module>
.reportFilter {
  display: flex;
  flex-direction: column;
}

.mainBlock + .mainBlock,
.subBlock + .subBlock {
  margin-top: 10px;
}

.titleHeader,
.titleSubHeader {
  margin-bottom: 5px;
}

.input,
.select,
.switch {
  margin-bottom: 5px;
}

.periodGroup {
  display: flex;
  justify-content: space-between;
}
</style>
