<template>
  <div :class="$style.dropdownList">
    <div :class="$style.mainTitle" @click="onClick">
      <font-awesome-icon :class="$style.icon" :icon="getIcon" size="sm" fixed-width />
      <div :class="$style.title">{{ title }}</div>
    </div>
    <ul :class="$style.tasks">
      <li :class="$style.task" v-for="task in tasks" :key="task.id" v-show="shown">
        <div :class="$style.taskName" :style="setStyle(task.project_id)">{{ task.taskName }}</div>
        <KdpEditButton :class="$style.editButton" />
      </li>
    </ul>
  </div>
</template>

<script>
import mixinColor from '@/mixins/color'
import KdpEditButton from '@/components/atoms/KdpEditButton'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    tasks: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      shown: true
    }
  },
  methods: {
    onClick() {
      this.shown = !this.shown
    },
    setStyle: function(seed) {
      return { '--target-background-color-hover': this.$_hsla(seed, 0.5) }
    }
  },
  computed: {
    getIcon: function() {
      return this.shown ? 'chevron-down' : 'chevron-right'
    }
  },
  components: { KdpEditButton },
  mixins: [mixinColor]
}
</script>

<style lang="scss" module>
.dropdownList {
  color: var(--base-font-color-default);
  font-size: 1.4rem;
  border-radius: 3px;
}

.mainTitle {
  position: relative;
  display: flex;
  align-items: center;

  & > .icon {
    margin: auto 2px;
  }

  & > .title {
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 2rem;
    word-break: break-all;
    user-select: none;
    min-height: 3rem;
    padding: 5px 0;
  }

  &:hover {
    background: var(--target-background-color-hover);
  }

  &:hover > .editButton {
    display: flex;
  }
}

.tasks {
  list-style: none;

  & > .task {
    position: relative;
    margin-top: 5px;

    &:hover > .editButton {
      display: flex;
    }
  }
}

.taskName {
  display: flex;
  align-items: flex-start;
  background: var(--base-background-light);
  font-size: 1.2rem;
  min-height: 3rem;
  padding: 5px;
  word-break: break-all;
  user-select: none;
  cursor: pointer;

  &:hover {
    background: var(--target-background-color-hover);
  }
}

.editButton {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
