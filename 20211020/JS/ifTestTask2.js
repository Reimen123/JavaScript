let text;
/*
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
*/

var day = new Date().getDay();
if (day == 4 || day == 5) {
    text = "Soon it is Weekend";
}
else if (day == 0 || day == 6) {
    text = "It is Weekend";
}
else {
    text = "Looking forward to the Weekend";
}
document.getElementById("demo").innerHTML = text;