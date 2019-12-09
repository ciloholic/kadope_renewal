<template>
  <KdpFrame :class="$style.frame">
    <KdpH1>グループ一覧</KdpH1>
    <div v-for="(department, i) in departments" :key="department.id">
      <div :class="$style.department" @click="onToggleClick(i)">
        <font-awesome-icon :class="$style.icon" :icon="getIcon(i)" size="sm" fixed-width />
        <div :class="$style.name">{{ department.name }}</div>
      </div>
      <KdpList :class="$style.list" :items="department.accounts" :show="departmentShow[i]" />
    </div>
  </KdpFrame>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpH1 from '@/components/atoms/KdpH1'
import KdpList from '@/components/atoms/KdpList'

export default {
  components: { KdpList, KdpH1, KdpFrame },
  data() {
    return {
      departmentShow: []
    }
  },
  computed: {
    ...mapGetters(['departments'])
  },
  created() {
    this.departmentShow = new Array(this.departments.length).fill(true)
  },
  methods: {
    getIcon(i) {
      return this.departmentShow[i] ? 'chevron-down' : 'chevron-right'
    },
    onToggleClick(i) {
      this.$set(this.departmentShow, i, !this.departmentShow[i])
    }
  }
}
</script>

<style lang="scss" module>
.frame {
  display: flex;
  flex-direction: column;
}

.department {
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
