let date = new Date();

let hour = date.getHours();

let minute = date.getMinutes();

let dateNow = hour + ':' + minute;

let phoneTimeElement = document.querySelector('.phone-time')

phoneTimeElement.textContent = dateNow;


let listElement = document.querySelector('.telegram-list')

let inputElement = document.querySelector('.form-input')

let buttonElement = document.querySelector('.form-button');

buttonElement.onclick = function(event) {
    event.preventDefault()
    if (inputElement.value) {
        let liElement = document.createElement('li');
        liElement.classList.add('telegram-item');
        liElement.textContent = inputElement.value;
        listElement.appendChild(liElement)
        inputElement.value = '';
    }
}


let listElement2 = document.querySelector('.telegram-list_second')

let inputElement2 = document.querySelector('.form_second-input')

let buttonElement2 = document.querySelector('.form_second-button');

buttonElement2.onclick = function(event) {
    event.preventDefault()
    if (inputElement2.value) {
        let liElement2 = document.createElement('li');
        liElement2.classList.add('telegram-item_second');
        liElement2.textContent = inputElement2.value;
        listElement.appendChild(liElement2);
        inputElement2.value = '';
    }
}