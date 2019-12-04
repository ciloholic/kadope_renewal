<template>
  <div :class="$style.dropdownList">
    <div :class="$style.mainTitle" @click="onDropdown">
      <font-awesome-icon :class="$style.icon" :icon="getIcon" size="sm" fixed-width />
      <div :class="$style.title">{{ title }}</div>
    </div>
    <ul :class="$style.lists">
      <li v-for="list in lists" v-show="dropdownShown" :key="list.id" :class="$style.list">
        <div :class="$style.userName">{{ list.userName }}</div>
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
    lists: {
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

.lists {
  list-style: none;
}

.list {
  position: relative;
  margin-top: 5px;
}

.userName {
  display: flex;
  align-items: flex-start;
  background: var(--base-background-light);
  font-size: 1.1rem;
  min-height: 3rem;
  padding: 5px;
  word-break: break-all;
  user-select: none;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
}
</style>
