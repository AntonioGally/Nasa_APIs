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
