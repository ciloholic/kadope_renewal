<template>
  <div :class="$style.container">
    <KdpHeader :class="$style.header" />
    <div :class="$style.setting">
      <KdpSetting />
    </div>
  </div>
</template>

<script>
import KdpHeader from '@/components/molecules/KdpHeader'
import KdpSetting from '@/components/organisms/KdpSetting'

export default {
  components: { KdpHeader, KdpSetting },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-areas:
    'area-h . ...... .'
    'area-h . area-s .'
    'area-h . ...... .';
  grid-template-rows: 15px 1fr 15px;
  grid-template-columns: 75px 1fr 800px 1fr;
  grid-gap: 0 15px;
  height: 100vh;
  margin-right: 15px;
}

.header {
  grid-area: area-h;
}

.setting {
  grid-area: area-s;
}
</style>
