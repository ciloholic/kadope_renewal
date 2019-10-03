export default {
  methods: {
    $_hsla: (seed, alpha = 1) => `hsla(${seed % 360}, 100%, 80%, ${alpha})`
  }
}
