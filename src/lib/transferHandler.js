import { settings } from "../utilities/state.js";
import { modal } from "../dom/modal.js";
import { transactionNotice } from "../dom/notice.js";
import { validateTransaction } from "./formHandler.js";

const initTransferHandler = () => {

    const rpc = new Web3(settings.GANACHE_ADDRESS);

    const form = document.querySelector('#transfer-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateTransaction(form)) {
            // console.log('the form is successfull!');
            sendTransaction();
        } else {
            // console.log('failed validation');
        }
    });

    async function sendTransaction() {
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

            // Check if transaction were successful
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