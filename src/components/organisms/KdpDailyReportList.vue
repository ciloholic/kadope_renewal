<template>
  <KdpFrame>
    <KdpH1 :class="$style.h1">過去の日報</KdpH1>
    <ul :class="$style.items">
      <li v-for="item in _dailyReports" :key="item.id" :class="$style.item">
        <div :class="$style.status" :data-completed="item.completed">{{ statusText(item.completed) }}</div>
        <div>{{ item.title }}</div>
        <div :class="$style.total">{{ item.total | $_formatMinute() }}</div>
      </li>
    </ul>
  </KdpFrame>
</template>

<script>
import { mapGetters } from 'vuex'
import mixinMoment from '@/mixins/moment'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpH1 from '@/components/atoms/KdpH1'

export default {
  components: { KdpFrame, KdpH1 },
  mixins: [mixinMoment],
  computed: {
    ...mapGetters(['dailyReports']),
    _dailyReports() {
      return this.dailyReports.map(x => {
        return {
          ...x,
          datetime: this.moment(x.datetime, 'YYYY-MM-DD')
        }
      })
    }
  },
  methods: {
    statusText(completed) {
      return completed ? '【済】' : '【未】'
    }
  }
}
</script>

<style lang="scss" module>
.h1 {
  margin-bottom: 5px;
}

.items {
  list-style: none;
  cursor: pointer;
  user-select: none;
}

.item {
  display: flex;
  font-size: 1.4rem;
}

.status {
  color: #f54;
}

.status[data-completed] {
  color: #4c2;
}

.total {
  margin: 0 5px 0 auto;
}

.item + .item {
  border-top: dashed 1px var(--base-border-color-default);
}
</style>
