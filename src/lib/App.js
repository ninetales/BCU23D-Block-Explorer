import { state } from "../utilities/state.js";
import initBalanceHandler from "./balanceHandler.js";
import clickHandler from "./clickHandler.js";
import accordionList from "./accordionHandler.js";
import initTransferHandler from "./transferHandler.js";
import { initShadow } from "../dom/shadow.js";

const initApp = () => {
    initShadow();
    clickHandler();
    accordionList();

    switch (state.currentPage) {
        case '/':
        case '/index.html':
            break;
        case '/src/pages/balance.html':
            initBalanceHandler();
            break;
        case '/src/pages/transfer.html':
            initTransferHandler();
            break;
    }

}

document.addEventListener('DOMContentLoaded', initApp);