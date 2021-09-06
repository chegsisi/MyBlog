  var cacheBox =(function(){
      //缓存的容器
      var cache = {};
      let res;
      return{
        searchBox:function(id){
          //如果在内存中，则直接返回
          if(cache.id==id){
            console.log('从内存中读取');
              let li='<li><a><span>'+cache.num+'</span><p>'+cache.span+'</p><span>'+cache.key+'</span></a></li>';
              $('.dropdown-ul').append(li)  
          }
          else{
            //经过一段很耗时的函数处理
            getData(call);
            function call(obj){
               res=obj;
               res.forEach((item)=>{
                 if(item.id==id){
                   cache=item;
                   setTimeout(()=>{
                     cache=[];
                   },1000)
                   let li='<li><a><span>'+item.num+'</span><p>'+item.span+'</p><span>'+item.key+'</span></a></li>';
                   $('.dropdown-ul').append(li)  
                 }
               })
                }
          }
       }
     };
    })();
   
   //处理很耗时的函数
  function getData(call){
    let res;
    $.ajax({
            url:"search.php",
            type:"get",
            dataType:"json",
            success:function(response){
            res=eval(response);
            call(res);
               }
            })
  } 
$(function(){
  $("#search").focus(function(){
    $('.dropdown').show();
    cacheBox.searchBox(1);
    cacheBox.searchBox(2);
    cacheBox.searchBox(3);
    // cacheBox.searchBox(4);
    // cacheBox.searchBox(5);
  })
  $('#search').blur(function(){
    $('.dropdown-ul').text('')
    $('.dropdown').hide();
  })
})
