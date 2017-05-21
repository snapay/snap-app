<template lang="html">
  <div class="new-sale">
    <!-- <img class="new-sale-logo" src="~assets/logo-only.png" alt="logo"> -->
    <h1 class="new-sale-title">Nova venda</h1>
    <input class="new-sale-value" type="number" v-model="saleValue" placeholder="00,00">
    <button
      @click="startReadCreditCard()"
      class="primary big new-sale-button">
      Iniciar leitura
    </button>

    <q-modal ref="readCreditCardModal">
      <div class="modal-container">
        <!-- waiting status -->
        <i
          v-if="operation.waiting"
          class="material-icons modal-container-icon">credit_card</i>
        <h1
          v-if="operation.waiting"
          :class="{ 'blink': operation.waiting }"
          class="modal-container-title">Passe o cartão...</h1>

        <button
          v-if="operation.waiting"
          class="light"
          @click="$refs.readCreditCardModal.close()">CANCELAR</button>

        <!-- Success status -->
        <i
          v-if="operation.success"
          :class="{ 'success-operation': operation.success }"
          class="material-icons modal-container-icon">done_all</i>
        <h1
          v-if="operation.success"
          :class="{ 'success-operation': operation.success }"
          class="modal-container-title">Pago com sucesso!</h1>

        <!-- Fail status -->
        <i
          v-if="operation.fail"
          :class="{ 'fail-operation': operation.fail }"
          class="material-icons modal-container-icon">highlight_off</i>
        <h1
          v-if="operation.fail"
          :class="{ 'fail-operation': operation.fail }"
          class="modal-container-title">Erro no pagamento!</h1>
        <button
          v-if="operation.fail"
          class="btn-try-again"
          @click="$refs.readCreditCardModal.close()">Tentar novamente</button>
      </div>
    </q-modal>
  </div>
</template>

<script>
export default {
  name: 'NewSale',
  data () {
    return {
      saleValue: undefined,
      operation: {
        waiting: false,
        success: true,
        fail: false
      }
    }
  },
  methods: {
    startReadCreditCard () {
      this.$refs.readCreditCardModal.open()
    }
  }
}
</script>

<style lang="stylus">

@keyframes blink
  to
    color #ccc

.blink
  animation blink 1s ease-in-out infinite alternate

.new-sale
  width 100%
  height 100%
  display flex
  flex-direction column
  justify-content center
  align-items center

  &-logo
    margin-top 30px
    width 120px

  &-title
    text-align center
    margin-top -50px
    font-size 30px

  &-value
    width 150px
    height 80px
    font-size 40px !important
    text-align center
    border-bottom 2px dashed #ccc !important
    margin-bottom 20px !important
    color #666

    &:focus
      border none !important

  &-button
    background-color #2aa68d !important

.modal-container
  width 100%
  height 100%
  display flex
  flex-direction column
  justify-content center
  align-items center

  &-icon
    font-size 200px
    color #ccc

  &-title
    font-size 20px
    color #444

.success-operation
  color #2aa68d

.fail-operation
  color #fb7171

.btn-try-again
  color #2aa68d !important
  border 1px solid #2aa68d
</style>
