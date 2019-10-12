<template>
  <div :class="$style.dropdownList">
    <div :class="$style.mainTitle" @click="onDropdown" :style="setStyle">
      <font-awesome-icon :class="$style.icon" :icon="getIcon" size="sm" fixed-width />
      <div :class="$style.title">{{ project.projectName }}</div>
      <KdpButton
        :class="[$style.pinButton, $style.projectPin, { [$style.onPin]: project.pin }]"
        icon="map-pin"
        :projectId="project.id"
        @onClick="onProjectPinClick"
      />
      <KdpButton :class="$style.addButton" icon="plus" :projectId="project.id" @onClick="onProjectAddClick" />
      <KdpButton :class="$style.editButton" icon="ellipsis-h" :projectId="project.id" @onClick="onProjectEditClick" />
    </div>
    <ul :class="$style.tasks">
      <li :class="$style.task" v-for="task in project.tasks" :key="task.id" v-show="dropdownShown">
        <div :class="$style.taskName" :style="setStyle">
          {{ task.taskName }}
          <KdpButton
            :class="[$style.pinButton, $style.taskPin, { [$style.onPin]: task.pin }]"
            icon="map-pin"
            :projectId="project.id"
            :taskId="task.id"
            @onClick="onTaskPinClick"
          />
          <KdpButton :class="$style.editButton" icon="ellipsis-h" @onClick="onTaskEditClick" />
        </div>
      </li>
    </ul>
    <KdpModal v-show="projectModalShown" @onCloseClick="onProjectCloseClick">
      <p>project</p>
    </KdpModal>
    <KdpModal v-show="taskModalShown" @onCloseClick="onTaskCloseClick">
      <p>task</p>
    </KdpModal>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import mixinColor from '@/mixins/color'
import KdpButton from '@/components/atoms/KdpButton'
import KdpModal from '@/components/atoms/KdpModal'

export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      dropdownShown: false,
      projectModalShown: false,
      taskModalShown: false
    }
  },
  methods: {
    ...mapMutations(['PROJECT_PIN_TOGGLE_BY_ID', 'TASK_PIN_TOGGLE_BY_ID']),
    onDropdown() {
      this.dropdownShown = !this.dropdownShown
    },
    onProjectPinClick(e) {
      this.PROJECT_PIN_TOGGLE_BY_ID(e['projectId'])
    },
    onProjectAddClick() {
      console.log('onProjectAddClick')
    },
    onProjectEditClick() {
      this.projectModalShown = !this.projectModalShown
    },
    onTaskPinClick(e) {
      this.TASK_PIN_TOGGLE_BY_ID(e)
    },
    onTaskAddClick() {
      console.log('onTaskAddClick')
    },
    onTaskEditClick() {
      this.taskModalShown = !this.taskModalShown
    },
    onProjectCloseClick() {
      this.projectModalShown = !this.projectModalShown
    },
    onTaskCloseClick() {
      this.taskModalShown = !this.taskModalShown
    }
  },
  computed: {
    setStyle: function() {
      return { '--target-background-color-hover': this.$_hsla(this.project.id, 0.5) }
    },
    getIcon: function() {
      return this.dropdownShown ? 'chevron-down' : 'chevron-right'
    }
  },
  components: { KdpButton, KdpModal },
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

  &:hover {
    background: var(--target-background-color-hover);
  }

  &:hover > .pinButton,
  &:hover > .addButton,
  &:hover > .editButton {
    display: flex;
  }
}

.icon {
  margin: auto 2px;
}

.title {
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 2rem;
  word-break: break-all;
  user-select: none;
  min-height: 3rem;
  padding: 5px 0;
}

.tasks {
  list-style: none;
}

.task {
  position: relative;
  margin-top: 5px;
}

.taskName {
  display: flex;
  align-items: center;
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

  &:hover > .pinButton,
  &:hover > .addButton,
  &:hover > .editButton {
    display: flex;
  }
}

.pinButton {
  position: absolute;

  &.projectPin {
    right: 45px;
  }

  &.taskPin {
    right: 25px;
  }

  &.onPin {
    background: var(--base-background-secondary);
    color: var(--base-font-color-primary);
  }
}

.addButton {
  position: absolute;
  right: 25px;
}

.editButton {
  position: absolute;
  right: 5px;
}
</style>
