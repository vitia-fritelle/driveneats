const MenuCard = {
    title:'',
    price:''
}

const getByPrompt = (text) => {
    //getByPrompt(text:String) -> String
    const result = prompt(text);
    return result?result:'';
};

const getTotal = () => getCheckedItemsProperties().reduce((acc, element) => {
    //getTotal() -> number
    return acc+element.price
},0);

const getInputs = () => Array.from(document.getElementsByTagName("input")); 
    //getInputs() -> Array

const getLabels = () => Array.from(document.getElementsByTagName("label"));
    //getLabels() -> Array

const getCheckedInputs = () => getInputs().filter(input => {
    //getCheckedInputs -> Array
    return input.checked === true;
});
    
const getCheckedLabels = () => getCheckedInputs().map(checkedInput => {
    //getCheckedLabels() -> Array
    return getLabels().filter(label => label.htmlFor === checkedInput.id)[0];
});
    
const getCheckedItems = () => getCheckedLabels().map(label => {
    //getCheckedItems() -> Array
    return Array.from(label.children[0].children);
})

const getCheckedItemsProperties = () => {
    //getCheckedItemsProperties() -> Array[MenuCard]
    return getCheckedItems().map(card => {
        const aux = Object.create(MenuCard);
        const cardName = card.filter(element => {
            return element.classList.contains('menu-card-name');
        })[0];
        aux.title = cardName.innerText;
        const cardPrice = card.filter(element => {
            return element.classList.contains('menu-card-price');
        })[0];
        aux.price = parseFloat(cardPrice.innerText.replaceAll(',','.'));
        return aux;
    });
}

//refatorar depois para alterar o innerHTML
const setCheckedItemsListElement = () => {
    //setCheckedItemsList() -> null
    const checkedItemsProperties = getCheckedItemsProperties();
    const checkedItemsList = document.getElementById("checked-items-list");

    Array.from(checkedItemsList.children).forEach((listItem,i,vector) => {
        if (vector.length-1 == checkedItemsProperties.length){
            Array.from(listItem.children).forEach((element,j) => {
                if (i === vector.length-1) {
                    (j === 1) && (element.innerText = toMoneyForm(getTotal()));
                } else if (j === 0) {
                    element.innerText = checkedItemsProperties[i].title;
                } else {
                    element.innerText = toMoneyForm(checkedItemsProperties[i]
                                                    .price);  
                }
            });
        }
    });
    return null;
}

const setButtonState = () => {
    //setButtonState() -> null
    const btn = document.getElementById('submit-btn')
    const numberCheckedItems = getCheckedInputs().length;
    if (numberCheckedItems === 3) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
    setCheckedItemsListElement();
    return null;
};


const setWhatsAppLink = () => {
    const properties = getCheckedItemsProperties();
    const message = `
    Olá, gostaria de fazer o pedido:
    - Prato: ${properties[0].title}
    - Bebida: ${properties[1].title}
    - Sobremesa: ${properties[2].title}
    Total: R$ ${getTotal().toFixed(2)}
    
    Nome: ${clientName}
    Endereço: ${clientAddress}`;
    const numero = 5582999999999;
    return `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
}

const sendOrder = () => null;

const submitOrder = () => {
    sendOrder();
    document.getElementById('send-to-whatsapp').href = setWhatsAppLink();
};

const toggleOrderReview = () => {
    //reviewOrder() -> null
    const state = document.getElementById("background-order-review").hidden;
    document.getElementById("background-order-review").hidden = !state;
    return null;
};

const toMoneyForm = (money) => money.toFixed(2).replaceAll('.',',');

var clientName = getByPrompt("Insira o seu nome: ")||'';
var clientAddress = getByPrompt("Insira o seu endereço: ")||'';

//Quando eu sou redirecionado, o site não carrega o estado do botão...
//Tenho de ver como solucionar isso aqui...
