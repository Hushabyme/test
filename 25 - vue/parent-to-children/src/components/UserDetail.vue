<template>
  <div>
    <h2>You may view the User Details here</h2>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <p>User age: {{ userAge }}</p>
    <button type="button" @click="resetName">Reset Name</button>
  </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {
    props: {
      myName: {
        type: String,
        required: true,
      },
      userAge: Number
    },
    methods: {
      switchName() {
        return this.myName.split('').reverse().join('');
      },
      resetName() {
        this.myName = 'Max';
        this.$emit('nameWasReset', this.myName);
      }
    },
    created() {
      eventBus.$on('ageWasEdit', (age) => {
        this.userAge = age;
      });
    }
  }
</script>

<style scoped>
  div {
    background: lightcoral;
    border: 1px solid black;
    padding: 20px;
  }
</style>