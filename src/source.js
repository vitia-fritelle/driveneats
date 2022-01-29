const MenuCard = {
    title:'',
    price:0
}

var clientName;
var clientAddress;

/**
 * Gets text result by prompt.
 * @param {string} text 
 * @returns {string}
 */
const getByPrompt = (text) => {
    const result = prompt(text);
    return result?result:'';
};

/**
 * Gets the total price of the checked items
 * @returns {number}
 */
const getTotal = () => getCheckedItemsProperties().reduce((acc, element) => {
    return acc+element.price
},0);

/**
 * Gets an array with all the inputs of the document
 * @returns {Array<HTMLElement>}
 */
const getInputs = () => Array.from(document.getElementsByTagName("input")); 

/**
 * Gets an array with all the labels of the document
 * @returns {Array<HTMLElement>}
 */
const getLabels = () => Array.from(document.getElementsByTagName("label"));

/**
 * Gets a list of inputs that are checked
 * @returns {Array<HTMLElement>}
 */
const getCheckedInputs = () => getInputs().filter(input => {
    return input.checked === true;
});

/**
 * Gets an array of labels associated with checked inputs
 * @returns {Array<HTMLElement>}
 */
const getCheckedLabels = () => getCheckedInputs().map(checkedInput => {
    return getLabels().filter(label => label.htmlFor === checkedInput.id)[0];
});

/**
 * Gets an array of items associated with checked inputs
 * @returns {Array<HTMLElement>}
 */
const getCheckedItems = () => getCheckedLabels().map(label => {
    return Array.from(label.children[0].children);
})

/**
 * Gets an array of items' properties title and price. The items are 
 * associated with checked inputs
 * @returns {Array<MenuCard>}
 */
const getCheckedItemsProperties = () => {
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

/**
 * Gets <ul> element which has an id="checked-items-list", and puts 
 * price and name information of checked items inside its items' spans.
 * @returns {null}
 */
const setElementCheckedItemsList = () => {
    const checkedItemsProperties = getCheckedItemsProperties();
    const checkedItemsList = document.getElementById("checked-items-list");

    Array.from(checkedItemsList.children).forEach((listItem,i,vector) => {
        if (vector.length-1 === checkedItemsProperties.length){
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

/**
 * Changes button's state from disabled to enabled when the  
 * number of checked items gets to 3
 * @returns {null}
 */
const setButtonState = () => {
    const btn = document.getElementById('submit-btn')
    const numberCheckedItems = getCheckedInputs().length;
    if (numberCheckedItems === 3) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
    setElementCheckedItemsList();
    return null;
};

/**
 * Submits the order, and brings the user to WhatsApp
 * @returns {null}
 */
const submitOrder = () => {
    sendOrder();
    document.getElementById('send-to-whatsapp').href = makeWhatsAppLink();
    return null
};

/**
 * Changes the state of review order page. Switches between hidden, 
 * and unconcealed.
 * @returns {null}
 */
const toggleOrderReview = () => {
    const state = document.getElementById("background-order-review").hidden;
    document.getElementById("background-order-review").hidden = !state;
    return null;
};

/**
 * Sets clientName variable
 * @return {null} 
 */
const setName = () => {
    clientName = getByPrompt("Insira o seu nome: ")||'';
    return null;
}

/**
 * Sets clientAddress variable
 * @return {null} 
 */
const setAddress = () => {
    clientAddress = getByPrompt("Insira o seu endereço: ")||'';
    return null;
}

//Utils
/**
 * Transform money value to two decimal places in portuguese format.
 * @param {number} money [Money value]
 * @return {string} [Money value with two decimal 
 * places in portuguese format]
 */
const toMoneyForm = (money) => money.toFixed(2).replaceAll('.',',');

/**
 * 
 * @returns {string} WhatsApp Link - Link that gets one to WhatsApp, with
 * one's order and identification.
 */
const makeWhatsAppLink = () => {
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

/**
 * Ainda falta implementar. 
 * Sends the order to the server
 * @returns {null}
 */
 const sendOrder = () => null;