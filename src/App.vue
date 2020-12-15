<template>
  <div id="app" class="has-background-light has-text-centered has-text-left-desktop">
    <Nav />
    <router-view/>

  </div>
</template>


<script>
  import Nav from './components/Nav'

  export default {
    components: {
      Nav
    }
  }
</script>

<style lang="scss">
  @import 'assets/scss/main.scss';

</style>