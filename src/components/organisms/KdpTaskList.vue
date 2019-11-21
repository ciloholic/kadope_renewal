<template>
  <KdpFrame :class="$style.taskList">
    <KdpSearch :class="$style.search" v-model="search" />
    <KdpPinTask :class="$style.dropdownList" title="ピン留めタスク" :tasks="getPinTaskAll" />
    <KdpProject
      :class="$style.dropdownList"
      v-for="project in getProjectAll"
      :key="project.id"
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
  data: function() {
    return {
      search: ''
    }
  },
  methods: {
    ...mapMutations(['TASK_TOGGLE_BY_ID'])
  },
  computed: {
    ...mapGetters(['getPinTaskAll', 'getProjectAll'])
  },
  components: { KdpSearch, KdpFrame, KdpPinTask, KdpProject }
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
