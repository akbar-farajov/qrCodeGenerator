// const qrImage = document.getElementById("qr-img")
const inputText = document.getElementById('input-text');
const imgBox = document.querySelector('.img-box');
const qrImg = document.getElementById('qr-img');

function generateQr() {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${inputText.value}`;
    inputText.value = '';
}
