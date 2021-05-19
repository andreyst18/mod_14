/* Напишите функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.
*/


function hasProperty(str, obj) {
    for (let key in obj) {
        if (key === str) {
            return true;
        }
    }
    return false;
}

const name1 = 'weight';
const name2 = 'height';
const box = {
    height: 20,
    color: 'blue',
    isFragile: true
}

console.log(hasProperty(name1, box));
console.log(hasProperty(name2, box));



