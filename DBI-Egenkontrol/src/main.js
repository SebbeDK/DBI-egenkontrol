import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";
import { faCalendarDays, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
// icons registered here.
library.add(faCalendarDays);
library.add(faFile);
library.add(faEllipsisV);





const app = createApp(App);
app.use(router);
app.mount("#app");
app.component("font-awesome-icon", FontAwesomeIcon);
