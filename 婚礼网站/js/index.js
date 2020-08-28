// 二级菜单
var secMenu=document.getElementById("nav-LIST").getElementsByTagName("li");
for(var i=0;i<secMenu.length;i++){
    secMenu[i].onmousemove=function(){
        if(this.className!="show"){
            this.className="show";
        }
    }
    secMenu[i].onmouseout=function(){
        if(this.className!=""){
            this.className="";
        }
    }
}

// 轮播图
var index=0,
    itemWidth=1001,
    num=3;
var timer=undefined;
timerFun();
function move(dirction){
    clearTimeout(timer);
    $('.imgbox').stop(false,true);//动画立即停止
    if(dirction=='next'){
        index++;
        if(index>num){
            $('.imgbox').css({
                left:0
            });
            index=1;
        }
        
    }else if(dirction=='prev'){
        index--;
        if(index<0){
            $('.imgbox').css({
                left:num*-itemWidth
            });
            index=3;
        }
    }
    $('.imgbox').animate({
        left:index*-itemWidth
    },function(){
        timerFun();
    })
}
function timerFun(){
    timer=setTimeout(function(){
        move('next');
    },3000);
}
$('.prevbtn').click(function(){
    // console.log("keyidianji");
   move('prev');
})
$('.nextbtn').click(function(){
   move('next');
})