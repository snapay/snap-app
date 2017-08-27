<template>
  <div id="q-app">
    <q-layout>
      <!-- All menu -->
      <q-drawer ref="drawerMenuMain" left-side>
        <div class="list platform-delimiter">
          <div class="list-header">
            MENU
          </div>
          <q-drawer-link icon="format_align_justify" to="/extract">Extrato</q-drawer-link>
          <q-drawer-link icon="slow_motion_video" to="/challenges">Desafios</q-drawer-link>
          <q-drawer-link icon="assessment" to="/general-statistic">Estatísticas gerais</q-drawer-link>
        </div>
      </q-drawer>

      <!-- All Header -->
      <div
        v-if="checkIfLoginRoute"
        slot="header"
        class="toolbar">
        <button
          @click="$refs.drawerMenuMain.open()">
          <i>menu</i>
        </button>

        <!-- App name -->
        <q-toolbar-title>
          Jarbank
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
  name: 'AppMain',
  computed: {
    checkIfLoginRoute () {
      const possiblePaths = ['/', '/login']
      if (!~possiblePaths.indexOf(this.$route.path)) return true
      return false
    }
  },
  methods: {}
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
  background-color #72b5aa

.list-header
  font-weight 600
  font-size 35px
  padding 10px
  padding-left 17px
  color #666
  border-bottom 1px solid #ccc

.container
  width 100%
  padding-left 17px
  padding-right 17px
</style>
