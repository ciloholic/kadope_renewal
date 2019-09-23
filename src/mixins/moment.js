export default {
  filters: {
    $_formatMoment: (moment, formatText) => {
      return moment.format(formatText)
    }
  }
}
