//封装拖曳函数
function mouseE(obj) {
    obj.addEventListener("mousedown",event => {
    //鼠标点击
    let oLeft = event.clientX - obj.offsetLeft;
    let oTop = event.clientY - obj.offsetTop;
    //跟随鼠标移动
    document.onmousemove = function(event){
    let eLeft = event.clientX - oLeft;
    let eTop = event.clientY - oTop;
    if(eLeft < 0){
        eLeft = 0;
    }else if(eLeft > window.innerWidth - odiv.offsetWidth){
        eLeft = window.innerWidth - odiv.offsetWidth;
    }
    if(eTop < 0){
        moveY = 0;
    }else if(eTop > window.innerHeight - odiv.offsetHeight) {
        eTop = window.innerHeight - odiv.offsetHeight;
    }
    obj.style.left = `${eLeft}px`;
    obj.style.top = `${eTop}px`;
    }
})
    //鼠标松开,鼠标移动时间停止
    document.addEventListener("mouseup",event => {
    document.onmousemove = null;
})
} 

// 设置弹出框的宽、高、边框颜色、背景颜色
let createDiv = (height, width, borderColor, backgroundColor, oBody) => {
    let div1 = document.createElement("div");
    let maxWidth = window.innerWidth;
    let maxHeight = window.innerHeight;
    div1.id = "popUp"
    div1.style.width = width + "px";
    div1.style.height = height + "px";
    div1.style.background = `${backgroundColor}`;
    div1.style.position = "fixed";
    div1.style.top = (maxHeight - height)/2 + "px";
    div1.style.left = (maxWidth - width)/2 + "px";
    div1.style.border = `1px solid ${borderColor}`;
    div1.style.zIndex = 1000;
    let div2 = document.createElement("div");
    let otxt = document.createTextNode("可拖动DIV区域");
    div2.appendChild(otxt);
    div2.id = "move";
    div2.style.height = "20px";
    div2.style.background = "#ffffff";
    div1.appendChild(div2);
    oBody.appendChild(div1);
    return div1;
}

// 窗口改变的时候改变弹出框的位置，保持一致居中
let resizeDiv = (div1, width, height) => {
    let maxWidth = window.innerWidth;
    let maxHeight = window.innerHeight;
    div1.style.top = (maxHeight - height)/2 + "px";
    div1.style.left = (maxWidth - width)/2 + "px";
}

// 设置遮罩
let mask = (oBody) => {
    let div1 = document.createElement("div");
    div1.id = "mask"
    div1.style.width = "100%";
    div1.style.height = "100%";
    div1.style.position = "fixed";
    div1.style.background = `rgba(1,1,1,0.5)`;
    div1.style.top = 0;
    oBody.appendChild(div1);
}


// 关闭提示框
let closePop = ()=>{
    let oBody = document.body
    let odiv = document.querySelector("#popUp")
    // odiv.style.display = "none";
    oBody.removeChild(odiv);
    let omask = document.querySelector("#mask");
    if(omask){
        // omask.style.display = "none";
        oBody.removeChild(omask);
    }
}