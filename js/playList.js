var playlist=[
    {title:"BLUE",artist:"BIGBANG",mp3:"http://p2.music.126.net/db2Apbz6ijvxzh26gnToaw==/7998947093790162.mp3",cover:"./images/mp3/mp1.jpg",},
    {title:"그리고 하나",artist:"金泰妍",mp3:"http://p2.music.126.net/F2qApXV5v2g_MpZ2MZdRNA==/2791660022930910.mp3",cover:"./images/mp3/mp2.jpg",},
    {title:"平凡之路",artist:"朴树",mp3:"http://p2.music.126.net/at0wmUoxoCMqDJbJt1QFeQ==/5935163767130356.mp3",cover:"./images/mp3/mp3.jpg",},
    {title:"暧昧",artist:"杨丞琳",mp3:"http://p2.music.126.net/-BQcSG5fAqw3tsCGXkDCWQ==/5505254720365750.mp3",cover:"./images/mp3/mp4.jpg",},
    {title:"笔记",artist:"周笔畅",mp3:"http://p2.music.126.net/jYl58Zsu1viU-d-RhSB37w==/2011006767211601.mp3",cover:"./images/mp3/mp5.jpg",},
]
var isRotate = true;
var autoplay = false;

function bgChange(){
  var lis= $('.lib');
  for(var i=0; i<lis.length; i+=2)
  lis[i].style.background = 'rgba(246, 246, 246, 0.5)';
}
window.onload = bgChange;