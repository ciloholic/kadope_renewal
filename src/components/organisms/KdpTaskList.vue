<template>
  <KdpFrame :class="$style.taskList">
    <KdpSearch v-model="search" :class="$style.search" />
    <KdpPinTask :class="$style.list" title="ピン留めタスク" :tasks="pinTasks" />
    <KdpProject
      v-for="project in _projects"
      :key="project.id"
      :class="$style.list"
      :project="project"
      :search="search"
      @click="TASK_TOGGLE_BY_ID(id)"
    />
  </KdpFrame>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpSearch from '@/components/atoms/KdpSearch'
import KdpPinTask from '@/components/molecules/KdpPinTask'
import KdpProject from '@/components/molecules/KdpProject'

export default {
  components: { KdpSearch, KdpFrame, KdpPinTask, KdpProject },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    ...mapGetters(['pinTasks', 'projects']),
    _projects() {
      return this.projects.map(x => {
        const tasks = x.tasks.map(y => {
          return { ...y, name: y.taskName }
        })
        return {
          ...x,
          name: x.projectName,
          tasks: tasks
        }
      })
    }
  },
  methods: {
    ...mapMutations(['TASK_TOGGLE_BY_ID'])
  }
}
</script>

<style lang="scss" module>
.taskList {
  display: flex;
  flex-direction: column;
}

.search {
  width: auto;
  height: 25px;
}

.list {
  max-width: 230px;
  margin-top: 5px;
}

.list + .list {
  margin-top: 5px;
}
</style>
