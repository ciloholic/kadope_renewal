<template>
  <KdpFrame :class="$style.groupListAdmin">
    <KdpH1 :class="$style.h1">グループ一覧</KdpH1>
    <KdpList :items="groups" @onClick="onListClick" />
  </KdpFrame>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpList from '@/components/atoms/KdpList'
import KdpH1 from '@/components/atoms/KdpH1'

export default {
  components: { KdpH1, KdpFrame, KdpList },
  computed: {
    ...mapGetters(['groups'])
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
