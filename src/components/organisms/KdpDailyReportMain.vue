<template>
  <KdpFrame>
    <KdpH1 :class="$style.h1">
      <span :class="$style.status" :data-completed="_dailyReportInfo.completed">
        {{ statusText(_dailyReportInfo.completed) }}
      </span>
      <span>{{ _dailyReportInfo.datetime | $_formatMoment('YYYY-MM-DD') }} の日報</span>
    </KdpH1>
    <KdpTable :items="_reports" />
    <KdpH2 :class="$style.h2">件名</KdpH2>
    <div :class="$style.title">{{ _dailyReportInfo.title }}</div>
    <KdpH2 :class="$style.h2">所感</KdpH2>
    <KdpTextarea v-model="_dailyReportInfo.body" />
    <div :class="$style.buttonGroup">
      <KdpButton :class="$style.button" @onClick="onSaveClick">保存</KdpButton>
      <KdpButton :class="$style.button" @onClick="onSendClick">送信</KdpButton>
    </div>
  </KdpFrame>
</template>

<script>
import { mapGetters } from 'vuex'
import mixinMoment from '@/mixins/moment'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpButton from '@/components/atoms/KdpButton'
import KdpH1 from '@/components/atoms/KdpH1'
import KdpH2 from '@/components/atoms/KdpH2'
import KdpTable from '@/components/atoms/KdpTable'
import KdpTextarea from '@/components/atoms/KdpTextarea'

export default {
  components: { KdpFrame, KdpH1, KdpH2, KdpTable, KdpTextarea, KdpButton },
  mixins: [mixinMoment],
  computed: {
    ...mapGetters(['dailyReportInfo', 'reports']),
    _dailyReportInfo() {
      return { ...this.dailyReportInfo, datetime: this.moment(this.dailyReportInfo, 'YYYY-MM-DD') }
    },
    _reports() {
      return this.reports.map(x => {
        const project = { projectId: x.id, projectName: x.name, total: x.total }
        return x.tasks.map(y => {
          return { ...project, taskId: y.id, taskName: y.name, time: y.time }
        })
      })
    }
  },
  methods: {
    onSaveClick() {
      console.log('save')
    },
    onSendClick() {
      console.log('send')
    },
    statusText(completed) {
      return completed ? '【済】' : '【未】'
    }
  }
}
</script>

<style lang="scss" module>
.h1 {
  margin-bottom: 5px;
}

.h2 {
  margin-bottom: 10px;
}

.title {
  height: 30px;
  margin-bottom: 5px;
}

.status {
  color: #f54;

  &[data-completed] {
    color: #4c2;
  }
}

.buttonGroup {
  display: flex;
  justify-content: space-around;
}

.button {
  display: flex;
  width: 330px;
  height: 30px;
}
</style>
