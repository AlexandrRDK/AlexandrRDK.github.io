import culc from './modules/culc';
import cards from './modules/cards';
import modal from './modules/modal';
import sendForm from './modules/sendForm';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {//скрипт будет работать после полной загрузки страницы

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000); // через n секунд открывает модальное окно

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    culc();
    cards();
    modal('[data-modal]', '.modal', modalTimerId);
    sendForm('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    timer('.timer', '2024-08-27');
});
