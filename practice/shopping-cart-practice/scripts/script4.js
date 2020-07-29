function handleProductChange(product, isIncrease) {
    // const productInput = document.getElementById(product + '-count');
    // const productCount = parseInt(productInput.value);
    const productCount = getInputValue(product);
    // const productNewTotal = productTotal - 1;
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    document.getElementById(product + '-count').value = productNewCount;
    // const productTotal = productNewCount * 59;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 1219;
    }
    if (product == 'case') {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-value').innerText = '$' + productTotal;
    calculateTotal();
}

function calculateTotal() {
    // const phoneInput = document.getElementById('phone-count');
    // const phoneCount = parseInt(phoneInput.value);

    // const caseInput = document.getElementById('case-count');
    // const caseCount = parseInt(caseInput.value);

    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;

}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}