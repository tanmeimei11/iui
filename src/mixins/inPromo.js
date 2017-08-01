export default {
  created () {
    if (this.$common) {
      this.$common.initIn()
    }

    if (this.$track) {
      this.$track(this.$root.$options.track)
    }

    if (this.$share) {
      this.$share = this.$root.$options.share
    }
  }
}
