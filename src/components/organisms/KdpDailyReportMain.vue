<template>
  <KdpFrame>
    <KdpTitleHeader :class="$style.h1">
      <span :class="$style.status" :data-completed="_dailyReportInfo.completed">{{
        statusText(_dailyReportInfo.completed)
      }}</span>
      <span>{{ _dailyReportInfo.datetime | $_formatMoment('YYYY-MM-DD') }} の日報</span>
    </KdpTitleHeader>
    <KdpTable :items="_reports" />
    <KdpTitleSubHeader :class="$style.h2">件名</KdpTitleSubHeader>
    <div :class="$style.title">{{ _dailyReportInfo.title }}</div>
    <KdpTitleSubHeader :class="$style.h2">所感</KdpTitleSubHeader>
    <textarea v-model="_dailyReportInfo.body" :class="$style.textarea" />
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
import KdpTitleHeader from '@/components/atoms/KdpTitleHeader'
import KdpTitleSubHeader from '@/components/atoms/KdpTitleSubHeader'
import KdpTable from '@/components/atoms/KdpTable'

export default {
  components: { KdpFrame, KdpTitleHeader, KdpTitleSubHeader, KdpTable, KdpButton },
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

.status {
  color: #f54;

  &[data-completed] {
    color: #4c2;
  }
}

.title {
  height: 30px;
  margin-bottom: 5px;
}

.textarea {
  width: 100%;
  height: 200px;
  padding: 5px 10px;
  color: var(--base-font-color-default);
  resize: none;
  background: var(--base-background-primary);
  border: none;
  border-radius: 3px;
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
