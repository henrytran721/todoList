function date(){
let today = new Date();
let d = String(today.getDate());
let m = String(today.getMonth() + 1);
let y = today.getFullYear();
let dateText = m + '/' + d + '/' + y;
return dateText;
}

export {
  date
}
