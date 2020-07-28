document.getElementById('iphone-increase').addEventListener('click', function () {
    const iphoneInput = document.getElementById('iphone-count');
    const iphoneCount = parseInt(iphoneInput.value);
    const iphoneNewCount = iphoneCount + 1;
    iphoneInput.value = iphoneNewCount;
    const iphoneTotal = iphoneNewCount * 1278;
    document.getElementById('iphone-value').innerText = '$' + iphoneTotal;



})
document.getElementById('iphone-decrease').addEventListener('click', function () {
    const iphoneInput = document.getElementById('iphone-count');
    const iphoneCount = parseInt(iphoneInput.value);
    const iphoneNewCount = iphoneCount - 1;
    iphoneInput.value = iphoneNewCount;
    const iphoneTotal = iphoneNewCount * 1278;
    document.getElementById('iphone-value').innerText = '$' + iphoneTotal;
})