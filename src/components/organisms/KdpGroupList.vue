<template>
  <KdpFrame :class="$style.groupList">
    <KdpTitleHeader>グループ一覧</KdpTitleHeader>
    <KdpDropdownList
      :class="$style.dropdownList"
      v-for="group in getGroupAll"
      :key="group.id"
      :title="group.groupName"
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
  computed: {
    ...mapGetters(['getGroupAll'])
  },
  components: { KdpDropdownList, KdpTitleHeader, KdpFrame }
}
</script>

<style lang="scss" module>
.groupList {
  display: flex;
  flex-direction: column;
}

.dropdownList {
  margin-top: 5px;
  max-width: 230px;
}

.dropdownList + .dropdownList {
  margin-top: 5px;
}
</style>
