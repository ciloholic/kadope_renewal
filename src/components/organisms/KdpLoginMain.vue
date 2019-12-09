<template>
  <KdpFrame :class="$style.frame">
    <KdpH1 :class="$style.h1">ログイン</KdpH1>
    <KdpButton :class="$style.button">Google Login</KdpButton>
  </KdpFrame>
</template>

<script>
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpH1 from '@/components/atoms/KdpH1'
import KdpButton from '@/components/atoms/KdpButton'

export default {
  components: { KdpFrame, KdpH1, KdpButton },
  methods: {}
}
</script>

<style lang="scss" module>
.h1 {
  margin-bottom: 10px;
}

.button {
  height: 40px;
  user-select: none;
}
</style>
