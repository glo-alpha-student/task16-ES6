'use strict';

class First {
    hello() {
      return console.log('Привет я метод родителя!');
    }
}
class Second extends First {

    hello() {
        return super.hello(), console.log('А я наследуемый метод!');
    }
}
const second = new Second();
second.hello();
