<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <input
              class="form-control"
              type="text"
              id="email"
              v-model="userData.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              class="form-control"
              type="password"
              id="password"
              v-model="userData.password">
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
              class="form-control"
              type="number"
              id="age"
              v-model="userData.age">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label>
          <textarea
            class="form-control"
            id="message"
            rows="5"
            v-model="message"></textarea>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
            <input
              id="sendmail"
              type="checkbox"
              value="SendMail"
              v-model="sendMail">Send Mail
            </label>
            <label for="sendInfomail">
              <input
                id="sendInfomail"
                type="checkbox"
                value="sendInfoMail"
                v-model="sendMail"> Send Infomail
            </label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input
              id="male"
              type="radio"
              value="Male"
              v-model="gender"> Male
          </label>
          <label for="female">
            <input
              id="female"
              type="radio"
              value="Female"
              v-model="gender"> Female
          </label>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="priority"></label>
          <select
            class="form-control"
            id="priority"
            v-model="selectedPriority">
            <option v-for="priority in priorities">{{ priority }}</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <app-switch v-model="dataSwitched"></app-switch>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button
            class="btn btn-primary"
            @click.prevent="submitted">Submit!</button>
        </div>
      </div>
    </form>

    <hr>

    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Age: {{ userData.age }}</p>
            <p style="white-space: pre">Message: {{ message }}</p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="item in sendMail">{{ item }}</li>
            </ul>
            <p>Gender: {{ gender }}</p>
            <p>Priority: {{ selectedPriority }}</p>
            <p>Switch: {{ dataSwitched }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Switch from './Switch.vue';

  export default {
    data() {
      return {
        userData: {
          email: '',
          password: '',
          age: '',
        },
        message: 'Write something...',
        sendMail: [],
        gender: 'Male',
        selectedPriority: 'Medium',
        priorities: ['High', 'Medium', 'Low'],
        dataSwitched: true,
        isSubmitted: false
      }
    },
    methods: {
      submitted() {
        this.isSubmitted = true;
      }
    },
    components: {
      'app-switch': Switch
    }
  }
</script>

<style>
  body {
    font-family: '微软雅黑', sans-serif;
  }
</style>