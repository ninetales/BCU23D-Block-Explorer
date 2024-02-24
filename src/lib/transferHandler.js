import { settings } from "../utilities/state.js";
import { modal } from "../dom/modal.js";
import { transactionNotice } from "../dom/notice.js";
import { validateTransaction } from "./formHandler.js";
import { startLoadingAnimation, stopLoadingAnimation } from "../dom/shared.js";

const initTransferHandler = () => {

    const form = document.querySelector('#transfer-form');
    const submitBtn = document.querySelector('#transfer-submit-btn');
    form.addEventListener('submit', async (e) => {
        startLoadingAnimation(submitBtn);

        e.preventDefault();

        if (await validateTransaction(form)) {
            sendTransaction();
        }

        stopLoadingAnimation(submitBtn)
    });

    async function sendTransaction() {
        const rpc = new Web3(settings.GANACHE_ADDRESS);

        const formData = new FormData(form);

        const fromAccount = formData.get('fromAccount');
        const toAccount = formData.get('toAccount');
        const amount = formData.get('amount');

        try {
            const trx = await rpc.eth.sendTransaction({
                from: fromAccount,
                to: toAccount,
                value: rpc.utils.toWei(amount, 'ether'),
            });

            // Check if transaction was successful
            const receipt = await rpc.eth.getTransactionReceipt(trx.transactionHash);
            if (Number(receipt.status)) {
                const transaction = await rpc.eth.getTransaction(trx.transactionHash);

                const result = {
                    blockNumber: Number(transaction.blockNumber),
                    from: transaction.from,
                    to: transaction.to,
                    valueTransfered: `${parseInt(rpc.utils.fromWei(transaction.value, 'ether'))} ETH`,
                    gas: `${transaction.gas} WEI`,
                }

                modal(transactionNotice(result));
                form.reset();
            }

        } catch (error) {
            console.log('something went wrong');
            console.log(error);
        }
    }

}

export default initTransferHandler;