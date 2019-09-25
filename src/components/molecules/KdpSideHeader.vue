<template>
  <header :class="$style.header">
    <ul>
      <li v-for="(link, i) in getLinkAll" :key="i">
        <KdpLink :to="link.to" :icon="link.icon" :title="link.title" />
      </li>
    </ul>
    <KdpLogo :class="$style.logo">KADOPE</KdpLogo>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpLink from '@/components/atoms/KdpLink'
import KdpLogo from '@/components/atoms/KdpLogo'

export default {
  computed: {
    ...mapGetters(['getLinkAll'])
  },
  components: { KdpLink, KdpLogo }
}
</script>

<style lang="scss" module>
.header {
  background: var(--base-background-sub);
  position: relative;
}

.logo {
  position: absolute;
}
</style>
