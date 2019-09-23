<template>
  <div :class="$style.label">
    <ul>
      <li :class="$style.hour" v-for="hour in hours" :key="hour | $_formatMoment('HH:mm')">
        {{ hour | $_formatMoment('HH:mm') }}
      </li>
    </ul>
  </div>
</template>

<script>
import mixinMoment from '@/mixins/moment'

export default {
  data: function() {
    return {}
  },
  computed: {
    hours: function() {
      let start = this.moment().startOf('day')
      return [...Array(24).keys()].map(x => start.clone().add(x, 'hours'))
    }
  },
  mixins: [mixinMoment]
}
</script>

<style lang="scss" module>
.label {
}

.hour {
  height: 15px;
  list-style: none;
}
</style>
