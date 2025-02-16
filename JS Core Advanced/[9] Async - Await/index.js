// Вариант 4

// Напишите функцию fetchUserData, которая
// использует async/await для загрузки данных
// о пользователе с сервера по его
// идентификатору. Функция должна
// принимать идентификатор пользователя в
// качестве аргумента и возвращать объект с
// данными о пользователе

async function fetchUserData(userId) {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(
                `Failed to fetch user data: ${response.statusText}`
            );
        }

        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}

// Для проверки делаем асинхронную IIFE функцию и выводим результат в консоль
(async () => {
    try {
        const userData = await fetchUserData(1);
        console.log("User Data:", userData);
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
})();
