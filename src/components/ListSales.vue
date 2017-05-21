<template lang="html">
  <div>
    <h1>Listar vendas</h1>
    <ul>
      <li v-for="sale in sales">
        ID: {{sale.id}} - Data: {{sale.date}} - Trx: {{sale.id_transaction}} - Status: {{sale.status}} - R$ {{sale.amount}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      sales: []
    }
  },
  mounted () {
    const self = this
    axios.get('http://snapay.com.br/payments/?filter=week')
      .then(({ data }) => this.sales = data)
      .catch(error => console.log(error))
      /*
      .catch(function (error) {
        console.log(error)
      })
      */
  }
}
</script>

<style lang="css">
  h1 {
    font-size: 30px;
  }
</style>
