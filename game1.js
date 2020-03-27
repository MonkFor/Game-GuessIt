var number; // число
var attempts = 0; // кол-во попыток

number = Math.round(1000 + Math.random()*(9999-1000));
gNumber();

function gNumber() {
  attempts++;
  var result = parseInt(prompt('Введите число (-1 -Закончить игру), 0'))

  // введено не число
  if (result == 0 || isNaN(result)){
    alert('Вы ввели не число, пожалуйста, введите число');
    gNumber();
  }
  // число угадано
  else if (number == result) {
    alert('Поздравляем, Вы угадали число. Число попыток: ' + attempts)
    location.reload(); // перезагрузка (обновление) страницы
  }
  // выход из игры
  else if (result == -1){
    alert('Спасибо за игру');
  }
  // сравнение
  else {
    if (result>number) {
      alert('Ваше число больше заданного');
    }
    else {
      alert('Ваше число меньше заданного');
    }
    gNumber();
  }
}
