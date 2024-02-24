export const transactionNotice = (data) => {
    const notice = document.createElement('div');
    notice.classList.add('transaction-notice');

    const header = document.createElement('div');
    header.classList.add('transaction-notice__header');
    notice.appendChild(header);

    const icon = document.createElement('i');
    icon.textContent = '💸';
    icon.classList.add('transaction-notice__icon');
    header.appendChild(icon);

    const transactionStatus = document.createElement('span');
    transactionStatus.classList.add('transaction-notice__status');
    transactionStatus.textContent = 'Transaction completed';
    header.appendChild(transactionStatus);

    const body = document.createElement('div');
    body.classList.add('transaction-notice__body');
    notice.appendChild(body);

    const list = document.createElement('ul');
    body.appendChild(list);

    const valueTransfered = document.createElement('li');
    valueTransfered.textContent = `Transfered: ${data.valueTransfered}`;
    list.appendChild(valueTransfered);

    const fromAccount = document.createElement('li');
    fromAccount.textContent = `From account: ${data.from}`;
    list.appendChild(fromAccount);

    const toAccount = document.createElement('li');
    toAccount.textContent = `To account: ${data.to}`;
    list.appendChild(toAccount);

    const blockNumber = document.createElement('li');
    blockNumber.textContent = `Block number: ${data.blockNumber}`;
    list.appendChild(blockNumber);

    const gas = document.createElement('li');
    gas.textContent = `Gas: ${data.gas}`;
    list.appendChild(gas);

    return notice;
}