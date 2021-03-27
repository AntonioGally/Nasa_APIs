var data = new Date();
export function FormateDateInput(date: any) {
  var arr = [...date];
  var year = arr[6] + arr[7] + arr[8] + arr[9];
  var month = arr[3] + arr[4];
  var day = arr[0] + arr[1];
  if (Number(year) <= 1996) {
    return "O ano mínimo é 1996";
  } else if (Number(year) > data.getFullYear()) {
    return "Insira um ano válido";
  } else if (
    Number(year) === data.getFullYear() &&
    Number(month) > data.getMonth() + 1 &&
    Number(day) > data.getDay()
  ) {
    return "Insira um ano válido";
  } else if (
    Number(year) > data.getFullYear() ||
    Number(month) > 12 ||
    Number(day) > 30
  ) {
    return "Insira um ano válido";
  } else {
    return `${year}-${month}-${day}`;
  }
}
export function FormateDateApi(date: any) {
  var arr = [...date];
  var year = arr[0] + arr[1] + arr[2] + arr[3];
  var month = arr[5] + arr[6];
  var day = arr[8] + arr[9];
  return `${day}/${month}/${year}`;
}
export function FormateDateDonki(date: any) {
  var year = date[0] + date[1] + date[2] + date[3];
  var month = date[5] + date[6];
  var day = date[8] + date[9];

  return `${day}/${month}/${year}`;
}
export function MonthVerification(date: any) {
  //date = {start_date: "20/11/2020", end_date: "20/12/2021"}

  var arrStartDate = [...date.start_date];
  var arrEndDate = [...date.end_date];

  var auxStartDay = arrStartDate[0] + arrStartDate[1];
  var auxStartMonth = arrStartDate[3] + arrStartDate[4];
  var auxStartYear =
    arrStartDate[6] + arrStartDate[7] + arrStartDate[8] + arrStartDate[9];

  var auxEndDay = arrEndDate[0] + arrEndDate[1];
  var auxEndMonth = arrEndDate[3] + arrEndDate[4];
  var auxEndYear =
    arrEndDate[6] + arrEndDate[7] + arrEndDate[8] + arrEndDate[9];

  if (Number(auxStartYear) <= 2010) {
    //Aparentemente só existem registros a partir de 2010
    return false;
  } else if (
    Number(auxEndYear) !== Number(auxStartYear) &&
    Number(auxStartMonth) !== 12
  ) {
    //se os anos forem diferentes e o mes de inicio nao for mes 12, então ta inválido
    return false;
  } else {
    if (auxStartMonth === auxEndMonth) {
      return true;
    } else if (Number(auxStartDay) - Number(auxEndDay) >= 0) {
      if (Number(auxEndMonth) - Number(auxStartMonth) === 1) {
        return true;
      } else if (Number(auxStartMonth) === 12 && Number(auxEndMonth) === 1) {
        return true;
      } else return false;
    } else return false;
  }

  // se os meses forem iguais = válido
  // se os meses nao forem iguais, eu preciso saber se a diferença entre os dias é maior que 0, se for, válido, se n for, significa que é mais de um mês
  // se os dias são ok's, verifico se o intervalo dos meses é de um mês... Mas isso tem uma exceção
  // se os meses não forem válidos, eu vejo se o usuário colocou um intervalo entre anos (mes 12 e mes 1)
}
