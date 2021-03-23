export function generateDate() {
  var data = new Date();
  var minDay = Math.ceil(1);
  var maxDay = Math.ceil(28);
  var day = Math.floor(Math.random() * (maxDay - minDay)) + minDay;

  var pad = "00";
  var newDay = (pad + day).slice(-pad.length); // Se o dia for menor que 10 eu adiciono um zero à esquerda, essa verificação eu faço no obj

  var minMonth = Math.ceil(1);
  var maxMonth = Math.ceil(12);
  var month = Math.floor(Math.random() * (maxMonth - minMonth)) + minMonth;

  var newMonth = (pad + month).slice(-pad.length); // Se o mês for menor que 10 eu adiciono um zero à esquerda, essa verificação eu faço no obj

  var minYear = Math.ceil(1997);
  var maxYear = Math.ceil(data.getFullYear() - 1);
  var year = Math.floor(Math.random() * (maxYear - minYear)) + minYear;
  return `${day < 10 ? newDay : day}/${month < 10 ? newMonth : month}/${year}`;
}
