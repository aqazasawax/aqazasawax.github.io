var app;

function loadVue() {
  Vue.component('upgrade-button', {
    props: ['id', 'desc'],
    template: `
    <button>
    {{desc}}
    </button>
    `
  })

  app = new Vue({
    el: "#app",
    data: {
      player,
      UPGRADES
    },
  })
}
