<template lang="html">
  <div
    class="list-sales"
    :class="{ 'centerify': isLoading }">
    <spinner
      name="oval"
      color="#2aa68d"
      v-if="isLoading"
      size="100"></spinner>

    <div v-if="!isLoading" class="header-container">
      <h1 class="list-sales-title">Vendas</h1>
      <q-select
        class="select-filter"
        @input="renderListSales()"
        type="radio"
        v-model="filterSelected"
        :options="selectFilter"></q-select>
    </div>

    <p
      v-if="haveSales && !isLoading">Sem transações no histórico.</p>

    <div v-if="!isLoading">
      <div
        class="card"
        v-for="sale in sales">
        <div class="card-title bg-primary text-white">
          {{ sale.id }} - {{ sale.date }}
        </div>
        <div class="card-content card-force-top-padding">
          <p class="card-description">
            <strong>ID da transação:</strong> {{ sale.id_transaction }}
          </p>
          <p class="card-description">
            <strong>R$ {{ sale.amount }}</strong>
          </p>

          <span v-if="sale.status === 'Aprovado'" class="status-approved">{{ sale.status }}</span>
          <span v-else class="status-reject">{{ sale.status }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      sales: [],
      isLoading: false,
      filterSelected: 'week',
      selectFilter: [
        { label: 'Mês', value: 'mouth' },
        { label: 'Semana', value: 'week' },
        { label: 'Dia', value: undefined }
      ]
    }
  },
  computed: {
    haveSales () {
      return (this.sales.length === 0)
    }
  },
  mounted () {
    this.renderListSales()
  },
  methods: {
    renderListSales () {
      const self = this
      let URL = null
      self.isLoading = true

      if (!self.filterSelected) URL = 'http://snapay.com.br/payments/'
      else URL = `http://snapay.com.br/payments/?filter=${self.filterSelected}`

      axios.get(URL)
        .then(({ data }) => {
          self.sales = data
          self.isLoading = false
        })
        .catch(console.log)
    }
  }
}
</script>

<style lang="stylus">
.header-container
  display flex
  justify-content space-between
  align-items center

.select-filter
  margin-top 7px
  border-color #2aa68d !important

.bg-primary
  background-color #2aa68d !important

.centerify
  display flex
  justify-content center
  align-items center

.list-sales
  width 100%
  height 100%
  overflow-y scroll

  &-title
    font-size 30px

.status-approved
  background-color #2aa68d
  padding 3px 5px 3px 5px
  border-radius 4px
  color #fff

.status-reject
  background-color #fb7171
  padding 3px 5px 3px 5px
  border-radius 4px
  color #fff

</style>
