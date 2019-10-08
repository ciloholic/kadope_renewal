<template>
  <router-link :class="$style.link" :to="{ name: to }">
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
  width: 80px;
  height: 80px;
  padding: 10px;
  letter-spacing: 2px;
  text-decoration: none;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
}

.title {
  margin-top: 3px;
}
</style>
