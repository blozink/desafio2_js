// Ejercicio 1
function toggleBorder(image) {
    image.classList.toggle('with-border');
}

// Ejercicio 2
function calculateStickers() {
    const sticker1 = parseInt(document.getElementById('sticker1').value) || 0;
    const sticker2 = parseInt(document.getElementById('sticker2').value) || 0;
    const sticker3 = parseInt(document.getElementById('sticker3').value) || 0;
    const totalStickers = sticker1 + sticker2 + sticker3;

    const resultParagraph = document.getElementById('stickerResult');
    if (totalStickers <= 10) {
        resultParagraph.textContent = `Llevas ${totalStickers} stickers`;
    } else {
        resultParagraph.textContent = 'Llevas demasiados stickers';
    }
}

// Ejercicio 3
function checkPassword() {
    const digit1 = document.getElementById('digit1').value;
    const digit2 = document.getElementById('digit2').value;
    const digit3 = document.getElementById('digit3').value;
    const password = digit1 + digit2 + digit3;

    const resultParagraph = document.getElementById('passwordResult');
    if (password === '911') {
        resultParagraph.textContent = 'password 1 correcto';
    } else if (password === '714') {
        resultParagraph.textContent = 'password 2 correcto';
    } else {
        resultParagraph.textContent = 'password incorrecto';
    }
}
