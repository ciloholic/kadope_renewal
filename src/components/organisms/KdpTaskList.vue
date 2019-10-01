<template>
  <aside :class="$style.taskList">
    <KdpSearch :class="$style.search" />
    <div :class="$style.project">
      <KdpDropdownList
        :class="$style.dropdownList"
        v-for="project in getProjectAll"
        :key="project.id"
        :project="project"
        @click="onClick"
      />
    </div>
  </aside>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import KdpSearch from '@/components/atoms/KdpSearch'
import KdpDropdownList from '@/components/atoms/KdpDropdownList'

export default {
  created() {
    this.DROPDOWN_HIDDEN_ALL()
  },
  methods: {
    ...mapMutations(['DROPDOWN_TOGGLE_BY_ID', 'DROPDOWN_HIDDEN_ALL']),
    onClick: function(id) {
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
  display: grid;
  grid-gap: 5px 0;
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
