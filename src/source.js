const nameAndAddress = () => {
    prompt("Insira o seu nome:");
    prompt("Insira o seu endereço:");
}

const handleButton = () => {
    const btn = document.getElementById('confirmation-btn')
    const checkedItems = Array.from(document.getElementsByTagName("input"))
                              .reduce((acc,element) => {
                                  return acc+(element.checked?1:0);
                                },0);
    if (checkedItems === 3) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
};