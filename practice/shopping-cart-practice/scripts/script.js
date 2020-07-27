document.getElementById('iphone-plus').addEventListener('click', function () {
    const iphoneInput = document.getElementById('iphone-count');
    const iphoneCount = parseInt(iphoneInput.value);
    const iphoneNewCount = iphoneCount + 1;
    iphoneInput.value = iphoneNewCount;
    const iphoneTotal = iphoneNewCount * 1278;
    document.getElementById('iphone-value').innerText = '$' + iphoneTotal;



})
// document.getElementById('button-decrease').addEventListener('click', function () {
//     const iphoneInput = document.getElementById('iphone-count');
//     const iphoneCount = parseInt(iphoneInput.value);
//     const iphoneNewCount = iphoneCount - 1;
//     iphoneInput.value = iphoneNewCount;
//     const iphoneTotal = iphoneNewCount * 1278;
//     document.getElementById('case-total').innerText = '$' + caseTotal;
// })