<template>
  <div ref="button" :class="$style.button" :data-project-id="projectId" :data-task-id="taskId" @click.stop="onClick">
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
      this.$emit('onClick', Object.assign({}, this.$refs.button.dataset))
    }
  }
}
</script>

<style lang="scss" module>
.button {
  background: var(--base-background-primary);
  display: none;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  border-radius: 3px;
  cursor: default;
}
</style>
