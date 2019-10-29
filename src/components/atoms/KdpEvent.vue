<template>
  <div
    :class="$style.event"
    :style="setStyle(targetEvent)"
    @mousedown.stop="eventMousedown"
    @mouseup.stop="eventMouseup"
    @mousemove.stop="eventMousemove"
  >
    {{ targetEvent.taskName }}
    <div
      :class="$style.after"
      @mousedown.stop="moveMousedown"
      @mouseup.stop="moveMouseup"
      @mousemove.stop="moveMousemove"
    ></div>
  </div>
</template>

<script>
const MIN_HEIGHT = 12
const MIN_MINUTES = 15

export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      targetEvent: [],
      moveFlag: false,
      pageY: 0,
      start: null
    }
  },
  created() {
    this.targetEvent = Object.assign({}, this.event)
  },
  methods: {
    eventMousedown: function(e) {
      this.pageY = e.pageY
      this.moveFlag = true
      this.start = this.targetEvent.start.clone()
    },
    eventMouseup: function() {
      this.reset()
    },
    eventMousemove: function(e) {
      // if (false) {
      //   const height = e.pageY - this.pageY + MIN_HEIGHT
      //   if (height > 0) {
      //     this.targetEvent.time = Math.ceil(height / MIN_HEIGHT) * MIN_MINUTES
      //   }
      // }
      if (this.moveFlag) {
        const height = e.pageY - this.pageY
        const time = Math.ceil(height / MIN_HEIGHT) * MIN_MINUTES
        if (e.pageY === 0 || time === 0 || Math.abs(height) < MIN_HEIGHT) return
        if (time > 0) {
          this.targetEvent.start = this.start.clone().add(time, 'minutes')
        } else {
          this.targetEvent.start = this.start.clone().subtract(Math.abs(time), 'minutes')
        }
      }
    },
    moveMousedown: function() {
      console.log('moveMousedown')
    },
    moveMouseup: function() {
      console.log('moveMouseup')
      this.reset()
    },
    moveMousemove: function() {
      console.log('moveMousemove')
    },
    reset() {
      this.moveFlag = false
      this.pageY = 0
      this.start = null
    },
    setStyle(event) {
      const top = event.start.hours() * (MIN_HEIGHT * 4) + (event.start.minutes() / MIN_MINUTES) * MIN_HEIGHT
      const height = (event.time / MIN_MINUTES) * MIN_HEIGHT
      return `background:${event.hsla};border-color:${event.hsla};top:${top}px;height:${height}px;`
    }
  }
}
</script>

<style lang="scss" module>
.event {
  user-select: none;

  .after {
  }
}
</style>
