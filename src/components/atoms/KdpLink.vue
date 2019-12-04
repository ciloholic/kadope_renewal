<template>
  <router-link :class="$style.link" :to="{ name: to }" :data-active="isActive">
    <font-awesome-icon :icon="icon" size="3x" fixed-width />
    <span :class="$style.title">{{ title }}</span>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
      default: 'top'
    },
    icon: {
      type: String,
      required: true,
      default: 'info-circle'
    },
    title: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    isActive() {
      return this.to === this.$route.name
    }
  }
}
</script>

<style lang="scss" module>
.link {
  color: var(--base-font-color-primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 75px;
  height: 70px;
  letter-spacing: 1px;
  text-decoration: none;
  user-select: none;
}

.link[data-active] {
  background: rgba(0, 0, 0, 0.3);
}

.link:hover {
  background: rgba(0, 0, 0, 0.3);
}

.title {
  margin-top: 5px;
}
</style>
