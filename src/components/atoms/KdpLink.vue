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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 65px;
  font-size: 1rem;
  color: var(--base-font-color-primary);
  text-decoration: none;
  letter-spacing: 1px;
  user-select: none;

  &[data-active] {
    background: rgba(0, 0, 0, 0.3);
  }

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
}

.title {
  margin-top: 5px;
}
</style>
