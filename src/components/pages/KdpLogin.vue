<template>
  <div :class="$style.container">
    <KdpHeader :class="$style.header" />
    <div :class="$style.loginMain">
      <KdpLoginMain />
    </div>
  </div>
</template>

<script>
import KdpHeader from '@/components/molecules/KdpHeader'
import KdpLoginMain from '@/components/organisms/KdpLoginMain'

export default {
  components: { KdpHeader, KdpLoginMain },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-areas: 'area-h . area-l-m .';
  grid-template-columns: 75px 1fr 300px 1fr;
  grid-gap: 0 15px;
  height: 100vh;
  margin-right: 15px;
}

.header {
  grid-area: area-h;
}

.loginMain {
  display: block;
  grid-area: area-l-m;
  margin: auto 0;
}
</style>
