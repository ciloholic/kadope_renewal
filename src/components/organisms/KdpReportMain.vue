<template>
  <KdpFrame>
    <KdpAggregateCondition :class="$style.block" />
    <KdpReportTable :class="$style.block" :aggregate-unit="reportInfo.aggregateUnit" :items="_reports" />
  </KdpFrame>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpReportTable from '@/components/molecules/KdpReportTable'
import KdpAggregateCondition from '@/components/molecules/KdpAggregateCondition'

export default {
  components: { KdpFrame, KdpReportTable, KdpAggregateCondition },
  computed: {
    ...mapGetters(['reportInfo', 'reports']),
    _reports() {
      return this.reports.map(x => {
        const project = { projectId: x.id, projectName: x.name, total: x.total }
        return x.tasks.map(y => {
          return { ...project, taskId: y.id, taskName: y.name, time: y.time }
        })
      })
    }
  }
}
</script>

<style lang="scss" module>
.block + .block {
  margin-top: 10px;
}
</style>
