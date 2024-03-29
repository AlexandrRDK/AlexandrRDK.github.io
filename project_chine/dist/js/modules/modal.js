function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function modal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.addEventListener('click', (e) => {//если пользователь нажмет мимо модального окна, оно закроется
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {// если открыто модальное окно и нажата клавиша Esc
            closeModal(modalSelector);
        }
    });
}

export default modal;
export {openModal};
export {closeModal};