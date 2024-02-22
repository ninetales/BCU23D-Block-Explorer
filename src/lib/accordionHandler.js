const accordionList = () => {

    const accordions = document.querySelectorAll('.accordions');
    accordions.forEach(list => {
        const listItems = list.querySelectorAll('li');
        listItems.forEach(item => {
            item.children[0].addEventListener('click', () => {
                console.log(item.children[1]);
                if (item.children[1].style.maxHeight) {
                    item.children[1].style.maxHeight = null;
                } else {
                    item.children[1].style.maxHeight = item.children[1].scrollHeight + "px";
                }
            });
        });
    });

}

export default accordionList;