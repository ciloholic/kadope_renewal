<template>
  <div :class="$style.calendarProject">
    <div :class="$style.titleGroup" :style="setStyle" @click="onToggleClick">
      <font-awesome-icon :class="$style.icon" :icon="getIcon" size="sm" fixed-width />
      <div :class="$style.title">{{ project.name }}</div>
      <KdpToolButton
        :class="[$style.pinButton, $style.projectPin]"
        :project-id="project.id"
        :pinned="project.pin"
        icon="map-pin"
        @onClick="onProjectPinClick"
      />
      <KdpToolButton :class="$style.addButton" :project-id="project.id" icon="plus" @onClick="onProjectAddClick" />
      <KdpToolButton
        :class="$style.editButton"
        :project-id="project.id"
        icon="ellipsis-h"
        @onClick="onProjectEditClick"
      />
    </div>
    <ul :class="$style.tasks">
      <li v-for="task in project.tasks" v-show="hiddenTask(show, task.name)" :key="task.id" :class="$style.task">
        <div :class="$style.taskName" :style="setStyle">
          {{ task.name }}
          <KdpToolButton
            :class="[$style.pinButton, $style.taskPin, { [$style.onPin]: task.pin }]"
            :project-id="project.id"
            :task-id="task.id"
            icon="map-pin"
            @onClick="onTaskPinClick"
          />
          <KdpToolButton :class="$style.editButton" icon="ellipsis-h" @onClick="onTaskEditClick" />
        </div>
      </li>
    </ul>
    <KdpModal v-show="modal.projectShow" @onCloseClick="onProjectCloseClick">
      <p>project</p>
    </KdpModal>
    <KdpModal v-show="modal.taskShow" @onCloseClick="onTaskCloseClick">
      <p>task</p>
    </KdpModal>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import mixinColor from '@/mixins/color'
import KdpToolButton from '@/components/atoms/KdpToolButton'
import KdpModal from '@/components/atoms/KdpModal'

export default {
  components: { KdpToolButton, KdpModal },
  mixins: [mixinColor],
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
  data() {
    return {
      show: false,
      modal: {
        projectShow: false,
        taskShow: false
      }
    }
  },
  computed: {
    setStyle() {
      return { '--target-background-color-hover': this.project.hsla }
    },
    getIcon() {
      return this.show ? 'chevron-down' : 'chevron-right'
    }
  },
  methods: {
    ...mapMutations(['PROJECT_PIN_TOGGLE_BY_ID', 'TASK_PIN_TOGGLE_BY_ID']),
    hiddenTask(show, taskName) {
      if (this.search) {
        return taskName.indexOf(this.search) !== -1
      }
      return show
    },
    onToggleClick() {
      this.show = !this.show
    },
    onProjectPinClick(e) {
      this.PROJECT_PIN_TOGGLE_BY_ID(e['projectId'])
    },
    onProjectAddClick() {
      console.log('onProjectAddClick')
    },
    onProjectEditClick() {
      this.modal.projectShow = !this.modal.projectShow
    },
    onTaskPinClick(e) {
      this.TASK_PIN_TOGGLE_BY_ID(e)
    },
    onTaskAddClick() {
      console.log('onTaskAddClick')
    },
    onTaskEditClick() {
      this.modal.taskShow = !this.modal.taskShow
    },
    onProjectCloseClick() {
      this.modal.projectShow = !this.modal.projectShow
    },
    onTaskCloseClick() {
      this.modal.taskShow = !this.modal.taskShow
    }
  }
}
</script>

<style lang="scss" module>
.calendarProject {
  font-size: 1.6rem;
  color: var(--base-font-color-default);
  border-radius: 3px;
}

.titleGroup {
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    background: var(--target-background-color-hover);

    > .pinButton,
    > .addButton,
    > .editButton {
      display: flex;
    }
  }
}

.icon {
  margin: auto 2px;
}

.title {
  min-height: 3rem;
  padding: 5px 0;
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 2rem;
  word-break: break-all;
  user-select: none;
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
  min-height: 3rem;
  padding: 5px;
  font-size: 1.2rem;
  word-break: break-all;
  cursor: pointer;
  user-select: none;
  background: var(--base-background-light);

  &:hover {
    background: var(--target-background-color-hover);

    > .pinButton,
    > .addButton,
    > .editButton {
      display: flex;
    }
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

  &[pinned] {
    color: var(--base-font-color-primary);
    background: var(--base-background-secondary);
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
