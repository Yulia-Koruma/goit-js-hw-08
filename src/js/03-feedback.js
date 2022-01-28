import throttle from 'lodash.throttle';

const feedBackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const { email, message } = feedBackForm;
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (formData) {
    email.value = formData.email;
    message.value = formData.maessage;
}

feedBackForm.addEventListener('submit', e => {
    e.preventDefault();

    const savedInput = JSON.parse(localStorage.getItem(STORAGE_KEY)); 
    console.log(savedInput);
    
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY );
}
);

const onTextareaInput = e => {
    const { email, message } = feedBackForm.elements;
    const savedInput = {
        email: email.value,
        message: message.value
    };
    localStorage.setItem(STORAGE_KEY , JSON.stringify(savedInput));
}

feedBackForm.addEventListener('input', throttle(onTextareaInput, 500));