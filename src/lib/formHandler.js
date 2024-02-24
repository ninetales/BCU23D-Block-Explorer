import { settings } from "../utilities/state.js";

export async function validateTransaction(form) {
    
    const formData = new FormData(form);

    let errorCounter = 0;
    for (let [key, value] of formData) {
        switch (key) {
            case 'fromAccount':
            case 'toAccount':
                if (!value) {
                    errorCounter++;
                    errorHandler(form, key, 'This field cannot be empty', 'error');
                }
                else if (await addressValidator(value) === false) {
                    errorCounter++;
                    errorHandler(form, key, 'This is not a valid account number', 'error');
                }
                else if(formData.get('toAccount') === formData.get('fromAccount')){
                    errorCounter++;
                    errorHandler(form, key, 'You cannot send money to the same account', 'error');
                }
                 else {
                    clearErrorHandler(key);
                }
                break;
            case 'amount':
                value = Number(value);
                if (isNaN(value)) {
                    errorCounter++;
                    errorHandler(form, key, 'Only numerical values', 'error');
                }
                else if (!value) {
                    errorCounter++;
                    errorHandler(form, key, 'This field cannot be empty', 'error');
                }
                else if(formData.get('fromAccount')){
                    if(await balanceValidator(formData.get('fromAccount'), value)){
                        errorCounter++;
                        errorHandler(form, key, 'Not enough funds to transfer', 'error');
                    }
                }
                else {
                    clearErrorHandler(key);
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

export async function addressValidator(account) {
    const rpc = new Web3(settings.GANACHE_ADDRESS);
    if (rpc.utils.isAddress(account)) {
        return true;
    } else {
        return false;
    }
}

export async function balanceValidator(accountFrom, amountToSend){
    const rpc = new Web3(settings.GANACHE_ADDRESS);
    const balance = await rpc.eth.getBalance(accountFrom);
    const gasPrice = await rpc.eth.getGasPrice();
    const amountInWei = BigInt(rpc.utils.toWei(amountToSend, 'ether'));
    const totalCost = amountInWei + gasPrice;

    if(balance < totalCost){
        return true;
    } else {
        return false;
    }
}

export function errorHandler(form, inputName, message, errorType) {
    const elements = form.elements;
    const formElement = elements.namedItem(inputName);
    const formElementSibling = formElement.nextElementSibling;

    if (formElementSibling) {
        if (formElementSibling.classList.contains('input-error-message')) {
            formElementSibling.textContent = message;
        } else {
            errorMessage();
        }
    } else {
        errorMessage();
    }

    function errorMessage() {
        const div = document.createElement('div');
        div.classList.add('input-error-message');
        div.setAttribute('data-input-error-element', inputName)
        div.textContent = message;
        formElement.parentNode.insertBefore(div, formElement.nextElementSibling);
    }
}

function clearErrorHandler(inputName) {
    const errorMessage = document.querySelector(`[data-input-error-element="${inputName}"]`);
    if (errorMessage) {
        errorMessage.remove();
    }
}