//Функция-конструктор
function ElectroDevice(color, weight, inputPower) {
    this.color = color;
    this.weight = weight;
    this.inputPower = inputPower;
}

ElectroDevice.prototype.turnOn = function() {
    console.log('Устройство включено!')
}

ElectroDevice.prototype.turnOff = function() {
    console.log('Устройство выключено!')
}

//***Добавление устройства тостер***
const toster = new ElectroDevice('brown', 0.25, 2);

//Добавление собственного свойства "время выпекания" для тостера
toster.backingTime = 10;

//Добавление собственного метода "получить хлеб" для тостера
toster.getBread = function() {
    console.log('Хлеб готов!')
}


//***Добавление устройста электрочайник***
const teapot = new ElectroDevice('silver', 0.4, 4);

//Добавление собственного свойства "объем" для чайника
teapot.volume = 1.5;

//Добавление собственного метода "вскипятить воду" для чайника
teapot.boilWater = function() {
    console.log('Вода закипела!')
}


//***Добавление устройства стиральная машина */
const washingMachine = new ElectroDevice('white', 50, 100);

//Добавление собственного свойства "вместимость" для стир. машины
washingMachine.capacity = 5;

//Добавление собственного метода "стирка" для стир. машины
washingMachine.laundry = function() {
    console.log('Стирка окончена!')
}

//Добавление собственного метода "отжим" для стир. машины
washingMachine.wring = function() {
    console.log('Отжим выполнен!')
}

//Добавление собственного метода "проверка веса белья" для стир. машины
washingMachine.checkLoadWeight = function(laundryWeight) {
    if (laundryWeight > 5) {
        console.log('Стиральная машина перегружена!')
    } else {
        console.log('Стиральная машина готова к стирке!')
    }
}

//-----Блок проверки

//console.log(toster);
//console.log(teapot);
//toster.turnOn();
//teapot.turnOff();
//washingMachine.checkLoadWeight(5);
//console.log(washingMachine)





