let date = new Date();

let hour = date.getHours();

let minute = date.getMinutes();

let dateNow = hour + ':' + minute;

let phoneTimeElement = document.querySelector('.phone-time')

phoneTimeElement.textContent = dateNow;


let listElement = document.querySelector('.telegram-list')

let inputElement = document.querySelector('.form-input')

let buttonElement = document.querySelector('.form-button');

// new array
let messages = [];

buttonElement.onclick = function(event) {
    event.preventDefault()
    if (inputElement.value) {
        messages.push({
            id: messages.length + 1,
            messageText: this.textContent,
            messageOwner: 'Azizjon'
        })
        let liElement = document.createElement('li');
        liElement.classList.add('telegram-item');
        liElement.textContent = inputElement.value;
        listElement.appendChild(liElement)
        inputElement.value = '';
        console.log(messages);
        
        liElement.setAttribute('id', `message#${messages.length + 1}`)
        
        // let delateElement = document.createElement('button');
        // delateElement.classList.add('dalete-button');
        // liElement.appendChild(delateElement);
        
        // delateElement.addEventListener('click', function(e){
        //     const li = e.target.parentElement;
        //     li.parentNode.removeChild(li)
        // })
        
        window.location.href = `#message#${messages.length + 1}`;
        
        
        // create time 
        let sendTime = document.createElement('time');
        sendTime.textContent = dateNow;
        sendTime.classList.add('send-time');
        liElement.appendChild(sendTime);
        
        moment.locale('uz-latn')
        let hozir = moment().format('LT');
        
        let dataNow= document.getElementsByClassName("phone-time");
        dataNow = moment().format('h:mm dddd');
        
        // send by enter shift
        inputElement.addEventListener('keyup', function(e){
            if (e.keyCode == 13 && e.shiftKey){
                let liElement = document.createElement('li');
                liElement.classList.add('telegram-item');
                liElement.textContent = inputElement.value;
                listElement.appendChild(liElement)
                inputElement.value = '';
            }
            
        })
        
        // context menu
        liElement.addEventListener('contextmenu', e => {
            e.preventDefault()
            let contextMenu = document.createElement('ul');
            contextMenu.classList.add('context-list');
            liElement.appendChild(contextMenu)
            let contextButton = document.createElement('li');
            contextButton.classList.add('context-item');
            contextButton.textContent = 'Delete';
            contextMenu.appendChild(contextButton);
            
            // context button
            contextButton.addEventListener('click', e => {
                listElement.removeChild(liElement)
            })
            
            // remove context-menu
            document.body.addEventListener('click', e => {
                contextMenu.style.display = 'none';
            })
        })
        
        
        
        
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
        
        liElement2.setAttribute('id',`message#${messages.length + 1}`);
        
        inputElement2.value = '';
        
        let delateElement = document.createElement('button');
        delateElement.classList.add('dalete-button');
        liElement2.appendChild(delateElement);
        
        delateElement.addEventListener('click', function(e){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li)
        })
        
        // create time 
        let sendTime = document.createElement('time');
        sendTime.textContent = dateNow;
        sendTime.classList.add('send-time');
        liElement2.appendChild(sendTime);
        
        moment.locale('uz-latn')
        let hozir = moment().format('LT');
        
        let dataNow= document.getElementsByClassName("phone-time");
        dataNow = moment().format('h:mm dddd');
        
        window.location.href = `#message#${messages.length + 1}`
        inputElement2.focus()
        
        // moment.locale('uz-latn')
        // let hozir = moment().format('LT');
        
        // let dataNow= document.getElementsByClassName("phone-time");
        // dataNow = moment().format('h:mm dddd');
        
    }
}

// context menu
// let liElement = document.querySelector('.telegram-item ')

// liElement.addEventListener('contextmenu', e => {
//     console.log(e);
// })
