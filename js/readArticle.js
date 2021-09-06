$(function(){
  let uName=getCookie('name')
  let uImg=getCookie('img')
    // 获取当前时间
    function getNow(s) {
        return s < 10 ? '0' + s: s;
    }
    function showNowTime(){
      let myDate = new Date();              
      let year=myDate.getFullYear();         //获取当前年
      let month=myDate.getMonth()+1;         //获取当前月
      let date=myDate.getDate();            //获取当前日 
      let h=myDate.getHours();              //获取当前小时数(0-23)
      let m=myDate.getMinutes();            //获取当前分钟数(0-59)
      let s=myDate.getSeconds();
      let now=year+'-'+getNow(month)+"-"+getNow(date)+" "+getNow(h)+':'+getNow(m)+":"+getNow(s);
      return now;
    }
  $('#message-btn').click(function(){
    let comment=$('#message').val();
    let nowTime=showNowTime();
    if(comment==''){
      alert('评论内容不能为空')
    }
    else if(uName==null){
     alert('请先登录'); 
    }
    else if(comment!==''&&uName!=null){
     alert('评论成功')
      let itemDiv='<div class="c-item"><img src="'+uImg+'" alt=""><div class="c-item-info"><span>'+uName+'</span><div class="c-item-comment"><p>'+comment+'</p><span>'+nowTime+'</span></div></div></div>'
      $('.comment-content').prepend(itemDiv)
    }
  })
  let id=localStorage.getItem('id');
  let aItem={};
  function showArticle(id){
  // aItem={};
  data.forEach((item)=>{
    if(item.id==id){
      aItem=item;
    }
  })
  let div='<div class="article-item"><div class="article-title"><p>'+aItem.title+'</p>作者:<span>cheng</span>发表于:<i>'+aItem.date+'</i> <div class="time"><span class="day">'+aItem.date.slice(8,10)+'</span><span class="month">'+aItem.date.slice(6,7)+'<small>月</small></span><span class="year">'+aItem.date.slice(0,4)+'</span></div></div><div class="article-content"><p>'+aItem.detail+'</p></div></div>'
  $('.main-content').prepend(div);
  }
  showArticle(id);
  // 点赞

  // $('#praise').click(function(){
  //     aItem.praise+=1;
  //     console.log(aItem);
  //     alert('点赞成功')
  //     localStorage.setItem('praise',aItem.praise);
  // })
  // 上一篇 下一篇阅读文章
  let nextId;
  let idd;
  let prevId;
  $('#p-read').click(function(){
    idd=localStorage.getItem('id');
    if(idd>0){
      prevId=Number(idd)-1;
      localStorage.setItem('id',prevId);
      $('.article-item').remove();
      showArticle(prevId);
      window.location.href="./article.html?id="+prevId+"";
    } 
    else{
      alert('没有更多文章啦')
    }
    
  })
  $('#n-read').click(function(){
    idd=localStorage.getItem('id');
    if(idd<data.length-1){
      nextId=Number(idd)+1;
      localStorage.setItem('id',nextId);
      $('.article-item').remove();
      showArticle(nextId);
      window.location.href="./article.html?id="+nextId+"";
    }
    else{
      alert('没有更多文章啦')
    }
  })
})
