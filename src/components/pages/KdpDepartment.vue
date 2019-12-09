<template>
  <div :class="$style.container">
    <KdpHeader :class="$style.header" />
    <div :class="$style.departmentListAdmin">
      <KdpDepartmentListAdmin />
    </div>
    <div :class="$style.departmentMainAdmin">
      <KdpDepartmentMainAdmin />
    </div>
  </div>
</template>

<script>
import KdpHeader from '@/components/molecules/KdpHeader'
import KdpDepartmentListAdmin from '@/components/organisms/KdpDepartmentListAdmin'
import KdpDepartmentMainAdmin from '@/components/organisms/KdpDepartmentMainAdmin'

export default {
  components: { KdpHeader, KdpDepartmentListAdmin, KdpDepartmentMainAdmin },
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

.departmentListAdmin {
  grid-area: area-g-l-a;
}

.departmentMainAdmin {
  grid-area: area-g-m-a;
}
</style>
