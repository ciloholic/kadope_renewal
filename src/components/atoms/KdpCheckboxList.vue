<template>
  <div :class="$style.checkboxList">
    <label :class="$style.label" @click.prevent="onAllChecked">
      <input :class="$style.input" v-model="allChecked" type="checkbox" />
      <img v-if="allChecked" :class="$style.icon" src="@/assets/checkboxOn.svg" />
      <img v-else :class="$style.icon" src="@/assets/checkboxOff.svg" />
      全選択
    </label>
    <label :class="$style.label" v-for="item in items" :key="item.id">
      <input :class="$style.input" v-model="_checked" :value="item.id" type="checkbox" />
      <img v-if="isInclues(item.id)" :class="$style.icon" src="@/assets/checkboxOn.svg" />
      <img v-else :class="$style.icon" src="@/assets/checkboxOff.svg" />
      {{ item.name }}
    </label>
  </div>
</template>

<script>
export default {
  model: {
    prop: '_checked',
    event: 'input'
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    checked: {
      type: Array,
      required: true
    }
  },
  methods: {
    isInclues(id) {
      return this._checked.includes(id)
    },
    onAllChecked() {
      if (this.allChecked) {
        this._checked = []
      } else {
        this._checked = this._.map(this.items, 'id')
      }
    }
  },
  computed: {
    _checked: {
      get() {
        return this.checked
      },
      set(checked) {
        this.$emit('input', checked)
      }
    },
    allChecked: function() {
      return this._.isEqual(this._.sortBy(this._checked), this._.sortBy(this._.map(this.items, 'id')))
    }
  }
}
</script>

<style lang="scss" module>
.checkboxList {
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
