<template lang="html">
  <transition name="fade">
    <h1>Reading credit card</h1>
  </transition>
</template>

<script>
export default {
  name: 'ReadCreditCard'
}
</script>

<style lang="stylus">
.fade-enter-active,
.fade-leave-active
  transition all .3s ease-in-out

.fade-enter,
.fade-leave-to
  opacity 0
</style>
