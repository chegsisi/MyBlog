// 声明一个数组来存放box节点
let list=[]
//插入图片数据
function showPic(){
  for(let i=0;i<picture.length;i++){
    let $div='<div class="box"><img src="'+picture[i].image+'" alt="" ></div>';
    let $link=$($div);
    list.push($link)
    $('#main').append($div);
  }
}
//防抖函数
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    if (timer) clearTimeout(timer)
    // 使用箭头函数来处理this问题
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}
showPic();
//无限加载图片函数
function loadImg(){
  let cHeight=document.documentElement.clientHeight;//可视区域高度
  let top = $(document).scrollTop();  //滚动高度
  // 只有滚动到可视区域才加载图片
  if($('#main .box').eq(list.length-1).offset().top<cHeight+top){
    // 调用加载图片的函数
     showPic();
  }
}
// 监听页面滚动 进行防抖处理 当不停滚动的时候不立即调用函数而是等待100ms再调用，减少调用的频率
window.addEventListener('scroll',debounce(loadImg,100));

// 监听窗口改变
window.onresize =function(){
  if(document.body.clientWidth<690){
    $('.title').css('width',400);
    $('#main').css('width',400);
    $('#main').css('column-count',1);
  }
  if(document.body.clientWidth>700){
    $('.title').css('width',700);
    $('#main').css('width',700);
   $('#main').css('column-count',2);
  }
  if(document.body.clientWidth>1000){
    $('.title').css('width',1000);
    $('#main').css('width',1000);
    $('#main').css('column-count',3);

  }
  if(document.body.clientWidth>1280){
    $('.title').css('width',1280);
    $('#main').css('width',1280);
    $('#main').css('column-count',4);

  }
};