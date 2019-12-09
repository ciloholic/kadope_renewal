<template>
  <div :class="$style.calendarPinTask">
    <div :class="$style.titleGroup" @click="onToggleClick">
      <font-awesome-icon :class="$style.icon" :icon="getIcon" size="sm" fixed-width />
      <div :class="$style.title">{{ title }}</div>
    </div>
    <ul :class="$style.items">
      <li v-for="item in items" v-show="show" :key="item.id" :class="$style.item">
        <div :class="$style.taskName" :style="setStyle(item.hsla)">{{ item.taskName }}</div>
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
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      show: true
    }
  },
  computed: {
    getIcon() {
      return this.show ? 'chevron-down' : 'chevron-right'
    }
  },
  methods: {
    onToggleClick() {
      this.show = !this.show
    },
    setStyle: hsla => {
      return { '--target-background-color-hover': hsla }
    }
  }
}
</script>

<style lang="scss" module>
.calendarPinTask {
  color: var(--base-font-color-default);
  border-radius: 3px;
}

.titleGroup {
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    background: var(--target-background-color-hover);
  }
}

.items {
  list-style: none;
}

.item {
  position: relative;
  margin-top: 5px;
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
