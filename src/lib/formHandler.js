import { settings } from "../utilities/state.js";

export function validateTransaction(form) {
    const rpc = new Web3(settings.GANACHE_ADDRESS);
    const formData = new FormData(form);

    let errorCounter = 0;
    for (let [key, value] of formData) {
        switch (key) {
            case 'fromAccount':
            case 'toAccount':
                if (!rpc.utils.isAddress(value)) {
                    errorCounter++;
                }
                break;
            case 'amount':
                if (!value) {
                    errorCounter++;
                }
                break;
        }
    }

    if (errorCounter === 0) {
        return true;
    } else {
        return false;
    }

}