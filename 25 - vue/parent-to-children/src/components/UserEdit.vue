<template>
  <div>
    <h2>You may edit the User here</h2>
    <p>Edit me!</p>
    <p>User Age: {{ userAge }}</p>
    <button type="button" @click="editAge">Edit Age</button>
  </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {
    props: ['userAge'],
    methods: {
      editAge() {
        this.userAge = 28;
//        this.$emit('ageWasEdit', this.userAge)
//        eventBus.$emit('ageWasEdit', this.userAge);
        eventBus.changeAge(this.userAge);
      }
    }
  }
</script>

<style scoped>
  div {
    background: lightgreen;
    border: 1px solid black;
    padding: 20px;
  }

</style>