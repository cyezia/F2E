# call和apply

- 更改this指向

- 写法，例如：
  
  function Car(brand, color){ }

  var newCar = {};

  Car.call(newCar, 'Benz', 'color');

  Car.apply(newCar, ['Benz', 'color']);
