// Вариант 4

// Создайте функцию и внутри неё объявите
// переменные с использованием var, let и
// const. Попробуйте обратиться к этим
// переменным вне функции. Какие
// переменные будут видны снаружи функции,
// а какие нет?

const fun = () => {
    var a = 1;
    let b = 2;
    const c = 3;
};

fun();

console.log(a); // ReferenceError: a is not defined
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined

// Ни одна из переменных не будет видна снаружи функции
