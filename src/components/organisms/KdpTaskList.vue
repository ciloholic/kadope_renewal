<template>
  <KdpFrame :class="$style.taskList">
    <KdpSearch v-model="search" :class="$style.search" />
    <KdpPinTask :class="$style.dropdownList" title="ピン留めタスク" :tasks="pinTasks" />
    <KdpProject
      v-for="project in projects"
      :key="project.id"
      :class="$style.dropdownList"
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
  data: function() {
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
.taskList {
  display: flex;
  flex-direction: column;
}

.search {
  width: auto;
  height: 25px;
}

.dropdownList {
  margin-top: 5px;
  max-width: 230px;
}

.dropdownList + .dropdownList {
  margin-top: 5px;
}
</style>
