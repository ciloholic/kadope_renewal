<template>
  <KdpFrame>
    <KdpTitleHeader :class="$style.h1">
      <span :class="$style.status" :data-completed="item.completed">{{ statusText(item.completed) }}</span>
      <span>{{ item.datetime | $_formatMoment('YYYY-MM-DD') }} の日報</span>
    </KdpTitleHeader>
    <KdpTable :items="reports" />
    <KdpTitleSubHeader :class="$style.h2">件名</KdpTitleSubHeader>
    <p :class="$style.title">{{ item.title }}</p>
    <KdpTitleSubHeader :class="$style.h2">所感</KdpTitleSubHeader>
    <textarea v-model="item.body" :class="$style.textarea" />
    <div :class="$style.buttonGroup">
      <KdpButton :class="$style.button" @onClick="onSaveClick">保存</KdpButton>
      <KdpButton :class="$style.button" @onClick="onSendClick">送信</KdpButton>
    </div>
  </KdpFrame>
</template>

<script>
import mixinMoment from '@/mixins/moment'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpButton from '@/components/atoms/KdpButton'
import KdpTitleHeader from '@/components/atoms/KdpTitleHeader'
import KdpTitleSubHeader from '@/components/atoms/KdpTitleSubHeader'
import KdpTable from '@/components/atoms/KdpTable'

export default {
  components: { KdpFrame, KdpTitleHeader, KdpTitleSubHeader, KdpTable, KdpButton },
  mixins: [mixinMoment],
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    reports: {
      type: Array,
      required: true
    }
  },
  methods: {
    onSaveClick() {
      console.log('save')
    },
    onSendClick() {
      console.log('send')
    },
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

.h2 {
  margin-bottom: 10px;
}

.status {
  color: #ff5544;

  &[data-completed] {
    color: #44cc22;
  }
}

.title {
  height: 30px;
  margin-bottom: 5px;
}

.textarea {
  color: var(--base-font-color-default);
  background: var(--base-background-primary);
  width: 100%;
  height: 200px;
  resize: none;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
}

.buttonGroup {
  display: flex;
  justify-content: space-around;
}

.button {
  display: flex;
  width: 330px;
  height: 30px;
}
</style>
