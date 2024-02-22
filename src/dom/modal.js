import { shadow } from "./shadow.js";

export const modal = (contentElement) => {
    shadow('enable');

    const container = document.createElement('div');
    container.classList.add('modal-container');
    container.setAttribute('data-modal', '');

    const popup = document.createElement('div');
    popup.classList.add('modal-popup');
    popup.appendChild(contentElement);
    container.appendChild(popup);

    const closePopupBtn = document.createElement('button');
    closePopupBtn.classList.add('modal-popup__close-btn', 'modal-action-btn');
    closePopupBtn.setAttribute('data-close-all', '');
    popup.appendChild(closePopupBtn);

    const iconClose = document.createElement('i');
    iconClose.classList.add('iconoir-xmark-circle');
    closePopupBtn.appendChild(iconClose);


    document.body.appendChild(container);
}