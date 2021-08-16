
// *? Task: Владельцам Grand Mate Hotel нравятся работы наших студентов. У них есть еще несколько заказов для нас.

// Напиши функцию-валидатор бронирований canTheyBook, которая получает количество взрослых adultsCount и детей childrenCount и возвращает true, если выполнены все условия:

// номера в отеле вмещают не более 8 человек
// должен быть как минимум один взрослый
// на одного взрослого может быть не более двух детей
// Если какой-то аргумент не передан, считай, что он равен 0.

// Примеры:

// canTheyBook(0, 2) === false - 0 взрослых, 2 ребенка. Нарушение правил отеля.
// canTheyBook(2, 4) === true - 2 взрослых, 4 ребенка. Бронирование разрешено.
// canTheyBook(2) === true - 2 взрослых. Бронирование разрешено.
// canTheyBook(9) === false - 9 взрослых. Превышено количество людей для одной комнаты.


// Solution 1


const canTheyBook = (adultsCount = 0, childrenCount = 0) => {
  if ((adultsCount >= 1)
  && ((childrenCount + adultsCount) <= 8)
  && ((childrenCount / adultsCount) <= 2)) {
    return true;
  }

  return false;
};


console.log(canTheyBook(0,2));
console.log(canTheyBook(2,4));
console.log(canTheyBook(9));
console.log(canTheyBook(2));
console.log(canTheyBook(1,2));
console.log(canTheyBook(4,0));
console.log(canTheyBook(7,2));
console.log(canTheyBook(3,1));

// ! Explanation:Используем стрелочную функцию и if проверку количества