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
import KdpLink from '@/components/atoms/KdpLink'
import KdpLogo from '@/components/atoms/KdpLogo'

export default {
  components: { KdpLink, KdpLogo },
  data() {
    return {
      links: [
        { to: 'KdpCalendarInput', icon: 'calendar-alt', title: '稼働入力' },
        { to: 'KdpCalendarShow', icon: 'search', title: '稼働閲覧' },
        { to: 'KdpAggregateReport', icon: 'chart-bar', title: 'レポート' },
        { to: 'KdpDailyReport', icon: 'envelope', title: '日報' },
        { to: 'KdpDepartment', icon: 'users', title: 'グループ' },
        { to: 'KdpAccount', icon: 'users-cog', title: 'アカウント' },
        { to: 'KdpProject', icon: 'folder-open', title: 'プロジェクト' },
        { to: 'KdpSetting', icon: 'tools', title: '個人設定' },
        { to: 'KdpLogout', icon: 'sign-out-alt', title: 'ログアウト' }
      ]
    }
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
