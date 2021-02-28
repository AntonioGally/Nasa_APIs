export function FormateDateInput(date: any) {
  var arr = [...date];
  var year = arr[6] + arr[7] + arr[8] + arr[9];
  var month = arr[3] + arr[4];
  var day = arr[0] + arr[1];
  return `${year}-${month}-${day}`;
}
export function FormateDateApi(date: any) {
  var arr = [...date];
  var year = arr[0] + arr[1] + arr[2] + arr[3];
  var month = arr[5] + arr[6];
  var day = arr[8] + arr[9];
  return `${day}/${month}/${year}`;
}
