var abs_content = document.getElementById('container');
var home = document.getElementsByClassName('home')[0];
var distance, opacity = 0;

// function animation(opacity) {
//
// }
function getTheDis() {
  distance = home.clientHeight;
  // scrollTop = window.scrollY;                             // IE 不支持，其他两个支持
  // scrollTop = document.documentElement.scrollTop;      // 谷歌不支持，火狐IE支持
  // scrollTop = document.body.scrollTop;                 // 火狐不支持，谷歌支持
  if (navigator.userAgent.indexOf('Chrome') > 0) {
    scrollTop = document.body.scrollTop;
  } else {
    scrollTop = document.documentElement.scrollTop;
  }
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
// 检测滚动事件比检测滚轮事件，整体 UI 过渡更流畅，也不用考虑拉滚动条的操作
if (navigator.userAgent.indexOf('Trident') > 0) {
  document.documentElement.onscroll = getTheDis
} else {
  document.body.onscroll = getTheDis
}
