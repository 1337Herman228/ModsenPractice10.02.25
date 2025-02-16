// Вариант 4

// Используя Promise, выведите числа от 1 до
// 10 через секунду каждый раз.
// Ограничения: setTimeout и new Promise() мы
// можно вызывать только один раз

function printNumbers() {
    return new Promise((resolve) => {
        let number = 1;

        const intervalId = setInterval(() => {
            console.log(number);
            if (number === 10) {
                clearInterval(intervalId);
                resolve();
            }
            number++;
        }, 1000);
    });
}

// Проверка
printNumbers().then(() => {
    console.log("Finished printing numbers.");
});
