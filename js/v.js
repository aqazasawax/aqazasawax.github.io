var app;

function loadVue() {
        Vue.component('upgrade', {
                props: ['index', 'tab'],
                template: `
                        <button  
                                v-bind:id="upg"
                                v-on:click="function() {
                                        if (canAfford(index.costType, tab, index)) index.purchased = true;
                                }"
                                ></button>
                `
        })
}
