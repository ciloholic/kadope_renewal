<template>
  <div :class="$style.container">
    <KdpSideHeader :class="$style.sideHeader" />
    <div :class="$style.dailyReportList">
      <KdpDailyReportList :items="_dailyReports" @onClick="onDailyReportClick" />
    </div>
    <div :class="$style.dailyReportMain">
      <KdpDailyReportMain v-model="item" :item="item" :reports="_reports" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpSideHeader from '@/components/molecules/KdpSideHeader'
import KdpDailyReportList from '@/components/organisms/KdpDailyReportList'
import KdpDailyReportMain from '@/components/organisms/KdpDailyReportMain'

export default {
  components: { KdpSideHeader, KdpDailyReportList, KdpDailyReportMain },
  data() {
    return {
      item: {
        datetime: this.moment(),
        title: '',
        body: '',
        completed: false
      }
    }
  },
  computed: {
    ...mapGetters(['dailyReports', 'reports']),
    _dailyReports() {
      return this.dailyReports.map(x => {
        return {
          ...x,
          datetime: this.moment(x.datetime, 'YYYY-MM-DD')
        }
      })
    },
    _reports() {
      return this.reports.map(x => {
        const project = { projectId: x.id, projectName: x.projectName, total: x.total }
        return x.tasks.map(y => {
          return { ...project, taskId: y.id, taskName: y.taskName, time: y.time }
        })
      })
    }
  },
  methods: {
    onDailyReportClick(id) {
      this.item = this._.find(this._dailyReports, ['id', id])
    }
  }
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-areas:
    'area-s-h . .......... .......... .'
    'area-s-h . area-d-r-l area-d-r-m .'
    'area-s-h . .......... .......... .';
  grid-template-rows: 15px 1fr 15px;
  grid-template-columns: 75px 1fr 300px 700px 1fr;
  grid-gap: 0 15px;
  height: 100vh;
  margin-right: 15px;
}

.sideHeader {
  grid-area: area-s-h;
}

.dailyReportList {
  grid-area: area-d-r-l;
}

.dailyReportMain {
  grid-area: area-d-r-m;
}
</style>
