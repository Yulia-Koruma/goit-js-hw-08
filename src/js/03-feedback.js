// HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle';

const feedBackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const { email, message } = feedBackForm;

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (formData) {
    email.value = formData.email;
    message.value = formData.message;
}

feedBackForm.addEventListener('submit', e => {
    e.preventDefault();

    const savedInput = JSON.parse(localStorage.getItem(STORAGE_KEY)); 
    console.log(savedInput);
    
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY );
}
);

feedBackForm.addEventListener('input', throttle(e => {
  const { email, message } = feedBackForm.elements;
    const savedInput = {
        email: email.value,
        message: message.value
    };
    localStorage.setItem(STORAGE_KEY , JSON.stringify(savedInput));
}, 500));
