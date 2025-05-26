import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router';
import { faCalendarDays, faEllipsisV, faListUl, faGrip, faPlus, faFolderPlus, faArrowUp, faUser, faGear, faMagnifyingGlass, faArrowLeft, faAngleDown, faPrint, faUpDownLeftRight, faCirclePlus, faArrowsUpDownLeftRight, faTrashCan, faReply} from '@fortawesome/free-solid-svg-icons';
import { faFile,faFolder, faCircle, faFloppyDisk, faPenToSquare, faCopy, faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { fas } from "@fortawesome/free-solid-svg-icons"

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
library.add(faAngleDown);
library.add(faFloppyDisk);
library.add(faPenToSquare);
library.add(faPrint);
library.add(faUpDownLeftRight);
library.add(faTrashCan);
library.add(faCirclePlus);
library.add(faCopy);
library.add(faCircleQuestion);
library.add(faArrowsUpDownLeftRight);
library.add(faReply)
library.add(fas)













const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');

