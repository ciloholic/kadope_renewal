<template>
  <div ref="timeLine" :class="$style.timeLine" />
</template>

<script>
export default {
  data: function() {
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
  background: var(--base-background-secondary);
  height: 1px;
  width: 100%;
}
</style>
