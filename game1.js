console.log('привет');
gNumber();

function gNumber() {
  var result = parseInt(prompt('Введи свой номер телефона (в формате 8 999 111 22 33, без пробелов)'))

  if (result == 89189665646) {
    alert('Здравия желаю, товарищ старший лейтенант запаса ВКС РФ!');
    location.reload(); // перезагрузка (обновление) страницы
  }
  // телефон мамы
  else if (result == 89882448889){
    alert('Приветик, мам!');
    location.reload(); // перезагрузка (обновление) страницы
  }
  // телефон Ксении
  else if (result == 89951222354){
    alert('Приветики, сестра!');
    location.reload(); // перезагрузка (обновление) страницы
  }
  // телефон мой
  else if (result == 89951222866){
    alert('Здарова, Гавнюк!');
    location.reload(); // перезагрузка (обновление) страницы
  }
  // не наши номера
  else {
    alert('Ты не из нашей семьи, потеряйся отсюдова!!!!!!!!!!');
    location.reload(); // перезагрузка (обновление) страницы
  }
}
