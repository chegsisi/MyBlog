  let uId=localStorage.getItem('id');
  let Top=localStorage.getItem('sTop')
if(Top!=null){
  // $("html,body").animate({scrollTop:Top},400); 
  $("html,body").scrollTop(Top); 
}
// 左侧区域
$('.left ul').on('mouseover','li',function(){
  $(this).addClass("show").siblings().removeClass("show");
})
// 文章区域
function showArticle(type,page){
        for(let index=0;index<articleData[type][page].list.length;index++){
          let article='<div class="article"  data-id="'+articleData[type][page].list[index].id+'"><div class="a-img"><img src="'+articleData[type][page].list[index].image+'" alt=""></div><div class="text"><p>'+articleData[type][page].list[index].title+'</p><div class="info"><img src="'+articleData[type][page].list[index].img+'" alt=""><span>'+articleData[type][page].list[index].tag+'</span><span>'+articleData[type][page].list[index].date+'</span> <div class="praise"><span><em class="iconfont icon-xinxi"></em>'+articleData[type][page].list[index].comments+'</span>|<span><em class="iconfont icon-zan addP"></em>'+articleData[type][page].list[index].praise+'</span> </div></div></div> </div>';
          $('.total-article').append(article)
        }       
}
showArticle('pop',0);
// 文章的类型
let type='pop';
let page=0;
let i=articleData[type][0].list.length;
let flag=true;
$(document).scroll(function() {
  let cHeight=document.documentElement.clientHeight;//可视区域高度
  let top = $(document).scrollTop();  //滚动高度
  let time;
  if(page<articleData[type].length && $('.total-article .article').eq(i-1).offset().top<cHeight+top){
      page++;
      i+=articleData[type][page-1].list.length;
      findArticle();
      $('.total-article').append('<div class="tips">正在加载中，请稍候</div>');
      time=setTimeout(()=>{
        $('.total-article .tips').remove();
        showArticle(type,page);   
      },1000)
  } 
  else{
    if(page>articleData[type].length-1&&flag){
      clearTimeout(time);
      $('.total-article .tips').remove();
      flag=false;
      $('.total-article').append('<div class="tips">没有更多文章啦</div>');
    }
  }
});
$('.left ul').on('click','li',function(){
  let index=$(this).index();
  switch (index){
    case 0:
      type='pop';
      page=0;
      i=articleData['pop'][0].list.length;
      flag=true;
      $('.total-article .article').remove();
      showArticle('pop',0);  
      findArticle();
      break;
    case 1 :
      type='new';
      page=0;
      i=articleData['new'][0].list.length;
      flag=true;
      $('.total-article .article').remove();
      showArticle('new',0);  
      findArticle();
      break;
    case 2:
      type='recommend';
      page=0;
      i=articleData['recommend'][0].list.length;
      flag=true;
      $('.total-article .article').remove();
      showArticle('recommend',0);  
      findArticle();
      break;
   }
}
)
$('.tips .close').click(function(){
  $('.tips').remove();
})
// 阅读全文
function findArticle(){
  $('.total-article').find('.article').click(function(){
        localStorage.removeItem('id');
        localStorage.removeItem('praise');
        window.location.href="./article.html?id="+$(this)[0].dataset.id+"";
        localStorage.setItem('id',$(this)[0].dataset.id);

     
    })
  }
$('#article').click(function(){
  window.location.href="./article.html?id=0";
  localStorage.setItem('id',0);
  localStorage.setItem('sTop',$(document).scrollTop());
})
  // 点赞
  $('.addP').click(function(){

    console.log(1);
  })
  // 文章总数
  aSum=data.length;
  $('.sum').html(aSum)
  