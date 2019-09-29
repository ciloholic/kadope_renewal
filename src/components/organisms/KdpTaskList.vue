<template>
  <aside :class="$style.taskList">
    <KdpSearch :class="$style.search" />
    <div :class="$style.project">
      <KdpDropdownList
        :class="$style.dropdownList"
        v-for="project in getProjectAll"
        :key="project.id"
        :project="project"
      />
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpSearch from '@/components/atoms/KdpSearch'
import KdpDropdownList from '@/components/atoms/KdpDropdownList'

export default {
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
  display: grid;
  grid-gap: 15px 0;
  grid-template-rows: 25px 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    'area-s'
    'area-d-b';
}

.search {
  grid-area: area-s;
}

.project {
  grid-area: area-d-b;
}

.dropdownList + .dropdownList {
  margin-top: 5px;
}
</style>
