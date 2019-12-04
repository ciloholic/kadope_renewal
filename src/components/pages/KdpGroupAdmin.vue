<template>
  <div :class="$style.container">
    <KdpHeader :class="$style.header" />
    <div :class="$style.groupListAdmin">
      <KdpGroupListAdmin />
    </div>
    <div :class="$style.groupMainAdmin">
      <KdpGroupMainAdmin />
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import KdpHeader from '@/components/molecules/KdpHeader'
import KdpGroupListAdmin from '@/components/organisms/KdpGroupListAdmin'
import KdpGroupMainAdmin from '@/components/organisms/KdpGroupMainAdmin'

export default {
  components: { KdpHeader, KdpGroupListAdmin, KdpGroupMainAdmin },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-areas:
    'area-s-h . .......... .......... .'
    'area-s-h . area-g-l-a area-g-m-a .'
    'area-s-h . .......... .......... .';
  grid-template-rows: 15px 1fr 15px;
  grid-template-columns: 75px 1fr 300px 700px 1fr;
  grid-gap: 0 15px;
  height: 100vh;
  margin-right: 15px;
}

.header {
  grid-area: area-s-h;
}

.groupListAdmin {
  grid-area: area-g-l-a;
}

.groupMainAdmin {
  grid-area: area-g-m-a;
}
</style>
