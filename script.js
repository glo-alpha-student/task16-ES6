'use strict';

class First {
    hello() {
        console.log('Привет я метод родителя!');
    }
}
class Second extends First {
    hello() {
        console.log('А я наследуемый метод!');
    }
}
const family = [new First(), new Second()];

family.forEach((message) => {
    message.hello();
});
