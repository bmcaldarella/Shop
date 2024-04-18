let numero = 0; 

function addItem() {
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            
            let productContainer = button.closest('.iphone1, .iphone2');

           
            let productName = productContainer.querySelector('h2').innerText;

            
            let message = document.createElement('div');
            message.classList.add('message');
            document.body.appendChild(message);
            message.innerHTML = `<h4>${productName} Added to cart </h4`;

            function deleteMessage(){
                setTimeout(()=>{
                    message.classList.remove('message');
                    message.innerHTML="";
                }, 3000);
            }
            deleteMessage(); 

            function trolleyAdd(){
                let trolley = document.querySelector(".trolley-shop").parentElement;
                let numberAdd = document.createElement('div');
                numberAdd.classList.add('numberAdd');
                numero++;
                numberAdd.innerHTML = `<small>${numero}</small>`;
                trolley.appendChild(numberAdd);
            }
            
            trolleyAdd();
            
        });


    });
}

addItem();



