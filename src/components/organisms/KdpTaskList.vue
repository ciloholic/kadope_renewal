<template>
  <aside :class="$style.taskList">
    <KdpSearch :class="$style.search" />
    <div :class="$style.projects">
      <KdpDropdownList
        :class="$style.dropdownList"
        v-for="project in getProjectAll"
        :key="project.id"
        :project="project"
        @click="onProjectClick"
      />
    </div>
  </aside>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import KdpSearch from '@/components/atoms/KdpSearch'
import KdpDropdownList from '@/components/atoms/KdpDropdownList'

export default {
  methods: {
    ...mapMutations(['DROPDOWN_TOGGLE_BY_ID']),
    onProjectClick: function(id) {
      this.DROPDOWN_TOGGLE_BY_ID(id)
    }
  },
  computed: {
    ...mapGetters(['getProjectAll'])
  },
  components: { KdpSearch, KdpDropdownList }
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

.projects {
  margin-top: 10px;
  max-width: 230px;
}

.dropdownList + .dropdownList {
  margin-top: 5px;
}
</style>
