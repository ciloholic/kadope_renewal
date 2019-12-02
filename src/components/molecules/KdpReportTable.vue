<template>
  <div>
    <template v-if="reportInfo.aggregateUnit == 1">
      <KdpTitleHeader :class="$style.h1">プロジェクト毎</KdpTitleHeader>
    </template>
    <template v-else>
      <KdpTitleHeader :class="$style.h1">ユーザ毎</KdpTitleHeader>
    </template>
    <KdpTable :items="_reports" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpTitleHeader from '@/components/atoms/KdpTitleHeader'
import KdpTable from '@/components/atoms/KdpTable'

export default {
  components: { KdpTitleHeader, KdpTable },
  computed: {
    ...mapGetters(['reportInfo', 'reports']),
    _reports() {
      return this.reports.map(x => {
        const project = { projectId: x.id, projectName: x.projectName, total: x.total }
        return x.tasks.map(y => {
          return { ...project, taskId: y.id, taskName: y.taskName, time: y.time }
        })
      })
    }
  }
}
</script>

<style lang="scss" module>
.h1 {
  margin-bottom: 10px;
}
</style>
