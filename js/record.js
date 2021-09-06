function showRecord(index){
      let month=$('.r-year ul li').eq(index).text().slice(6,7)
      console.log(month);
      let alist;
      alist=data.filter(item=>{
        return item.date.slice(6,7)==month;
      });
      for(let n=0;n<alist.length;n++){
        let aLi='<li class="animated slideInRight">'+alist[n].title+'</li>';
        $('.r-info ul').eq(index).append(aLi);
      }
      console.log(alist);
    }
    for(let i=0;i<8;i++){
          showRecord(i);
    }

    