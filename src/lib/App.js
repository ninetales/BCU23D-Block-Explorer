import clickHandler from "./clickHandler.js";
import sidebar from "./sidebar.js";
import accordion from "./accordion.js";

const initApp = () => {
    console.log('Init app');
    clickHandler();
    sidebar();
    accordion();
}

document.addEventListener('DOMContentLoaded', initApp);