<template>
  <header :class="$style.header">
    <ul>
      <li v-for="(link, i) in links" :key="i">
        <KdpLinkIcon :class="$style.title" :to="link.to" :icon="link.icon" :title="link.title"></KdpLinkIcon>
      </li>
    </ul>
    <div :class="$style.logo">KADOPE</div>
  </header>
</template>

<script>
import KdpLinkIcon from '@/components/atoms/KdpLinkIcon'

export default {
  name: 'KdpHeader',
  data: function() {
    return {
      links: [
        { to: 'KdpTop', icon: 'calendar-alt', title: '稼働入力' },
        { to: 'KdpTop', icon: 'chart-bar', title: 'レポート' },
        { to: 'KdpTop', icon: 'envelope', title: '日報送信' },
        { to: 'KdpTop', icon: 'tools', title: '設定' }
      ]
    }
  },
  components: { KdpLinkIcon }
}
</script>

<style lang="scss" module>
.header {
  background: #fd0;
  height: 100vh;
  position: relative;

  .logo {
    color: #332a25;
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
}
</style>
