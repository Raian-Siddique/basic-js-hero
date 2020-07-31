// document.getElementById('phone-increase').addEventListener('click', function () {
//     handlePhoneChange(true);
// })

// document.getElementById('phone-decrease').addEventListener('click', function () {
//     handlePhoneChange(false);
// });

function handlePhoneChange(isIncrease) {
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    // const phoneNewCount = phoneCount - 1;
    let phoneNewCount = phoneCount;
    if (isIncrease == true) {
        phoneNewCount = phoneCount + 1;
    }
    if (isIncrease == false && phoneCount > 0) {
        phoneNewCount = phoneCount - 1;
    }
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1278;
    document.getElementById('phone-value').innerText = '$' + phoneTotal;
}

// document.getElementById('case-increase').addEventListener('click', function () {
//     handleProductChange(true);
// })

// document.getElementById('case-decrease').addEventListener('click', function () {

//     handleProductChange(false); //jokhn increase korbe tokhn ki barbe ? na barbe na so false.

// });

function handleProductChange(isIncrease) {
    const caseInput = document.getElementById('case-input');
    const caseCount = parseInt(caseInput.value);
    // const caseNewTotal = caseTotal - 1;
    let caseNewCount = caseCount;
    if (isIncrease == true) {
        caseNewCount = caseCount + 1;
    }
    if (isIncrease == false && caseCount > 0) {
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById('case-value').innerText = '$' + caseTotal;
}