document.getElementById('phone-increase').addEventListener('click', function () {
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount + 1;
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1278;
    document.getElementById('phone-value').innerText = '$' + phoneTotal;



})

document.getElementById('phone-decrease').addEventListener('click', function () {
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount - 1;
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1278;
    document.getElementById('phone-value').innerText = '$' + phoneTotal;
})

document.getElementById('case-increase').addEventListener('click', function () {
    const caseInput = document.getElementById('case-input');
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount + 1;
    caseInput.value = caseNewCount;
    const caseValue = caseNewCount * 59;
    document.getElementById('case-value').innerText = '$' + caseValue;
})

document.getElementById('case-decrease').addEventListener('click', function () {
    const caseInput = document.getElementById('case-input');
    const caseTotal = parseInt(caseInput.value);
    const caseNewTotal = caseTotal - 1;
    caseInput.value = caseNewTotal;
    const caseValue = caseNewTotal * 59;
    document.getElementById('case-value').innerText = '$' + caseValue;

})