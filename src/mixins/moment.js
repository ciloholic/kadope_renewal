export default {
  filters: {
    $_formatMoment: (moment, formatText) => {
      return moment.format(formatText)
    },
    $_formatMinute: minute => {
      const _hour = Math.floor(minute / 60)
      const _minute = ('0' + (minute % 60)).slice(-2)
      return `${_hour}:${_minute}`
    }
  }
}
