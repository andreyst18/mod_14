/* Напишите функцию, которая создает пустой объект, но без прототипа. */

function createObject() {
    let result = Object.create(null);
    return result;
}

console.log(createObject());