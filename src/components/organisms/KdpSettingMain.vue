<template>
  <div>
    <KdpFrame :class="$style.frame">
      <KdpH1 :class="$style.h1">プロフィール設定</KdpH1>
      <div :class="$style.block">
        <KdpH2 :class="$style.h2">表示名：</KdpH2>
        <KdpInput v-model="displayName" :class="$style.input" type="text" />
      </div>
    </KdpFrame>
    <KdpFrame :class="$style.frame">
      <KdpH1 :class="$style.h1">日報設定</KdpH1>
      <div :class="$style.block">
        <KdpH2 :class="$style.h2">件名の接頭辞：</KdpH2>
        <KdpInput v-model="subject" :class="$style.input" type="text" />
      </div>
      <div :class="$style.block">
        <KdpH2 :class="$style.h2">To：</KdpH2>
        <KdpInput v-model="to" :class="$style.input" type="text" />
      </div>
      <div :class="$style.block">
        <KdpH2 :class="$style.h2">Cc：</KdpH2>
        <KdpInput v-model="cc" :class="$style.input" type="text" />
      </div>
      <div :class="$style.block">
        <KdpH2 :class="$style.h2">Bcc：</KdpH2>
        <KdpInput v-model="bcc" :class="$style.input" type="text" />
      </div>
      <div :class="$style.block">
        <KdpH2 :class="$style.h2">所感テンプレート：</KdpH2>
        <KdpTextarea v-model="template" :class="$style.textarea" />
      </div>
    </KdpFrame>
  </div>
</template>

<script>
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpH1 from '@/components/atoms/KdpH1'
import KdpH2 from '@/components/atoms/KdpH2'
import KdpInput from '@/components/atoms/KdpInput'
import KdpTextarea from '@/components/atoms/KdpTextarea'

export default {
  components: { KdpFrame, KdpH1, KdpH2, KdpInput, KdpTextarea },
  data() {
    return {
      displayName: '',
      subject: '',
      to: '',
      cc: '',
      bcc: '',
      template: ''
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
.frame + .frame {
  margin-top: 10px;
}

.block + .block {
  margin-top: 5px;
}

.h1 {
  margin-bottom: 10px;
}

.h2 {
  margin-bottom: 5px;
}

.textarea {
  height: 150px;
}
</style>
