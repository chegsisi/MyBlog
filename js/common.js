// 点击爱心
$(function(){
  let username=localStorage.getItem('name');
  if(username!=null){
    $('.header-right .icon-qq').css('color','#e9546b')
  }
  $('#article').click(function(){
    let start=0;
    localStorage.removeItem('id')
    localStorage.removeItem('praise')
    window.location.href="./article.html?id="+start+"";
    localStorage.setItem('id',start)

  })
   //  通知
   let num=$(".ul-notice").find("li").length;
   if (num>1) {
       setInterval(function(){ 
       $('.ul-notice').animate({
           marginTop:"-26px"
       },500,function(){
           $(this).css({marginTop : "0"}).find("li:first").appendTo(this);
       });
   }, 3000);
   }
  $("body").click(function(e){
    // 创建div父元素
    var parentDiv = $("<div></div>");
    // 设置属性
    parentDiv.css({
      "width":"20px",
      "height":"20px",
      "position":"absolute",
      "z-index":"10000"
    });
    // 创建一个div容器元素
    var conDiv = $("<div></div>");
    conDiv.css({
      "width":"100%",
      "height":"100%",
      "position":"relative"
    });
    // 将容器元素添加到父元素中
    parentDiv.append(conDiv);
    // 创建子元素
    var childDiv = conDiv.append("<div></div><div></div><div></div>");
    var divs = conDiv.children();
    // 设置颜色随机
    var color = "rgb("+parseInt(Math.random()*250+5)
          +","+parseInt(Math.random()*250+5)
          +","+parseInt(Math.random()*250+5)+")";
    // 设置子元素属性
    $(divs[0]).css({
      "width":"60%",
      "height":"60%",
      "background-color":color,
      "border-radius":"100%"
    });
    $(divs[1]).css({
      "width":"60%",
      "height":"60%",
      "background-color":color,
      "border-radius":"100%",
      "position":"absolute",
      "top":"0",
      "right":"0"
    });
    $(divs[2]).css({
      "width":"60%",
      "height":"60%",
      "background-color":color,
      "position":"absolute",
      "top":"20%",
      "left":"20%",
      "transform":"rotate(45deg)",
      "-ms-transform":"rotate(45deg)",
      "-webkit-transform":"rotate(45deg)"
    });
    // 通过事件对象获取鼠标坐标
    var x = e.pageX;
    var y = e.pageY;
    // 修改div父元素位置
    parentDiv.css({"left":x+"px","top":y+"px"});
    // 添加到body中
    $("body").append(parentDiv);
    // 2秒后消失
    parentDiv.animate({
      "width":"25px",
      "height":"25px",
      "top":(y-200)+"px",
      "opacity":0
    },2000,function(){
      parentDiv.remove();
    });
  });
  // 监听滚动 导航栏固定
    // $(window).scroll(function()
    // { 
    //     let top = $(this).scrollTop(); 
    //     if(top>0){
    //       $('#header').addClass('top')

    //     } 
    //     else{
    //       $('#header').removeClass('top')
    //     }
    // });
    // 置顶
    $('.top-btn').click(function(){
       $("html,body").scrollTop(0);
    }) 
});