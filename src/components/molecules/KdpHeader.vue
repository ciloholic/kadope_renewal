<template>
  <header :class="$style.header">
    <ul>
      <li v-for="(link, i) in links" :key="i">
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
  components: { KdpLink, KdpLogo },
  computed: {
    ...mapGetters(['links'])
  }
}
</script>

<style lang="scss" module>
.header {
  position: relative;
  background: var(--base-background-secondary);
}

.logo {
  position: absolute;
}
</style>
