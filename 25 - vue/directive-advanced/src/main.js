import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.background = 'yellow';
    // el.style.background = binding.value;
    let delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }

    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay)
  }
});

Vue.directive('focus', {
  inserted(el) {
    el.focus();
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
