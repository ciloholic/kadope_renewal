<template>
  <div :class="$style.switchGroup">
    <input v-model="switched" :class="$style.input" :value="value" type="checkbox" />
    <div
      :class="[$style.switch, setClass(list.id)]"
      @click.stop="onClick(list.id)"
      v-for="list in lists"
      :key="list.id"
    >
      {{ list.text }}
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'switched',
    event: 'input'
  },
  props: {
    lists: {
      type: Array,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  methods: {
    setClass(id) {
      return this.value === id ? this.$style.on : this.$style.off
    },
    onClick(id) {
      this.$emit('onClick', id)
    }
  },
  computed: {
    switched: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss" module>
.switchGroup {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;

  & > .switch:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  & > .switch:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
}

.input {
  display: none;
}

.switch {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.on {
  background: var(--base-background-secondary);
  color: var(--base-font-color-primary);
}

.off {
  background: var(--base-background-primary);
  color: var(--base-font-color-default);
}
</style>
