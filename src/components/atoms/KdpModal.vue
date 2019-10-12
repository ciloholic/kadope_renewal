<template>
  <transition name="modal">
    <div :class="$style.modalMask" @click="onCloseClick">
      <div :class="$style.modalContainer">
        <div :class="$style.modalBody">
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
.modalMask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modalContainer {
  min-width: 500px;
  min-height: 300px;
  padding: 20px 30px;
  background-color: var(--base-background-default);
  border-radius: 3px;
  transition: all 0.3s ease;
}

.modalBody {
  margin: 20px 0;
}

.modal-enter,
.modal-leave-active {
  opacity: 0;
}

.modal-enter .modalContainer,
.modal-leave-active .modalContainer {
  transform: scale(1.1);
}
</style>
