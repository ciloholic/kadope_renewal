<template>
  <header :class="$style.header">
    <ul>
      <li v-for="(link, i) in getLinkAll" :key="i">
        <KdpIcon :class="$style.title" :to="link.to" :icon="link.icon" :title="link.title"></KdpIcon>
      </li>
    </ul>
    <div :class="$style.logo">KADOPE</div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpIcon from '@/components/atoms/KdpIcon'

export default {
  data: function() {
    return {}
  },
  computed: {
    ...mapGetters(['getLinkAll'])
  },
  components: { KdpIcon }
}
</script>

<style lang="scss" module>
.header {
  background: var(--base-background-sub);
  height: 100vh;
  position: relative;
}

.logo {
  color: var(--base-font-color-sub);
  padding: 2px 0 1px;
  font-weight: bold;
  font-size: 1.4rem;
  position: absolute;
  bottom: 54px;
  left: 0;
  right: 0;
  transform: rotate(270deg);
  letter-spacing: 0.5em;
  user-select: none;
  cursor: default;
}
</style>
