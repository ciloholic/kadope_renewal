<template>
  <div :class="$style.dropdownList">
    <div :class="$style.title">{{ project.projectName }}</div>
    <ul :class="$style.project">
      <li v-for="task in project.tasks" :key="task.id">
        <div :class="$style.taskName">{{ task.taskName }}</div>
        <div :class="$style.editButton">editBtn</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {}
  }
}
</script>

<style lang="scss" module>
.dropdownList {
  color: var(--base-font-color-default);
  background: var(--base-background-main);
  font-size: 1.4rem;
  border-radius: 3px;
  padding: 5px 10px;
}

.title {
  font-size: 1.4rem;
}

.project {
  list-style: none;
}

.taskName {
  font-size: 0.5rem;
}

.editButton {
  font-size: 0.5rem;
}
</style>
