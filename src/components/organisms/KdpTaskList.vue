<template>
  <aside :class="$style.taskList">
    <KdpSearch :class="$style.search" />
    <KdpRecentTask :class="$style.dropdownList" title="最近使ったタスク" :tasks="getRecentTaskAll | limit" />
    <KdpDropdownList
      :class="$style.dropdownList"
      v-for="project in getProjectAll"
      :key="project.id"
      :project="project"
      @click="TASK_TOGGLE_BY_ID(id)"
    />
  </aside>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import KdpSearch from '@/components/atoms/KdpSearch'
import KdpRecentTask from '@/components/molecules/KdpRecentTask'
import KdpDropdownList from '@/components/molecules/KdpDropdownList'

export default {
  methods: {
    ...mapMutations(['TASK_TOGGLE_BY_ID'])
  },
  computed: {
    ...mapGetters(['getRecentTaskAll', 'getProjectAll'])
  },
  filters: {
    limit: v => v.slice(0, 6)
  },
  components: { KdpSearch, KdpRecentTask, KdpDropdownList }
}
</script>

<style lang="scss" module>
.taskList {
  color: var(--base-font-color-default);
  background: var(--base-background-default);
  border-radius: 3px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.search {
  width: auto;
  height: 25px;
}

.dropdownList {
  margin-top: 10px;
  max-width: 230px;
}

.dropdownList + .dropdownList {
  margin-top: 5px;
}
</style>
