<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button type="button" @click="changeName">Change My Name</button>
    <p>Name is {{ name }}</p>
    <p>Age is {{ age }}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :myName="name" @nameWasReset="name = $event" :userAge="age"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age" @ageWasEdit="age = $event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
  import UserDetail from './UserDetail.vue';
  import UserEdit from './UserEdit.vue';

  export default {
    data() {
      return {
        name: 'Max',
        age: 22
      }
    },
    methods: {
      changeName() {
        this.name = 'Anna';
      }
    },
    components: {
      'app-user-detail': UserDetail,
      'app-user-edit': UserEdit,
    }
  }
</script>

<style scoped>
  div {
    background: lightblue;
  }
</style>