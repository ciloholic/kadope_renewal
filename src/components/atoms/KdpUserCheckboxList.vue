<template>
  <div :class="$style.userCheckboxList">
    <label :class="$style.label" @click.prevent="onAllChecked">
      <input :class="$style.input" v-model="allChecked" type="checkbox" />
      <img v-if="allChecked" :class="$style.icon" src="@/assets/checkboxOn.svg" />
      <img v-else :class="$style.icon" src="@/assets/checkboxOff.svg" />
      全選択
    </label>
    <label :class="$style.label" v-for="user in getUserAll" :key="user.id">
      <input :class="$style.input" v-model="checked" :value="user.id" type="checkbox" />
      <img v-if="isInclues(user.id)" :class="$style.icon" src="@/assets/checkboxOn.svg" />
      <img v-else :class="$style.icon" src="@/assets/checkboxOff.svg" />
      {{ user.userName }}
    </label>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      checked: []
    }
  },
  methods: {
    isInclues(id) {
      return this.checked.includes(id)
    },
    onAllChecked() {
      if (this.allChecked) {
        this.checked = []
      } else {
        this.checked = this._.map(this.getUserAll, 'id')
      }
    }
  },
  computed: {
    ...mapGetters(['getUserAll']),
    allChecked: function() {
      return this._.isEqual(this._.sortBy(this.checked), this._.sortBy(this._.map(this.getUserAll, 'id')))
    }
  }
}
</script>

<style lang="scss" module>
.userCheckboxList {
  display: flex;
  flex-direction: column;
}

.label {
  display: flex;
  user-select: none;
  word-break: break-all;
}

.input {
  display: none;
}

.icon {
  margin-right: 5px;
}
</style>
