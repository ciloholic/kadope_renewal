<template>
  <div :class="$style.dropdownList">
    <div :class="$style.mainTitle" @click="onDropdown">
      <font-awesome-icon :class="$style.icon" :icon="getIcon" size="sm" fixed-width />
      <div :class="$style.title">{{ title }}</div>
    </div>
    <ul :class="$style.tasks">
      <li v-for="task in tasks" v-show="dropdownShown" :key="task.id" :class="$style.task">
        <div :class="$style.taskName" :style="setStyle(task)">{{ task.taskName }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
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
  data() {
    return {
      dropdownShown: true
    }
  },
  computed: {
    getIcon() {
      return this.dropdownShown ? 'chevron-down' : 'chevron-right'
    }
  },
  methods: {
    onDropdown() {
      this.dropdownShown = !this.dropdownShown
    },
    setStyle: function(task) {
      return { '--target-background-color-hover': task.hsla }
    }
  }
}
</script>

<style lang="scss" module>
.dropdownList {
  color: var(--base-font-color-default);
  border-radius: 3px;
}

.mainTitle {
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    background: var(--target-background-color-hover);
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
  align-items: flex-start;
  min-height: 3rem;
  padding: 5px;
  font-size: 1.2rem;
  word-break: break-all;
  cursor: pointer;
  user-select: none;
  background: var(--base-background-light);

  &:hover {
    background: var(--target-background-color-hover);
  }
}
</style>
