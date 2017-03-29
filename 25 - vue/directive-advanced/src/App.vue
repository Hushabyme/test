<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-ms-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <p v-text="'Hello Vue.js'"></p>
        <p v-html="'<strong>Some Strong Text</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-ms-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <!--<p v-highlight:background="'red'">Color this</p>-->
        <!--<p v-highlight:backround.delayed="'red'">Color this</p>-->
        <p v-highlight="'red'">Color this</p>
        <p v-local-highlight.delayed="'red'">Color this too</p>
        <label><input type="text" v-focus></label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    directives: {
      'local-highlight': {
        bind(el, binding) {
          let delay = 0;
          if(binding.modifiers['delayed']) {
            delay = 2000;
          }

          setTimeout(() => {
            if (binding.arg === 'background') {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay)
        }
      }
    }
  }
</script>
