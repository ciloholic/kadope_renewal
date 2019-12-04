<template>
  <KdpFrame :class="$style.groupListAdmin">
    <KdpTitleHeader :class="$style.h1">グループ一覧</KdpTitleHeader>
    <KdpList :items="_groups" @onClick="onListClick" />
  </KdpFrame>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpList from '@/components/atoms/KdpList'
import KdpTitleHeader from '@/components/atoms/KdpTitleHeader'

export default {
  components: { KdpTitleHeader, KdpFrame, KdpList },
  computed: {
    ...mapGetters(['groups']),
    _groups() {
      return this.groups.map(x => {
        return { id: x.id, name: x.groupName }
      })
    }
  },
  methods: {
    onListClick(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" module>
.h1 {
  margin-bottom: 5px;
}

.groupListAdmin {
  display: flex;
  flex-direction: column;
}
</style>
