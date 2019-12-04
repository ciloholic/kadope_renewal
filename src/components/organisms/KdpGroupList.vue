<template>
  <KdpFrame :class="$style.frame">
    <KdpTitleHeader>グループ一覧</KdpTitleHeader>
    <div v-for="(group, i) in groups" :key="group.id">
      <div :class="$style.group" @click="onToggleClick(i)">
        <font-awesome-icon :class="$style.icon" :icon="getIcon(i)" size="sm" fixed-width />
        <div :class="$style.name">{{ group.name }}</div>
      </div>
      <KdpList :class="$style.list" :items="group.users" :shown="groupShown[i]" />
    </div>
  </KdpFrame>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpTitleHeader from '@/components/atoms/KdpTitleHeader'
import KdpList from '@/components/atoms/KdpList'

export default {
  components: { KdpList, KdpTitleHeader, KdpFrame },
  data() {
    return {
      groupShown: []
    }
  },
  computed: {
    ...mapGetters(['groups'])
  },
  created() {
    this.groupShown = new Array(this.groups.length).fill(true)
  },
  methods: {
    getIcon(i) {
      return this.groupShown[i] ? 'chevron-down' : 'chevron-right'
    },
    onToggleClick(i) {
      this.$set(this.groupShown, i, !this.groupShown[i])
    }
  }
}
</script>

<style lang="scss" module>
.frame {
  display: flex;
  flex-direction: column;
}

.group {
  position: relative;
  display: flex;
  align-items: center;
}

.icon {
  margin: auto 2px;
}

.name {
  min-height: 3rem;
  padding: 5px 0;
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 2rem;
  word-break: break-all;
  user-select: none;
}

.list {
  max-width: 230px;
  margin-top: 5px;
}

.list + .list {
  margin-top: 5px;
}
</style>
