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
  // 显示
  publistMess()
  function publistMess(){
    for(let i=0;i<user.length-3;i++){
      let item='<div class="m-c-item animated bounceInUp" ><div class="user-message"><div class="user-img"><img src="'+user[i].img+'" alt=""></div><div class="user-text">'+user[i].mess+'</div><div class="create-time">--来自<span>'+user[i].name+'</span><span>'+user[i].time+'</span></div><div class="reply-btn"><button>回复</button></div></div><div class="reply-message"><textarea placeholder="回复内容" class="user-reply"></textarea><button class="u-r-btn">确定</button></div></div>'
      $('.message-content').append(item);
     
    }
    replyMessage()
    PublishReply()
  }
  // 发表留言
  $('#message-btn').click(function(){
    let length=user.length;
    let newUser={};
    let nowTime=showNowTime();
    let message=$('#message').val();
    if(message==''){
      alert('留言内容不能为空')
    }
    else if(uName==null){
      alert('请先登录'); 
    }
    else if(message!==''&&uName!=null){
      alert('留言成功'); 
      newUser.id=user[length-1].id+1;
      newUser.name=uName;
      newUser.img=uImg;
      newUser.time=nowTime;
      newUser.mess=message;
      user.push(newUser);
      userItem=newUser;
      console.log(user);
      let item='<div class="m-c-item animated bounceInUp"><div class="user-message"><div class="user-img"><img src="'+user[length].img+'" alt=""></div><div class="user-text">'+user[length].mess+'</div><div class="create-time">--来自<span>'+user[length].name+'</span><span>'+user[length].time+'</span></div><div class="reply-btn"><button>回复</button></div></div><div class="reply-message"><textarea placeholder="回复内容" class="user-reply"></textarea><button class="u-r-btn">确定</button></div></div>'
      $('.message-content').append(item);
      replyMessage() 
      PublishReply()
    }
  })

  //回复留言函数
  function replyMessage(){
    $('.reply-btn').each(function(index){
      $(this).click(function(){
        $('.m-c-item').eq(index).find('.reply-message').show();
        $('.m-c-item').eq(index).find('.reply-message').addClass("active").siblings().removeClass("active");
      })
    }
    )
  }
  // // 确定回复函数
  function PublishReply(){
    $('.u-r-btn').each(function(index,element){
      $(this).click(function(){ 
        let val=$('.user-reply').eq(index).val();
        if(val!=''){
          let replyDiv='<div class="u-r-message"><img src="'+uImg+'" alt=""></img><div class="u-name"><span>'+uName+'</span>回复<span>'+user[index].name+':</span>'+val+'</div><span class="delete-btn">删除</span></div>';
          $('.m-c-item').eq(index).append(replyDiv);
          $('.user-reply').eq(index).val('')  
          $('.m-c-item').eq(index).find('.reply-message').hide();
          deleteReply(index)
        }
      })
    })
  }
  //  删除回复
  function deleteReply(index){
    $('.m-c-item').eq(index).find('.u-r-message').click(function(){
      $('.m-c-item').eq(index).find($(this)).remove();
    })
  }
  // 在线 离线状态
  if(uName==null||uName==''){
    $('#chat').css('color','#333')
    $('#chat').html('离线');
  }
  else{
    $('#chat').css('color','#e9546b')
        $('#chat').html('在线');
  }
  // 置顶
  $(window).scroll(function()
  { 
   let top = $(this).scrollTop(); 
   if(top>800){
     $('.back-top').css('display','block')
     $('.back-top').click(function(){
        $("html,body").scrollTop(0);
     })
   } 
   else{
     $('.back-top').css('display','none')
   }
 });
// export {messageSum};
