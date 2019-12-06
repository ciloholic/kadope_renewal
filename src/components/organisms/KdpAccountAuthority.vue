<template>
  <KdpFrame>
    <KdpH1 :class="$style.h1">アカウント権限設定</KdpH1>
    <ul :class="$style.accounts">
      <li v-for="account in accounts" :key="account.id" :class="$style.account">
        <div :class="$style.name">{{ account.name }}</div>
        <div :class="$style.email">{{ account.email }}</div>
        <KdpSwitch
          :value="account.authority"
          :class="$style.switch"
          :labels="labels"
          @onClick="onSwitchClick(account.id, $event)"
        />
      </li>
    </ul>
  </KdpFrame>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpSwitch from '@/components/atoms/KdpSwitch'
import KdpH1 from '@/components/atoms/KdpH1'

export default {
  components: { KdpFrame, KdpH1, KdpSwitch },
  data() {
    return {
      labels: [
        { id: 1, name: '管理者' },
        { id: 2, name: 'マネージャー' },
        { id: 3, name: 'メンバー' }
      ]
    }
  },
  computed: {
    ...mapGetters(['accounts'])
  },
  methods: {
    ...mapMutations(['account_UPDATE']),
    onSwitchClick(accountId, authorityId) {
      this.account_UPDATE({ accountId: accountId, authority: authorityId })
    }
  }
}
</script>

<style lang="scss" module>
.h1 {
  margin-bottom: 10px;
}

.accounts {
  list-style: none;
}

.account {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  height: 35px;
  margin-top: 5px;
  background: var(--base-background-light);
}

.name,
.email,
.switch {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 5px;
  word-break: break-all;
  cursor: pointer;
  user-select: none;
}
</style>
