<template>
  <div :class="$style.timeLine" ref="timeLine" />
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
  methods: {
    updateTimeLine: function() {
      const start = this.moment().startOf('day')
      const minutes = this.moment().diff(start, 'minutes')
      const top = parseInt((minutes / this.min_minutes) * this.min_height + this.header_height)
      this.$refs.timeLine.style.top = `${top}px`
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
  }
}
</script>

<style lang="scss" module>
.timeLine {
  background: var(--base-background-sub);
  height: 1px;
  width: 100%;
}
</style>
