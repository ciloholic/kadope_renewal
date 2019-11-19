<template>
  <aside :class="$style.groupList">
    <p :class="$style.mainTitle">グループ一覧</p>
    <KdpDropdownList
      :class="$style.dropdownList"
      v-for="group in getGroupAll"
      :key="group.id"
      :title="group.name"
      :lists="group.users"
    />
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpDropdownList from '@/components/molecules/KdpDropdownList'

export default {
  computed: {
    ...mapGetters(['getGroupAll'])
  },
  components: { KdpDropdownList }
}
</script>

<style lang="scss" module>
.mainTitle {
}

.groupList {
  color: var(--base-font-color-default);
  background: var(--base-background-default);
  border-radius: 3px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.dropdownList {
  margin-top: 10px;
  max-width: 230px;
}

.dropdownList + .dropdownList {
  margin-top: 5px;
}
</style>
