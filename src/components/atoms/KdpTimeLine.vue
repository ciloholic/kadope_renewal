<template>
  <div :class="$style.timeLine" ref="timeLine" />
</template>

<script>
const MIN_HEIGHT = 12
const MIN_MINUTES = 15
const HEADER_HEIGHT = 50

export default {
  data: function() {
    return {
      intervalId: null
    }
  },
  methods: {
    updateTimeLine: function() {
      const start = this.moment().startOf('day')
      const minutes = this.moment().diff(start, 'minutes')
      const top = parseInt((minutes / MIN_MINUTES) * MIN_HEIGHT + HEADER_HEIGHT)
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
