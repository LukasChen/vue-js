new Vue({
  el: "#app",
  data: {
    message: "Hello World!",
    car_services: ["Fuel Car", "Paint Car", "Customize Car"]
  },
  methods: {
    realService: function() {
      alert("Just what you are thinking there buddy!");
    }
  }
})