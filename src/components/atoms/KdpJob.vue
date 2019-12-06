<template>
  <div
    :class="$style.job"
    :style="setStyle(targetJob)"
    @mousedown.stop="jobMousedown"
    @mouseup.stop="jobMouseup"
    @mousemove.stop="jobMousemove"
  >
    {{ targetJob.taskName }}
    <div
      :class="$style.after"
      @mousedown.stop="moveMousedown"
      @mouseup.stop="moveMouseup"
      @mousemove.stop="moveMousemove"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      minHeight: 12,
      minMinutes: 15,
      targetJob: [],
      moveFlag: false,
      pageY: 0,
      start: null
    }
  },
  created() {
    this.targetJob = Object.assign({}, this.job)
  },
  methods: {
    jobMousedown(e) {
      this.pageY = e.pageY
      this.moveFlag = true
      this.start = this.targetJob.start.clone()
    },
    jobMouseup() {
      this.reset()
    },
    jobMousemove(e) {
      // if (false) {
      //   const height = e.pageY - this.pageY + this.minHeight
      //   if (height > 0) {
      //     this.targetJob.time = Math.ceil(height / this.minHeight) * this.minMinutes
      //   }
      // }
      if (this.moveFlag) {
        const height = e.pageY - this.pageY
        const time = Math.ceil(height / this.minHeight) * this.minMinutes
        if (e.pageY === 0 || time === 0 || Math.abs(height) < this.minHeight) return
        if (time > 0) {
          this.targetJob.start = this.start.clone().add(time, 'minutes')
        } else {
          this.targetJob.start = this.start.clone().subtract(Math.abs(time), 'minutes')
        }
      }
    },
    moveMousedown() {
      console.log('moveMousedown')
    },
    moveMouseup() {
      console.log('moveMouseup')
      this.reset()
    },
    moveMousemove() {
      console.log('moveMousemove')
    },
    reset() {
      this.moveFlag = false
      this.pageY = 0
      this.start = null
    },
    setStyle(job) {
      const top = job.start.hours() * (this.minHeight * 4) + (job.start.minutes() / this.minMinutes) * this.minHeight
      const height = (job.time / this.minMinutes) * this.minHeight
      return `background:${job.hsla};border-color:${job.hsla};top:${top}px;height:${height}px;`
    }
  }
}
</script>

<style lang="scss" module>
.job {
  user-select: none;
}
</style>
