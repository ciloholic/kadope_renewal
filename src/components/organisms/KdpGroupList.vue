<template>
  <KdpFrame :class="$style.groupList">
    <KdpTitleHeader>グループ一覧</KdpTitleHeader>
    <KdpDropdownList
      v-for="group in _groups"
      :key="group.id"
      :class="$style.dropdownList"
      :title="group.name"
      :lists="group.users"
    />
  </KdpFrame>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpTitleHeader from '@/components/atoms/KdpTitleHeader'
import KdpDropdownList from '@/components/molecules/KdpDropdownList'

export default {
  components: { KdpDropdownList, KdpTitleHeader, KdpFrame },
  computed: {
    ...mapGetters(['groups']),
    _groups() {
      return this.groups.map(x => {
        return { ...x, id: x.id, name: x.groupName }
      })
    }
  }
}
</script>

<style lang="scss" module>
.groupList {
  display: flex;
  flex-direction: column;
}

.dropdownList {
  max-width: 230px;
  margin-top: 5px;
}

.dropdownList + .dropdownList {
  margin-top: 5px;
}
</style>
