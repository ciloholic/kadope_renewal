<template>
  <div ref="timeLine" :class="$style.timeLine" />
</template>

<script>
export default {
  data() {
    return {
      intervalId: null,
      min_height: 12,
      min_minutes: 15,
      header_height: 50
    }
  },
  mounted() {
    this.updateTimeLine()
    this.intervalId = setInterval(() => {
      this.updateTimeLine()
    }, 60 * 1000)
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  },
  methods: {
    updateTimeLine: function() {
      const start = this.moment().startOf('day')
      const minutes = this.moment().diff(start, 'minutes')
      const top = parseInt((minutes / this.min_minutes) * this.min_height + this.header_height)
      this.$refs.timeLine.style.top = `${top}px`
    }
  }
}
</script>

<style lang="scss" module>
.timeLine {
  width: 100%;
  height: 1px;
  background: var(--base-background-secondary);
}
</style>
