const abs_content = document.getElementById('container');
const home = document.getElementsByClassName('home')[0];
let distance, opacity = 0;

// function animation(opacity) {
//
// }
function getTheDis() {
  distance = home.clientHeight;;
  scrollTop = document.body.scrollTop;
  console.log(distance, scrollTop);

  if (scrollTop >= distance) {
    abs_content.style.position = 'absolute';
    abs_content.style.top = '100vh';
    abs_content.style.opacity = '1';
  } else {
    abs_content.style.position = 'fixed';
    abs_content.style.top = '0';
    opacity = scrollTop/distance
    abs_content.style.opacity = scrollTop/distance;
  }

}
getTheDis()
// document.body.onmousewheel = getTheDis
document.body.onscroll = getTheDis     // 检测滚动事件比检测滚轮事件，整体 UI 过渡更流畅，也不用考虑拉滚动条的操作
