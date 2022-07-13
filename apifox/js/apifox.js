window.onload=function(){
    // 设置ul的宽度
let imglist=document.getElementById('imglist');
let num=imglist.children.length;
console.log("\u1F505");


// 
imglist.style.width=1264*num+"px";


// 设置导航栏图片长度
let navDiv=document.getElementById('navDiv');

navDiv.style.width=100*num+"px";
 let index=0;
 let allimg=navDiv.children;
 allimg[index].style.background="rgb(205,190,165)";
 for(let i=0;i<allimg.length;i++){
   allimg[i].number=i;
   
    allimg[i].onclick=function(){
      index=this.number;



    //   imglist.style.left=-1244*index+"px";
      setColor();
      move(imglist,"left",-1244*index,120,function(){

      });
    };
   
   
 }function setColor(){
    for(let i=0;i<allimg.length;i++){
        allimg[i].style.backgroundColor="";
    }
    allimg.backgroundColor="rgb(205,190,165)";
}

};
function move(obj,attr,target,speed,callback){
    clearInterval(obj.timer);//关闭上一个定时器
    var current = parseInt(getStyle(obj,attr));//获取obj当前位置
    if(current > target){
        speed = - speed;//如果当前位置大于目标位置，应该向左移动，速度为负值
    }
    obj.timer = setInterval(function(){
        var oldValue = parseInt(getStyle(obj,attr));//获取obj原来的位置
        var newValue = oldValue + speed;//设置obj移动
        if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
            newValue = target;//不能让移动超过边界
        }
        obj.style[attr] = newValue + "px";//设置obj现在的位置

        if(newValue == target){//如果obj到达目标位置，则停止移动，清除定时器
        clearInterval(obj.timer);
        callback && callback();
    }
    },30);
    
};

function getStyle(obj,name){
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[name];
    }else{
        return obj.currentStyle[name];
    };
}
