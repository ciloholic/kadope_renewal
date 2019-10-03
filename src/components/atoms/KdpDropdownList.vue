<template>
  <div :class="$style.dropdownList">
    <div :class="[$style.title, { [$style.rotate]: this.isShown }]" :style="setStyle" @click="onClick(project)">
      {{ project.projectName }}
      <div :class="$style.editButton" />
    </div>
    <ul :class="$style.project">
      <li :class="$style.task" v-for="task in project.tasks" :key="task.id" v-show="task.isShown">
        <div :class="$style.taskName" :style="setStyle">{{ task.taskName }}</div>
        <div :class="$style.editButton" />
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import mixinColor from '@/mixins/color'

export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      isShown: false
    }
  },
  methods: {
    onClick(project) {
      this.isShown = !this.isShown
      this.$emit('click', project.id)
    }
  },
  computed: {
    setStyle: function() {
      return { '--target-background-color-hover': this.$_hsla(this.project.id, 0.5) }
    }
  },
  mixins: [mixinColor]
}
</script>

<style lang="scss" module>
.dropdownList {
  color: var(--base-font-color-default);
  font-size: 1.4rem;
  border-radius: 3px;
}

.title {
  position: relative;
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 2rem;
  word-break: break-all;
  user-select: none;
  min-height: 3rem;
  padding: 5px 0;

  &:before {
    content: ' ';
    display: inline-block;
    border: 4px solid transparent;
    border-right: 0;
    border-left: 6px solid var(--base-border-color-default);
    margin: 0 1px 1px 8px;
  }

  &.rotate:before {
    transform: rotate(90deg);
  }

  &:hover {
    background: var(--target-background-color-hover);
  }

  &:hover > .editButton {
    display: flex;
  }
}

.project {
  list-style: none;
}

.task {
  position: relative;
  margin-top: 5px;

  &:hover > .editButton {
    display: flex;
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
  background: var(--base-background-main);
  display: none;
  width: 2.4rem;
  font-size: 1rem;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 0 0 3px;
  cursor: default;

  &::before {
    display: block;
    content: 'edit';
    margin: auto;
    line-height: 1.3rem;
  }
}
</style>
