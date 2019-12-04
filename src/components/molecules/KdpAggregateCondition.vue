<template>
  <div>
    <KdpH1 :class="$style.h1">レポート</KdpH1>
    <div :class="$style.report">
      <KdpH2>集計条件</KdpH2>
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
import KdpH1 from '@/components/atoms/KdpH1'
import KdpH2 from '@/components/atoms/KdpH2'

export default {
  components: { KdpH1, KdpH2 },
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
  padding: 10px 15px 12px;
  margin: 0 0 20px 0;
  background: rgba(0, 0, 0, 0.3);
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
  justify-content: flex-end;
  font-size: 1.4rem;
}

.link {
  font-weight: bold;
}

.link + .link {
  margin-left: 20px;
}
</style>
