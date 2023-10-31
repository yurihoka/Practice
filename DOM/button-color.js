// ボタンを押すと、各色のボタンに記載されている色と同じ色に変わる
// const changeColor = function (newColor) {
//   const btn = document.getElementsByClassName("btn-" + newColor);
//   console.log(btn);
//   btn[0].style.color = newColor;
// };

// redを押したらbackground(btn-wrapper)がredに変わる
// blueを押したらbackgroundがblueに変わる
// greenを押したらbackgroundがgreenに変わる
const changeBackColor = function (newColor) {
  const btnWrapper = document.getElementsByClassName("btn-wrapper");
  console.log(btnWrapper);
  btnWrapper[0].style.backgroundColor = newColor;
};
