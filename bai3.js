function guessGame() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let guess;

    do {
        guess = prompt("Nhập số bạn đoán (từ 1 đến 10):");
    } while (parseInt(guess) !== randomNumber);

    alert("Chúc mừng! Bạn đã đoán đúng số " + randomNumber);
}

