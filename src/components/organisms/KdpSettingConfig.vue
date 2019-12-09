<template>
  <KdpFrame>
    <KdpH1 :class="$style.h1">稼働カレンダー設定</KdpH1>
    <div :class="$style.row">
      <span :class="$style.label">土日非表示</span>
      <KdpSwitch :value="weekend" :class="$style.switch" :labels="labels" @onClick="onSwitchClick('weekend', $event)" />
    </div>
    <div :class="$style.row">
      <span :class="$style.label">タスク詳細表示</span>
      <KdpSwitch
        :value="detailInfo"
        :class="$style.switch"
        :labels="labels"
        @onClick="onSwitchClick('detailInfo', $event)"
      />
    </div>
  </KdpFrame>
</template>

<script>
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpH1 from '@/components/atoms/KdpH1'
import KdpSwitch from '@/components/atoms/KdpSwitch'

export default {
  components: { KdpFrame, KdpH1, KdpSwitch },
  data() {
    return {
      labels: [
        { id: 1, name: '表示' },
        { id: 2, name: '非表示' }
      ],
      weekend: 1,
      detailInfo: 1
    }
  },
  computed: {},
  methods: {
    onSwitchClick(projectId, labelId) {
      console.log(projectId)
      console.log(labelId)
    }
  }
}
</script>

<style lang="scss" module>
.h1 {
  margin-bottom: 10px;
}

.row {
  display: flex;
  align-items: center;
  height: 30px;
  user-select: none;
}

.label {
  position: relative;
  width: 190px;

  &::after {
    position: absolute;
    right: 0;
    content: '：';
  }
}

.switch {
  width: 100%;
  height: 22px;
}
</style>
