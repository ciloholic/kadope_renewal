<template>
  <transition name="modal">
    <div :class="$style.modal" @click="onCloseClick">
      <div :class="[$style.container, $style._container]">
        <div :class="$style.body">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    onCloseClick() {
      this.$emit('onCloseClick')
    }
  }
}
</script>

<style lang="scss" module>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.container {
  min-width: 500px;
  min-height: 300px;
  padding: 20px 30px;
  background-color: var(--base-background-default);
  border-radius: 3px;
  transition: all 0.3s ease;
}

.body {
  margin: 20px 0;
}

.modal-enter,
.modal-leave-active {
  opacity: 0;
}

.modal-enter .container,
.modal-leave-active .container {
  transform: scale(1.1);
}
</style>
