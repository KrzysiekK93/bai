Vue.component('university', {
    data() {
      return {
        name: 'Cracow University of Economics',
        address: '31-510 Kraków, Rakowicka 27, POLAND'
      }
    },
    template : `
    <div>
      <h1>{{name}}</h1>
      <p>{{address}}</p>
    </div>
    `
  })


  var app = new Vue({
    el: '#app'
  });