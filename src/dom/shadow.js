export const initShadow = () => {

    if (!document.querySelector('.shadow')) {
        const shadow = document.createElement('div');
        shadow.classList.add('shadow');
        shadow.setAttribute('data-shadow-active', 'false');
        document.body.appendChild(shadow);
    }
}

export const shadow = (status) => {

    const shadowElement = document.querySelector('.shadow');

    switch (status) {
        case 'enable':
            shadowElement.setAttribute('data-shadow-active', 'true');
            break;
        case 'disable':
            shadowElement.setAttribute('data-shadow-active', 'false');
            break;
    }

}