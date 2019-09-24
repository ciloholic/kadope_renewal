<template>
  <div :class="$style.yearMonth">
    <span>{{ getCurrentDay | $_formatMoment('gggg年') }}</span>
    <span>{{ getCurrentDay | $_formatMoment('M月') }}</span>
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
    ...mapGetters(['getCurrentDay'])
  },
  mixins: [mixinMoment]
}
</script>

<style lang="scss" module>
.yearMonth {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  height: 100%;
}
</style>
