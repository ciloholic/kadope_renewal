<template>
  <div>
    <KdpTitleHeader :class="$style.h1">レポート</KdpTitleHeader>
    <div :class="$style.report">
      <KdpTitleSubHeader>集計条件</KdpTitleSubHeader>
      <ul :class="$style.items">
        <li :class="$style.item">
          <span>開始日</span>
          <span>{{ reportInfo.start }}</span>
        </li>
        <li :class="$style.item">
          <span>終了日</span>
          <span>{{ reportInfo.end }}</span>
        </li>
        <template v-if="reportInfo.group != -1">
          <li :class="$style.item">
            <span>グループ</span>
            <span>{{ reportInfo.group }}</span>
          </li>
        </template>
        <template v-else>
          <li :class="$style.item">
            <span>プロジェクト</span>
            <span>{{ reportInfo.projectChecked }}</span>
          </li>
          <li :class="$style.item">
            <span>ユーザー</span>
            <span>{{ reportInfo.userChecked }}</span>
          </li>
        </template>
      </ul>
    </div>
    <div :class="$style.links">
      <span :class="$style.link">詳細を出力</span>
      <span :class="$style.link">このレポートを出力</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpTitleHeader from '@/components/atoms/KdpTitleHeader'
import KdpTitleSubHeader from '@/components/atoms/KdpTitleSubHeader'

export default {
  components: { KdpTitleHeader, KdpTitleSubHeader },
  computed: {
    ...mapGetters(['reportInfo'])
  }
}
</script>

<style lang="scss" module>
.h1 {
  margin-bottom: 5px;
}

.report {
  margin: 0 0 20px 0;
  background: rgba(0, 0, 0, 0.3);
  padding: 10px 15px 12px;
  border-radius: 3px;
}

.items {
  font-size: 1.4rem;
  list-style: none;
}

.item {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  border-bottom: 1px dashed;

  &:last-child {
    border-bottom: none;
  }
}

.links {
  display: flex;
  font-size: 1.4rem;
  justify-content: flex-end;
}

.link {
  font-weight: bold;
}

.link + .link {
  margin-left: 20px;
}
</style>
