var app;

function loadVue() {
        Vue.component('upgrade', {
                props: ['index', 'tab'],
                template: `
                        <button 
                                v-bind:id="index"
                                v-bind:class"{
                                        button: true,
                                        [index]: true
                                }">
                                {{index}}
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
