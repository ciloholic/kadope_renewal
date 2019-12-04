<template>
  <div :class="$style.container">
    <KdpSideHeader :class="$style.sideHeader" />
    <div :class="$style.userAdminMain">
      <KdpUserAdminMain />
    </div>
  </div>
</template>

<script>
import KdpSideHeader from '@/components/molecules/KdpSideHeader'
import KdpUserAdminMain from '@/components/organisms/KdpUserAdminMain'

export default {
  components: { KdpSideHeader, KdpUserAdminMain },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-areas:
    'area-s-h . .......... .'
    'area-s-h . area-u-a-m .'
    'area-s-h . .......... .';
  grid-template-rows: 15px 1fr 15px;
  grid-template-columns: 75px 1fr 800px 1fr;
  grid-gap: 0 15px;
  height: 100vh;
  margin-right: 15px;
}

.sideHeader {
  grid-area: area-s-h;
}

.userAdminMain {
  grid-area: area-u-a-m;
}
</style>
