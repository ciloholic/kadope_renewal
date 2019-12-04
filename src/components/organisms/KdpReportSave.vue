<template>
  <KdpFrame>
    <KdpH1 :class="$style.h1">保存したレポート</KdpH1>
    <ul :class="$style.items">
      <li v-for="item in saveReports" :key="item.id" :class="$style.item">{{ item.name }}</li>
    </ul>
  </KdpFrame>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpH1 from '@/components/atoms/KdpH1'

export default {
  components: { KdpH1, KdpFrame },
  computed: {
    ...mapGetters(['saveReports'])
  }
}
</script>

<style lang="scss" module>
.h1 {
  margin-bottom: 5px;
}

.items {
  list-style: none;
  user-select: none;
}

.item {
  font-size: 1.4rem;
}

.item + .item {
  border-top: dashed 1px var(--base-border-color-default);
}
</style>
