<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-server></app-server>
      <app-server-detail></app-server-detail>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/shared/Header.vue';
  import Server from './components/server/Server.vue';
  import ServerDetail from './components/server/ServerDetail.vue';
  import Footer from './components/shared/Footer.vue';

  export default {
    components: {
      'app-header': Header,
      'app-server': Server,
      'app-server-detail': ServerDetail,
      'app-footer': Footer,
    }
  }
</script>


