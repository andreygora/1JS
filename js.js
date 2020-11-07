let en = ["mon", "tue", "wen", "thu", "fri", "sat", "sun"];
let ua = ["понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота", "неділя"];
let ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
let d = prompt();
let l = prompt();
switch (l) {
    case "en":alert(en[d - 1 ]) ;
    break;
    case "ru":alert(ru[d - 1]) ;
    break;
    case "ua":alert(ua[d - 1 ]);
     break;
    default: alert("Ведите язык правильно!");
  }