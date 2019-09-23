<template>
  <div :class="$style.day">
    <div :class="$style.header">
      <div>{{ currentDay.format('ddd') }}</div>
      <div>{{ currentDay.format('DD') }}</div>
    </div>
    <ul>
      <li :class="[$style.minute, classObject(hour)]" v-for="hour in hours" :key="hour.format('HH:mm')">
        {{ hour.format('HH:mm') }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    currentDay: {
      type: Object,
      required: true
    }
  },
  methods: {
    classObject(hour) {
      return {
        [this.$style.m00]: hour.format('mm') === '00',
        [this.$style.m15]: hour.format('mm') === '15',
        [this.$style.m30]: hour.format('mm') === '30',
        [this.$style.m45]: hour.format('mm') === '45'
      }
    }
  },
  computed: {
    hours: function() {
      let start = this.moment().startOf('day')
      return [...Array(24 * 4).keys()].map(x => start.clone().add(x * 15, 'minutes'))
    }
  }
}
</script>

<style lang="scss" module>
.day {
  flex-grow: 1;
}

.header {
  height: 30px;
}

.minute {
  height: 15px;
  list-style: none;
}

.m00,
.m45 + .m00 {
  border-top: 1px solid #888;
}

.m45:last-child {
  border-bottom: 1px solid #888;
}

.m30 {
  border-top: 1px dashed #888;
}
</style>
