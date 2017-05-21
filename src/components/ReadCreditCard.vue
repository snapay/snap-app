<template lang="html">
  <transition name="slide-left">
    <h1>Reading credit card</h1>
  </transition>
</template>

<script>
export default {
  name: 'ReadCreditCard'
}
</script>

<style lang="stylus">
.slide-left-enter-active,
.slide-left-leave-active
  transition all .3s ease-in-out

.slide-left-enter,
.slide-left-leave-to
  opacity 0
</style>
