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
  methods: {
    onClick(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" module>
.container {
  margin-right: 15px;
  height: 100vh;
  display: grid;
  grid-gap: 0 15px;
  grid-template-rows: 15px 1fr 15px;
  grid-template-columns: 75px 1fr 800px 1fr;
  grid-template-areas:
    'area-s-h . .......... .'
    'area-s-h . area-u-a-m .'
    'area-s-h . .......... .';
}

.sideHeader {
  grid-area: area-s-h;
}

.userAdminMain {
  grid-area: area-u-a-m;
}
</style>
