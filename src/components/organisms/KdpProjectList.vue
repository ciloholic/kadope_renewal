<template>
  <KdpFrame>
    <KdpH1 :class="$style.h1">プロジェクト一覧</KdpH1>
    <ul :class="$style.projects">
      <li :class="[$style.project, $style.input]">
        <div :class="$style.color" :style="setStyle" @click="onNewToggleClick">
          <chrome-picker v-show="newProject.show" v-model="newProject.color" />
        </div>
        <KdpInput v-model="newProject.name" :class="$style.input" type="text" />
        <KdpButton :class="$style.button" @onClick="onSaveClick(project.id, $event)">保存</KdpButton>
      </li>
      <li v-for="project in projects" :key="project.id" :class="$style.project">
        <div :class="$style.color" :style="setStyle"></div>
        <div :class="$style.name">{{ project.name }}</div>
        <KdpSwitch
          :value="project.display"
          :class="$style.switch"
          :labels="labels"
          @onClick="onSwitchClick(project.id, $event)"
        />
        <KdpButton :class="$style.button" @onClick="onEditClick(project.id, $event)">編集</KdpButton>
      </li>
    </ul>
  </KdpFrame>
</template>

<script>
import { mapGetters } from 'vuex'
import mixinColor from '@/mixins/color'
import KdpFrame from '@/components/atoms/KdpFrame'
import KdpSwitch from '@/components/atoms/KdpSwitch'
import KdpH1 from '@/components/atoms/KdpH1'
import KdpButton from '@/components/atoms/KdpButton'
import KdpInput from '@/components/atoms/KdpInput'

export default {
  components: { KdpFrame, KdpH1, KdpSwitch, KdpButton, KdpInput },
  mixins: [mixinColor],
  data() {
    return {
      labels: [
        { id: 1, name: '表示' },
        { id: 2, name: '非表示' }
      ],
      newProject: {
        name: '',
        color: { hsl: { h: this.moment().unix() % 360, s: 1, l: 0.8, a: 1 } },
        display: 1,
        show: false
      }
    }
  },
  computed: {
    ...mapGetters(['projects']),
    setStyle() {
      const h = Math.floor(this.newProject.color.hsl.h)
      const s = Math.floor(this.newProject.color.hsl.s * 100)
      const l = Math.floor(this.newProject.color.hsl.l * 100)
      const a = this.newProject.color.hsl.a
      return { '--background-color': `hsla(${h}, ${s}%, ${l}%, ${a})` }
    }
  },
  methods: {
    onNewToggleClick() {
      this.newProject.show = !this.newProject.show
    },
    onSaveClick(e) {
      console.log(e)
    },
    onEditClick(e) {
      console.log(e)
    },
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

.projects {
  list-style: none;
}

.project {
  display: grid;
  grid-template-areas: '. area-c . area-n . area-s . area-b .';
  grid-template-columns: 5px 30px 5px 5fr 5px 2fr 5px 1fr 5px;
  height: 36px;
  margin-top: 5px;
  background: var(--base-background-light);

  > .name,
  > .switch,
  > .button {
    display: flex;
    align-items: center;
    margin: auto 0;
    word-break: break-all;
    cursor: pointer;
    user-select: none;
  }

  > .switch,
  > .button {
    height: 25px;
  }

  > .name {
    grid-area: area-n;
  }

  > .switch {
    grid-area: area-s;
  }

  > .button {
    grid-area: area-b;
  }
}

.input {
  grid-template-areas: '. area-c . area-i . area-b .';
  grid-template-columns: 5px 30px 5px 7fr 5px 1fr 5px;

  > .color {
    grid-area: area-c;
    width: 26px;
    height: 26px;
    margin: auto;
    background: var(--background-color);
    border-radius: 3px;
  }

  > .input {
    grid-area: area-i;
    height: 26px;
    margin: auto;
  }
}
</style>
