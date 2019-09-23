<template>
  <div :class="$style.yearMonth">
    <span :class="$style.year">{{ getToday | $_formatMoment('gggg年') }}</span>
    <span :class="$style.month">{{ getToday | $_formatMoment('M月') }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import mixinMoment from '@/mixins/moment'

export default {
  data: function() {
    return {}
  },
  computed: {
    ...mapGetters(['getToday'])
  },
  mixins: [mixinMoment]
}
</script>

<style lang="scss" module>
.yearMonth {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.year {
}

.month {
}
</style>
