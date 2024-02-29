var app;

function loadVue() {
        Vue.component('upgrade', {
                props: ['index', 'tab'],
                template: `
                        <button 
                                v-bind:id="index"
                                >
                                description
                        </button>
                `
        })

        app = new Vue({
                el: "#app",
                data: {
                        player,
                        format,
                        UPGRADES
                },
        })
}
