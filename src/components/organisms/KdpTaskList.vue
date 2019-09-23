<template>
  <aside :class="$style.taskList">
    <p>aside</p>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: function() {
    return {}
  },
  computed: {
    ...mapGetters(['getProjectAll'])
  }
}
</script>

<style lang="scss" module>
.taskList {
  color: var(--base-font-color-default);
  background: rgba(255, 255, 255, 0.15);
  height: 100%;
  border-radius: 3px;
  padding: 10px;
}
</style>
