// Вариант 4

// Создайте класс Book со свойствами названия,
// автора и года публикации. Включите метод
// отображения сведений о книге. Создайте
// подкласс под названием «Ebook», который
// наследуется от класса «Book» и включает
// дополнительное свойство для цены книги.
// Переопределите метод отображения, чтобы
// включить цену книги. Создайте экземпляр
// класса «Электронная книга» и отобразите его
// сведения

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    displayInfo() {
        return `Название: ${this.title}, Автор: ${this.author}, Год публикации: ${this.year}`;
    }
}

class Ebook extends Book {
    constructor(title, author, year, price) {
        super(title, author, year);
        this.price = price;
    }

    displayInfo() {
        return `${super.displayInfo()}, Цена: $${this.price}`;
    }
}

const myEbook = new Ebook(
    "JavaScript: The Good Parts",
    "Douglas Crockford",
    2008,
    9.99
);

console.log(myEbook.displayInfo());
