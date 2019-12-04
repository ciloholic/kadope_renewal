<template>
  <KdpFrame>
    <KdpTitleHeader :class="$style.h1">ユーザ権限設定</KdpTitleHeader>
    <ul :class="$style.users">
      <li v-for="user in _users" :key="user.id" :class="$style.user">
        <div :class="$style.name">{{ user.name }}</div>
        <div :class="$style.email">{{ user.email }}</div>
        <KdpSwitch
          :value="user.authority"
          :class="$style.switch"
          :labels="labels"
          @onClick="onSwitchClick(user.id, $event)"
        />
      </li>
    </ul>
  </KdpFrame>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpSwitch from '@/components/atoms/KdpSwitch'
import KdpTitleHeader from '@/components/atoms/KdpTitleHeader'

export default {
  components: { KdpFrame, KdpTitleHeader, KdpSwitch },
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
    ...mapGetters(['users']),
    _users() {
      return this.users.map(x => {
        return { ...x, name: x.userName }
      })
    }
  },
  methods: {
    ...mapMutations(['USER_UPDATE']),
    onSwitchClick(userId, authorityId) {
      this.USER_UPDATE({ userId: userId, authority: authorityId })
    }
  }
}
</script>

<style lang="scss" module>
.h1 {
  margin-bottom: 10px;
}

.users {
  list-style: none;
}

.user {
  background: var(--base-background-light);
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  height: 35px;
  margin-top: 5px;
}

.name,
.email,
.switch {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 5px;
  word-break: break-all;
  user-select: none;
  cursor: pointer;
}
</style>
