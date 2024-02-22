import { shadow } from "../dom/shadow.js";

const clickHandler = () => {

    disableAllElements();

    document.addEventListener('click', (e) => {

        if (e.target.closest('[data-pointer]') || e.target.hasAttribute('data-pointer')) {
            const targetElementName = e.target.closest('[data-pointer]').getAttribute('data-pointer');
            const targetElement = document.querySelector(`[data-target="${targetElementName}"]`);

            if (targetElement.getAttribute('data-target-active') === 'false') {
                targetElement.setAttribute('data-target-active', 'true');
                shadow('enable');
            } else {
                targetElement.setAttribute('data-target-active', 'false');
            }
        }

        if (e.target.closest('[data-shadow-active]') || e.target.hasAttribute('data-shadow-active')) {
            disableAllElements();
        }

        if (e.target.closest('[data-close-all]') || e.target.hasAttribute('data-close-all')) {
            disableAllElements();
        }

    });

    function disableAllElements() {

        const targetElements = document.querySelectorAll('[data-target]');
        targetElements.forEach(element => {
            element.setAttribute('data-target-active', 'false');
        });

        const pointerElements = document.querySelectorAll('[data-pointer]');
        pointerElements.forEach(element => {
            element.setAttribute('data-pointer-active', 'false');
        });

        const modals = document.querySelectorAll('[data-modal]');
        modals.forEach(modal => {
            modal.remove();
        });

        shadow('disable');

    }

}

export default clickHandler;