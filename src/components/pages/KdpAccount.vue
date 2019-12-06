<template>
  <div :class="$style.container">
    <KdpHeader :class="$style.header" />
    <div :class="$style.accountAuthority">
      <KdpAccountAuthority />
    </div>
  </div>
</template>

<script>
import KdpHeader from '@/components/molecules/KdpHeader'
import KdpAccountAuthority from '@/components/organisms/KdpAccountAuthority'

export default {
  components: { KdpHeader, KdpAccountAuthority },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-areas:
    'area-s-h . ........ .'
    'area-s-h . area-a-a .'
    'area-s-h . ........ .';
  grid-template-rows: 15px 1fr 15px;
  grid-template-columns: 75px 1fr 800px 1fr;
  grid-gap: 0 15px;
  height: 100vh;
  margin-right: 15px;
}

.header {
  grid-area: area-s-h;
}

.accountAuthority {
  grid-area: area-a-a;
}
</style>
