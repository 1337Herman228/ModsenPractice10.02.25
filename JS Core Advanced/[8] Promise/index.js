// Вариант 4

// Напишите функцию, которая конвертирует
// функцию, основанную на callbacks, в
// функцию, основанную на Promises

function promisify(callbackBasedFunction) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            callbackBasedFunction(...args, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    };
}
