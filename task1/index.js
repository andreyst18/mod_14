/* Напишите функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение. */


const person = {
    county: 'Russia',
    city: 'Moscow'
}

const student = Object.create(person);

console.log(student);

student.name = 'Ivan';
student.age = 25;

function getProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, ' ', obj[key]);
        }
    }
}

getProperties(student);
