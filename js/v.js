var app;

function loadVue() {
        Vue.component('upgrade', {
                props: ['index', 'tab'],
                template: `
                        <button v-if="onTab(tab)" 
                                v-bind:id="upg"
                                v-on:click="function() {
                                        if (canAfford(index)) index.purchased = true;
                                }"
                                ></button>
                `
        })
}
