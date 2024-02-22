export const startLoadingAnimation = (targetElement) => {
    targetElement.classList.add('loading');
}

export const stopLoadingAnimation = (targetElement) => {
    targetElement.classList.remove('loading');
}

export const transactionAccordion = () => {

    const li = document.createElement('li');
    li.classList.add('accordion');

    const header = document.createElement('div');
    header.classList.add('accordion__header');
    header.textContent = 'Header demo';
    li.appendChild(header);

    const body = document.createElement('div');
    body.classList.add('accordion__body');
    li.appendChild(body);

    const content = document.createElement('div');
    content.classList.add('accordion__content');
    content.textContent = 'Dummy content';
    body.appendChild(content);

    header.addEventListener('click', () => {
        if (body.style.maxHeight) {
            body.style.maxHeight = null;
        } else {
            body.style.maxHeight = body.scrollHeight + "px";
        }
    });

    return li;

}