<template>
  <div class="login-container">
    <img class="login-container-logo" src="../assets/logo-transparent.png" alt="logo" />
    <form
      @submit.prevent="handlerSubmit()"
      class="login-container-form">
        <div class="floating-label">
          <input type="email" required class="full-width">
          <label>Email</label>
        </div>
        <div class="floating-label">
          <input type="password" required class="full-width">
          <label>Senha</label>
        </div>
        <button type="submit" class="primary full-width login-btn-submit">
          Entrar
        </button>
    </form>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    handlerSubmit () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="stylus">
.login-container
  width 100%
  height 100%
  display flex
  flex-direction column
  justify-content center
  align-items center

  // Fix default layout
  .floating-label .full-width
    font-size 25px
    color #666
    &:focus
      border-color #72b5aa

  &-logo
    width 100px
    height auto
    margin-bottom 20px

  &-form
    display flex
    flex-direction column
    justify-content center
    align-items center

  .login-btn-submit
    margin-top 40px
    background-color #72b5aa
</style>
