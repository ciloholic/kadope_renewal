<template>
  <KdpFrame :class="$style.calendarTaskList">
    <KdpSearch v-model="search" :class="$style.search" />
    <KdpCalendarPinTask :class="$style.group" title="ピン留めタスク" :items="pinTasks" />
    <KdpCalendarProject
      v-for="project in projects"
      :key="project.id"
      :class="$style.group"
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
import KdpCalendarPinTask from '@/components/molecules/KdpCalendarPinTask'
import KdpCalendarProject from '@/components/molecules/KdpCalendarProject'

export default {
  components: { KdpSearch, KdpFrame, KdpCalendarPinTask, KdpCalendarProject },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    ...mapGetters(['pinTasks', 'projects'])
  },
  methods: {
    ...mapMutations(['TASK_TOGGLE_BY_ID'])
  }
}
</script>

<style lang="scss" module>
.calendarTaskList {
  display: flex;
  flex-direction: column;

  > .search {
    width: auto;
    height: 25px;
  }

  > .group {
    max-width: 230px;
    margin-top: 5px;
  }

  > .group + .group {
    margin-top: 5px;
  }
}
</style>
