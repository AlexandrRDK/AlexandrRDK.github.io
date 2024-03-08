import {closeModal, openModal} from './modal';
import { postData } from '../services/services';

function sendForm(formSelector) {
    const forms = document.querySelectorAll(formSelector);
    const message = {
        loading: 'icons/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            })
        });
    }

    function showThanksModal(message) {
        document.querySelector('.modal').classList.add('show');
        document.querySelector('.modal').classList.remove('hide');
        const tanksModal = document.querySelector('.modal__dialog');
        tanksModal.textContent = `${message}`;
        setTimeout(() => {
            tanksModal.textContent = ``;
            closeModal('.modal');
        }, 10000);
    }
}

export default sendForm;