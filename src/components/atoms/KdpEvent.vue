<template>
  <div
    :class="$style.event"
    :data-start="event.start | $_formatMoment('YYYY-MM-DD HH:mm:ss')"
    :style="setStyle(event)"
    @mousedown.stop="eventMousedown"
    @mouseup.stop="eventMouseup"
    @mousemove.stop="eventMousemove"
  >
    {{ event.taskName }}
    <div
      :class="$style.after"
      @mousedown.stop="moveMousedown"
      @mouseup.stop="moveMouseup"
      @mousemove.stop="moveMousemove"
    ></div>
  </div>
</template>

<script>
import mixinMoment from '@/mixins/moment'

const MIN_HEIGHT = 12
const MIN_MINUTES = 15

export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  methods: {
    eventMousedown: function() {
      console.log('eventMousedown')
    },
    eventMouseup: function() {
      console.log('eventMouseup')
    },
    eventMousemove: function() {
      console.log('eventMousemove')
    },
    moveMousedown: function() {
      console.log('moveMousedown')
    },
    moveMouseup: function() {
      console.log('moveMouseup')
    },
    moveMousemove: function() {
      console.log('moveMousemove')
    },
    setStyle(event) {
      const top = event.start.hours() * (MIN_HEIGHT * 4) + (event.start.minutes() / MIN_MINUTES) * MIN_HEIGHT
      const height = (event.time / MIN_MINUTES) * MIN_HEIGHT
      return `background:${event.hsla};border-color:${event.hsla};top:${top}px;height:${height}px;`
    }
  },
  mixins: [mixinMoment]
}
</script>

<style lang="scss" module></style>
