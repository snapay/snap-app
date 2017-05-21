<template>
  <div id="q-app">
    <q-layout>
      <!-- All menu -->
      <q-drawer ref="drawerMenuMain" left-side>
        <div class="list platform-delimiter">
          <div class="list-header">
            MENU
          </div>
          <q-drawer-link icon="card_travel" to="/new-sale">Nova Venda</q-drawer-link>
          <q-drawer-link icon="assignment" to="/list-sales">Lista de Vendas</q-drawer-link>
          <q-drawer-link icon="settings" to="/settings">Configurações</q-drawer-link>
        </div>
      </q-drawer>

      <!-- All Header -->
      <div slot="header" class="toolbar">
        <button
          @click="$refs.drawerMenuMain.open()">
          <i>menu</i>
        </button>

        <!-- App name -->
        <q-toolbar-title>
          Snapay
        </q-toolbar-title>
      </div>

      <div class="container">
        <router-view></router-view>
      </div>
    </q-layout>
  </div>
</template>

<script>
/*
 * Root component
 */
export default {
  name: 'AppMain'
}
</script>

<style lang="stylus">
*
  margin 0
  padding 0
  box-sizing border-box

html,
body
  width 100%
  height 100%

.toolbar
  background-color #2aa68d

.list-header
  font-weight 600
  font-size 35px
  padding 10px
  padding-left 17px
  color #666
  border-bottom 1px solid #ccc

.container
  width 100%
  padding 10px
  padding-left 17px
  padding-right 17px
</style>
