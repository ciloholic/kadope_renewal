<template>
  <div :class="$style.checkboxList">
    <label :class="$style.label" @click.prevent="onAllChecked">
      <input v-model="allChecked" :class="$style.input" type="checkbox" />
      <img v-if="allChecked" :class="$style.icon" src="@/assets/checkboxOn.svg" />
      <img v-else :class="$style.icon" src="@/assets/checkboxOff.svg" />
      全選択
    </label>
    <label v-for="item in items" :key="item.id" :class="$style.label">
      <input v-model="_checked" :class="$style.input" :value="item.id" type="checkbox" />
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
  computed: {
    _checked: {
      get() {
        return this.checked
      },
      set(checked) {
        this.$emit('input', checked)
      }
    },
    allChecked() {
      return this._.isEqual(this._.sortBy(this._checked), this._.sortBy(this._.map(this.items, 'id')))
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
  }
}
</script>

<style lang="scss" module>
.checkboxList {
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
}

.label {
  display: flex;
  word-break: break-all;
  user-select: none;
}

.input {
  display: none;
}

.icon {
  margin-right: 5px;
}
</style>
