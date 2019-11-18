<template>
  <div :class="$style.dropdownList">
    <!-- main title -->
    <div :class="$style.mainTitle" @click="onDropdown" :style="setStyle">
      <font-awesome-icon :class="$style.icon" :icon="getIcon" size="sm" fixed-width />
      <div :class="$style.title">{{ project.projectName }}</div>
      <KdpButton
        :class="[$style.pinButton, $style.projectPin, { [$style.onPin]: project.pin }]"
        :projectId="project.id"
        @onClick="onProjectPinClick"
        icon="map-pin"
      />
      <KdpButton :class="$style.addButton" :projectId="project.id" @onClick="onProjectAddClick" icon="plus" />
      <KdpButton :class="$style.editButton" :projectId="project.id" @onClick="onProjectEditClick" icon="ellipsis-h" />
    </div>
    <!-- tasks -->
    <ul :class="$style.tasks">
      <li
        :class="$style.task"
        v-for="task in project.tasks"
        :key="task.id"
        v-show="hiddenTask(dropdownShown, task.taskName)"
      >
        <!-- task name -->
        <div :class="$style.taskName" :style="setStyle">
          {{ task.taskName }}
          <!-- pin button -->
          <KdpButton
            :class="[$style.pinButton, $style.taskPin, { [$style.onPin]: task.pin }]"
            :projectId="project.id"
            :taskId="task.id"
            @onClick="onTaskPinClick"
            icon="map-pin"
          />
          <!-- edit button -->
          <KdpButton :class="$style.editButton" @onClick="onTaskEditClick" icon="ellipsis-h" />
        </div>
      </li>
    </ul>
    <!-- project modal -->
    <KdpModal v-show="projectModalShown" @onCloseClick="onProjectCloseClick">
      <p>project</p>
    </KdpModal>
    <!-- task modal -->
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
    },
    search: {
      type: String,
      default: ''
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
    hiddenTask(dropdownShown, taskName) {
      if (this.search) {
        return taskName.indexOf(this.search) !== -1
      }
      return dropdownShown
    },
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
    setStyle() {
      return { '--target-background-color-hover': this.project.hsla }
    },
    getIcon() {
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
