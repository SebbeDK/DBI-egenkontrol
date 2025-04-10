import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";
import { faCalendarDays, faEllipsisV,faListUl,faGrip,faPlus, faFolderPlus, faArrowUp, faUser, faGear, faMagnifyingGlass, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faFile,faFolder, faCircle } from "@fortawesome/free-regular-svg-icons";
// icons registered here.
library.add(faCalendarDays);
library.add(faFile);
library.add(faEllipsisV);
library.add(faListUl);
library.add(faGrip);
library.add(faFolder);
library.add(faPlus);
library.add(faFolderPlus);
library.add(faArrowUp);
library.add(faUser);
library.add(faGear);
library.add(faMagnifyingGlass);
library.add(faCircle);
library.add(faArrowLeft);











const app = createApp(App);
app.use(router);
app.mount("#app");
app.component("font-awesome-icon", FontAwesomeIcon);
