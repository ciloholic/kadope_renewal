<template>
  <router-link :class="$style.link" :to="{ name: to }">
    <font-awesome-icon :class="$style.icon" :icon="icon" />
    <span :class="$style.title">{{ title }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'KdpHeader',
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 80px;
  height: 80px;
  padding: 10px;
  letter-spacing: 2px;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
}

.icon {
  color: #000;
  font-size: 3rem;
}

.title {
  color: #000;
  margin-top: 3px;
}
</style>
