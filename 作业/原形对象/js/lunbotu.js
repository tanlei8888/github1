    function init(oUl,aNav,attr,containerWidth,time,index,speed,aImg){

    click(oUl,aNav,attr,containerWidth,time,index,speed);
    change(oUl,aNav,attr,containerWidth,time,index,speed,aImg)
}

//点击事件
function click(oUl,aNav,attr,containerWidth,time,index,speed){
    for(let i = 0; i < aNav.length; i++){
        aNav[i].num = i;
        aNav[i].addEventListener("click",function(){
            //每次点击先清除定时器,否则点的越多 定时器越快
            clearInterval(time)
            // debugger
            index = this.num;
            reset(oUl,aNav,index);
            // debugger
            //当点击导航点 调用move切换图片并结束move的定时器,并回调change的定时器开始轮播
            move(oUl,attr,-containerWidth*index,speed,function(){
                change(oUl,attr,containerWidth,time,index,speed,aImg);
            })
        })
    }
}
//开始轮播
function change(oUl,aNav,attr,containerWidth,time,index,speed,aImg){
    time = setInterval(() => {
        index++;
        index %= aImg.length;
        // debugger
        move(oUl,attr,-containerWidth*index,speed,function(){ reset(oUl,aNav,index); });
    }, 3000);
}

//切换图片
function move(obj,attr,target,speed,callback){
    clearInterval(obj.timer)
    let objLeft = obj.offsetLeft;
    if(objLeft > target){
        speed = -speed;
    }
    obj.timer = setInterval(() => {
        // debugger
        objLeft = obj.offsetLeft;
        let newLeft = objLeft + speed;
        if((speed < 0 && newLeft < target) || (speed > 0 && newLeft > target)){
            newLeft = target
        }
        obj.style[attr] = newLeft + "px";
        if(newLeft == target){
            clearInterval(obj.timer);
            callback && callback();
        }
    }, 30);
}

//样式重置
function reset(oUl,aNav,index){
    if( index >= aNav.length){
        index = 0;
        oUl.style.left = 0;
    }
    for(let i = 0; i < aNav.length; i++){
        aNav[i].style.backgroundColor = "";
    }
    aNav[index].style.backgroundColor = "gray"
}