<template>
  <div :class="$style.dropdownList">
    <div :class="$style.mainTitle" @click="onDropdown">
      <font-awesome-icon :class="$style.icon" :icon="getIcon" size="sm" fixed-width />
      <div :class="$style.title">{{ title }}</div>
    </div>
    <ul :class="$style.tasks">
      <li :class="$style.task" v-for="task in tasks" :key="task.id" v-show="dropdownShown">
        <div :class="$style.taskName" :style="setStyle(task.project_id)">{{ task.taskName }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import mixinColor from '@/mixins/color'

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
      dropdownShown: true
    }
  },
  methods: {
    onDropdown() {
      this.dropdownShown = !this.dropdownShown
    },
    setStyle: function(seed) {
      return { '--target-background-color-hover': this.$_hsla(seed, 0.5) }
    }
  },
  computed: {
    getIcon: function() {
      return this.dropdownShown ? 'chevron-down' : 'chevron-right'
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
</style>
