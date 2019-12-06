<template>
  <KdpFrame :class="$style.reportFilter">
    <div :class="$style.block">
      <KdpH1 :class="$style.h1">条件指定</KdpH1>
      <!-- period -->
      <div :class="$style.block">
        <KdpH2 :class="$style.h2">期間</KdpH2>
        <KdpInput v-model="start" :class="$style.input" type="date" />
        <KdpInput v-model="end" :class="$style.input" type="date" />
        <div :class="$style.periodGroup">
          <KdpPeriodButton v-for="(period, key) in periods" :key="key" :period="period" @onClick="onPeriodClick" />
        </div>
      </div>
      <!-- group -->
      <div :class="$style.block">
        <KdpH2 :class="$style.h2">グループ</KdpH2>
        <KdpSelect v-model="group" :class="$style.select" :items="groups" />
      </div>
    </div>
    <div :class="$style.block">
      <KdpH1 :class="$style.h1">詳細指定</KdpH1>
      <!-- aggregate unit -->
      <div :class="$style.block">
        <KdpH2 :class="$style.h2">集計単位</KdpH2>
        <KdpSwitch
          :class="$style.switch"
          :labels="aggregateUnit.labels"
          :value="aggregateUnit.authority"
          @onClick="onSwitchClick"
        />
      </div>
      <!-- project -->
      <div :class="$style.block">
        <KdpH2 :class="$style.h2">プロジェクト</KdpH2>
        <KdpCheckboxList v-model="projectChecked" :items="projects" :checked="projectChecked" />
      </div>
      <!-- account -->
      <div :class="$style.block">
        <KdpH2 :class="$style.h2">ユーザ</KdpH2>
        <KdpCheckboxList v-model="accountChecked" :items="accounts" :checked="accountChecked" />
      </div>
    </div>
  </KdpFrame>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpInput from '@/components/atoms/KdpInput'
import KdpSelect from '@/components/atoms/KdpSelect'
import KdpSwitch from '@/components/atoms/KdpSwitch'
import KdpPeriodButton from '@/components/atoms/KdpPeriodButton'
import KdpH1 from '@/components/atoms/KdpH1'
import KdpH2 from '@/components/atoms/KdpH2'
import KdpCheckboxList from '@/components/atoms/KdpCheckboxList'

export default {
  components: {
    KdpH1,
    KdpH2,
    KdpFrame,
    KdpInput,
    KdpSelect,
    KdpSwitch,
    KdpPeriodButton,
    KdpCheckboxList
  },
  data() {
    return {
      start: null,
      end: null,
      periods: [],
      group: -1,
      aggregateUnit: {
        labels: [
          { id: 1, name: 'プロジェクト' },
          { id: 2, name: 'ユーザ' }
        ],
        authority: 1
      },
      projectChecked: [],
      accountChecked: []
    }
  },
  computed: {
    ...mapGetters(['groups', 'projects', 'accounts', 'calendarInfo']),
    baseline() {
      let baseline = this.calendarInfo.today
        .clone()
        .startOf('month')
        .month(6)
      if (this.calendarInfo.today.clone().isBefore(baseline)) {
        // 1〜6月の場合、基準を前年7月に設定
        return baseline.subtract(1, 'years')
      } else {
        // 7〜12月の場合、基準を今年7月に設定
        return baseline
      }
    }
  },
  watch: {
    start: function() {
      this.REPORT_FILTER_INFO_UPDATE({ start: this.start })
    },
    end: function() {
      this.REPORT_FILTER_INFO_UPDATE({ end: this.end })
    },
    group: function() {
      this.REPORT_FILTER_INFO_UPDATE({ group: this.group })
    },
    'aggregateUnit.authority': function() {
      this.REPORT_FILTER_INFO_UPDATE({ aggregateUnit: this.aggregateUnit.authority })
    },
    projectChecked: function() {
      this.REPORT_FILTER_INFO_UPDATE({ projectChecked: this.projectChecked })
    },
    accountChecked: function() {
      this.REPORT_FILTER_INFO_UPDATE({ accountChecked: this.accountChecked })
    }
  },
  created() {
    this.start = this.calendarInfo.today
      .clone()
      .startOf('month')
      .format('YYYY-MM-DD')
    this.end = this.calendarInfo.today
      .clone()
      .endOf('month')
      .format('YYYY-MM-DD')
    this.periods = [
      {
        key: 'this_week',
        text: '今週',
        start: this.calendarInfo.today.clone().startOf('week'),
        end: this.calendarInfo.today.clone().endOf('week')
      },
      {
        key: 'last_week',
        text: '先週',
        start: this.calendarInfo.today
          .clone()
          .startOf('week')
          .subtract(7, 'days'),
        end: this.calendarInfo.today
          .clone()
          .endOf('week')
          .subtract(7, 'days')
      },
      {
        key: 'this_month',
        text: '今月',
        start: this.calendarInfo.today.clone().startOf('month'),
        end: this.calendarInfo.today.clone().endOf('month')
      },
      {
        key: 'last_month',
        text: '先月',
        start: this.calendarInfo.today
          .clone()
          .subtract(1, 'months')
          .startOf('month'),
        end: this.calendarInfo.today
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
  methods: {
    ...mapMutations(['REPORT_FILTER_INFO_UPDATE']),
    onPeriodClick(e) {
      this.start = e['start']
      this.end = e['end']
    },
    onSwitchClick(e) {
      this.aggregateUnit.authority = e
    }
  }
}
</script>

<style lang="scss" module>
.reportFilter {
  display: flex;
  flex-direction: column;
}

.block + .block {
  margin-top: 10px;
}

.h1 {
  margin-bottom: 5px;
}

.h2 {
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
