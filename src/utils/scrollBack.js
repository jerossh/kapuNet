var abs_content = document.getElementById('container');
var home = document.getElementsByClassName('home')[0];
var distance,count = 0;

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
  // console.log(distance, scrollTop);

  // 为了让 if 的内容只执行一次，假如 count计算
  if (scrollTop >= distance && count === 0) {
    abs_content.style.position = 'absolute';
    abs_content.style.top = '100vh';
    abs_content.style.opacity = '1';
    count++
    console.log(count,'noe');
  } else if(scrollTop < distance) {
    if (count === 1) {
      count--
    }
    abs_content.style.position = 'fixed';
    abs_content.style.top = '0';
    abs_content.style.opacity = scrollTop/distance;
  }
}

// 函数节流
// function throttle(method, context) {
//   clearTimeout(method.tid)
//   method.tid = setTimeout(function(){
//     method.call(context)
//   }, 100)
// }

// 页面载入需要首次运行
getTheDis()
// document.body.onmousewheel = getTheDis
// 检测滚动事件比检测滚轮事件，整体 UI 过渡更流畅，也不用考虑拉滚动条的操作
if (navigator.userAgent.indexOf('Trident') > 0) {
  document.documentElement.onscroll = getTheDis
} else {
  document.body.onscroll = getTheDis
}


//animation

function animation(method, context, destination) {
  var initTop = window.scrollY
  clearInterval(method.tid)
  method.tid = setInterval(function(){
    // if(window.scrollY > toFeature){
    //   clearInterval(method.tid)
    // }
    method.call(context, method.tid, destination, initTop)
  }, 16)
}

function goto(){
  var tid = arguments[0]
  var destination =arguments[1]
  var initTop = arguments[2]
  console.log(destination, window.scrollY);
  if(window.scrollY >= destination){
    clearInterval(tid)
  }
  aim = (destination - initTop)/36
  window.scrollTo(0, window.scrollY+aim)
}

var DomFeature = document.querySelectorAll('.ant-menu-item')[1]
var toFeature = document.documentElement.clientHeight   // 都支持

// var toFeather = document.body.clientHeight    // ie下是整个文档的高度，mac下是对的
// var toFeather = window.innerHeight    // 这个还是看win下的效果，需要 ie 9以上
DomFeature.onclick = function(){
  // window.requestAnimationFrame(goto)
  animation(goto, null, toFeature)
}


// contacts

var contacts = document.querySelectorAll('.contact')[0]
var form = document.querySelector('#form')
var content1 = document.querySelector('.content1')
var footer = document.querySelector('#footer')
contacts.onclick = function(){
 //
  content1.style.marginBottom = '98vh'
  content1.style.boxShadow = '0 -2px 8px 1px #e2e2e2'
  // footer.style.opacity = '0.4'
  var toForm = window.scrollY + window.innerHeight*0.57
  animation(goto, null, toForm)
  form.style.visibility = 'visible'
  // document.body.style.overflow = 'hidden'
}
