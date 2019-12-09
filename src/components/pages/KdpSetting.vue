<template>
  <div :class="$style.container">
    <KdpHeader :class="$style.header" />
    <div :class="$style.settingConfig">
      <KdpSettingConfig />
    </div>
    <div :class="$style.settingMain">
      <KdpSettingMain />
    </div>
  </div>
</template>

<script>
import KdpHeader from '@/components/molecules/KdpHeader'
import KdpSettingConfig from '@/components/organisms/KdpSettingConfig'
import KdpSettingMain from '@/components/organisms/KdpSettingMain'

export default {
  components: { KdpHeader, KdpSettingConfig, KdpSettingMain },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-areas:
    'area-h . ........ ........ .'
    'area-h . area-s-c area-s-m .'
    'area-h . ........ ........ .';
  grid-template-rows: 15px 1fr 15px;
  grid-template-columns: 75px 1fr 300px 600px 1fr;
  grid-gap: 0 15px;
  height: 100vh;
  margin-right: 15px;
}

.header {
  grid-area: area-h;
}

.settingConfig {
  grid-area: area-s-c;
}

.settingMain {
  grid-area: area-s-m;
}
</style>
