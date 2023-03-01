let oneNumber;
let twoNumber;
while (isNaN(oneNumber) || oneNumber=='') {
  oneNumber = prompt('Введите Первое число: ');
  if (isNaN(oneNumber)) alert(oneNumber + " - это не число");
}
while (isNaN(twoNumber) || twoNumber=='') {
  twoNumber = prompt('Введите Второе число: ');
  if (isNaN(twoNumber)) alert(twoNumber + " - это не число");
}
 
alert('Вы ввели числа: ' + oneNumber + ' и ' + twoNumber);
 
if (oneNumber > twoNumber){
  alert('Первое число больше второго');
}
if (oneNumber < twoNumber){
  alert('Второе число больше первого');
}
if(oneNumber === twoNumber){
  alert('числа равны');
}