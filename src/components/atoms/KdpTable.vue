<template>
  <table :class="$style.table">
    <tbody>
      <template v-for="projects in items">
        <tr
          v-for="(project, i) in projects"
          :key="`${project.projectId} + '-' + ${project.taskId}`"
          :class="$style.projects"
        >
          <th v-if="i === 0" :class="$style.project" :rowspan="projects.length">
            <span :class="$style.projectName">{{ project.projectName }}</span>
          </th>
          <td :class="$style.task">
            <span :class="$style.taskName">{{ project.taskName }}</span>
          </td>
          <td :class="$style.task">
            <span :class="$style.taskTime">{{ project.time | $_formatMinute() }}</span>
          </td>
          <td v-if="i === 0" :class="[$style.summary, $style.taskSummary]" :rowspan="projects.length">
            <span>{{ project.total | $_formatMinute() }}</span>
          </td>
        </tr>
      </template>
      <tr :class="$style.projects">
        <td></td>
        <td :class="[$style.summary, $style.totalSummary]" colspan="2">合計</td>
        <td :class="[$style.summary, $style.taskSummary]">{{ summary | $_formatMinute() }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import mixinMoment from '@/mixins/moment'

export default {
  mixins: [mixinMoment],
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    summary() {
      return this._.sum(this._.map(this.items, x => this._.map(x, 'total')[0]))
    }
  }
}
</script>

<style lang="scss" module>
.table {
  color: var(--base-font-color-primary);
  border-collapse: collapse;
  word-wrap: break-word;
  width: 100%;
}

.projects + .projects {
  border-top: solid 1px var(--base-border-color-primary);
}

.project {
  background: var(--base-background-secondary);
}

.projectName {
  display: block;
  width: 180px;
  margin: auto;
}

tr:nth-of-type(n) > .task {
  background: #ddd;
}

tr:nth-of-type(2n) > .task {
  background: #fff;
}

.taskName {
  display: block;
  width: 260px;
  padding-left: 5px;
  text-align: left;
}

.taskTime {
  display: block;
  width: 50px;
  padding-right: 5px;
  text-align: right;
}

.summary {
  background: #faf5d0;
  font-weight: bold;
  padding: 0 5px;
}

.taskSummary {
  display: table-cell;
  width: 100px;
  text-align: right;
}

.totalSummary {
  text-align: left;
}
</style>
