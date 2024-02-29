var app;

function loadVue() {
        Vue.component('upgrade', {
                props: ['index', 'tab'],
                template: `
                        <button v-if="onTab(tab)"
                                v-bind:id="upg"
                                v-on:click="function() {
                                        if (canAfford(index.costType, tab, index)) index.purchased = true;
                                }"
                                ></button>
                `
        })
}

app = Vue.createApp({
    data() {
      return {
        points: player.points
      }
    }
})
app.mount('#app')
