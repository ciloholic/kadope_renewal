<template>
  <div :class="$style.container">
    <KdpHeader :class="$style.header" />
    <div :class="$style.projectList">
      <KdpProjectList />
    </div>
    <div :class="$style.projectAssign">
      <KdpProjectAssign />
    </div>
  </div>
</template>

<script>
import KdpHeader from '@/components/molecules/KdpHeader'
import KdpProjectList from '@/components/organisms/KdpProjectList'
import KdpProjectAssign from '@/components/organisms/KdpProjectAssign'

export default {
  components: { KdpHeader, KdpProjectList, KdpProjectAssign },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-areas:
    'area-h . ........ ........ .'
    'area-h . area-p-l area-p-a .'
    'area-h . ........ ........ .';
  grid-template-rows: 15px 1fr 15px;
  grid-template-columns: 75px 1fr 700px 400px 1fr;
  grid-gap: 0 15px;
  height: 100vh;
  margin-right: 15px;
}

.header {
  grid-area: area-h;
}

.projectList {
  grid-area: area-p-l;
}

.projectAssign {
  grid-area: area-p-a;
}
</style>
