let elements = document.getElementsByClassName('element');
let texts = document.getElementsByClassName("texts");
let arrows = document.getElementsByClassName("arrow");
let title = document.getElementsByClassName("title");
let index = 5;

elements[0].addEventListener("click", fun0);
elements[1].addEventListener("click", fun1);
elements[2].addEventListener("click", fun2);
elements[3].addEventListener("click", fun3);
elements[4].addEventListener("click", fun4);

function showText (i) {
  console.log(index);
  if (i==index) {
    texts[i].style.display = "none";
    title[i].style.fontWeight = 300;
    arrows[i].style.transform = ("rotate(0deg)");
    index = 5;
  }
  else {
    if (index < 5) {
      texts[index].style.display = "none";
      title[index].style.fontWeight = 300;
      arrows[index].style.transform = ("rotate(0deg)");
    }
    texts[i].style.display = "flex";
    title[i].style.fontWeight = 700;
    arrows[i].style.transform = ("rotate(180deg)");
    index = i;
  }
}
function fun0() {
  showText(0);
}
function fun1() {
  showText(1);
}
function fun2() {
  showText(2);
}
function fun3() {
  showText(3);
}
function fun4() {
  showText(4);
}
