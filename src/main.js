import { createApp } from 'vue';
import App from "./App.vue";
import components from './components/UI/index.js';
import router from './router/router';
import VRandomColor from "./directives/VRandomColor.js";
import store from "./store/index.js";

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);
});

app.directive('random-color', VRandomColor);

app
    .use(router)
    .use(store)
    .mount('#app');
