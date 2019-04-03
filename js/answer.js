// import VueMDCAdapter from 'vue-mdc-adapter'
// Vue.use(VueMDCAdapter);

var app = new Vue({
  el: '#app',
  data: {
    title: "ひなえ",
    text: ""
  }
});

var input = document.querySelector('input');
input.addEventListener('input', resizeInput);
resizeInput.call(input);

function resizeInput() {
  this.style.width = this.value.length + "ch";
}
