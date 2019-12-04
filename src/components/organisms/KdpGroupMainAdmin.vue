<template>
  <KdpFrame>
    <KdpTitleHeader :class="$style.h1">新規グループの追加</KdpTitleHeader>
    <div :class="$style.block">
      <KdpTitleSubHeader :class="$style.h2">グループ名</KdpTitleSubHeader>
      <KdpInput v-model="groupName" :class="$style.input" type="text" placeholder="グループ名" />
    </div>
    <div :class="$style.block">
      <KdpTitleSubHeader :class="$style.h2">プロジェクト</KdpTitleSubHeader>
      <KdpCheckboxList
        v-model="projectChecked"
        :class="$style.checkboxList"
        :items="_projects"
        :checked="projectChecked"
      />
    </div>
    <div :class="$style.block">
      <KdpTitleSubHeader :class="$style.h2">ユーザ</KdpTitleSubHeader>
      <KdpCheckboxList v-model="userChecked" :class="$style.checkboxList" :items="_users" :checked="userChecked" />
    </div>
  </KdpFrame>
</template>

<script>
import { mapGetters } from 'vuex'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpInput from '@/components/atoms/KdpInput'
import KdpTitleHeader from '@/components/atoms/KdpTitleHeader'
import KdpTitleSubHeader from '@/components/atoms/KdpTitleSubHeader'
import KdpCheckboxList from '@/components/atoms/KdpCheckboxList'

export default {
  components: { KdpFrame, KdpTitleHeader, KdpTitleSubHeader, KdpInput, KdpCheckboxList },
  data() {
    return {
      groupName: '',
      projectChecked: [],
      userChecked: []
    }
  },
  computed: {
    ...mapGetters(['projects', 'users']),
    _projects() {
      return this.projects.map(x => {
        const tasks = x.tasks.map(y => {
          return { ...y, name: y.taskName }
        })
        return {
          ...x,
          name: x.projectName,
          tasks: tasks
        }
      })
    },
    _users() {
      return this.users.map(x => {
        return { id: x.id, name: x.userName }
      })
    }
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
