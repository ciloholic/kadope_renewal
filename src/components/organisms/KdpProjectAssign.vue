<template>
  <KdpFrame>
    <KdpH1 :class="$style.h1">プロジェクトアサイン</KdpH1>
  </KdpFrame>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpH1 from '@/components/atoms/KdpH1'

export default {
  components: { KdpFrame, KdpH1 },
  computed: {
    ...mapGetters(['projects'])
  },
  methods: {}
}
</script>

<style lang="scss" module>
.h1 {
  margin-bottom: 10px;
}
</style>
