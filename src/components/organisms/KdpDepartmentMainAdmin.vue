<template>
  <KdpFrame>
    <KdpH1 :class="$style.h1">新規グループの追加</KdpH1>
    <div :class="$style.block">
      <KdpH2 :class="$style.h2">グループ名</KdpH2>
      <KdpInput v-model="departmentName" :class="$style.input" type="text" placeholder="グループ名" />
    </div>
    <div :class="$style.block">
      <KdpH2 :class="$style.h2">プロジェクト</KdpH2>
      <KdpCheckboxList
        v-model="projectChecked"
        :class="$style.checkboxList"
        :items="projects"
        :checked="projectChecked"
      />
    </div>
    <div :class="$style.block">
      <KdpH2 :class="$style.h2">ユーザ</KdpH2>
      <KdpCheckboxList
        v-model="accountChecked"
        :class="$style.checkboxList"
        :items="accounts"
        :checked="accountChecked"
      />
    </div>
  </KdpFrame>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpInput from '@/components/atoms/KdpInput'
import KdpH1 from '@/components/atoms/KdpH1'
import KdpH2 from '@/components/atoms/KdpH2'
import KdpCheckboxList from '@/components/atoms/KdpCheckboxList'

export default {
  components: { KdpFrame, KdpH1, KdpH2, KdpInput, KdpCheckboxList },
  data() {
    return {
      departmentName: '',
      projectChecked: [],
      accountChecked: []
    }
  },
  computed: {
    ...mapGetters(['projects', 'accounts'])
  },
  methods: {
    onSaveClick() {
      console.log('save')
    },
    onSendClick() {
      console.log('send')
    }
  }
}
</script>

<style lang="scss" module>
.block + .block {
  margin-top: 10px;
}

.h1 {
  margin-bottom: 5px;
}

.h2 {
  margin-bottom: 10px;
}

.input {
  margin-bottom: 5px;
}
</style>
