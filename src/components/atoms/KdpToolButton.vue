<template>
  <div
    ref="toolButton"
    :class="$style.toolButton"
    :data-project-id="projectId"
    :data-task-id="taskId"
    @click.stop="onClick"
  >
    <font-awesome-icon :icon="icon" size="sm" fixed-width />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    projectId: {
      type: Number,
      default: 0
    },
    taskId: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick', Object.assign({}, this.$refs.toolButton.dataset))
    }
  }
}
</script>

<style lang="scss" module>
.toolButton {
  display: none;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  cursor: default;
  background: var(--base-background-primary);
  border-radius: 3px;
}
</style>
