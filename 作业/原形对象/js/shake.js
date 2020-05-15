/**
 * 
 * @param {String} 最大宽度
 * @param {String} 最大高度
 * @param {Array} 记录多少个div数组
 * @param {Number} 保存定时器
 * @param {Number} 移动指定大小
 * @param {Array} //图片数组
 * @param {Number} 记录当前inow
 */
class Shake{
    constructor(maxWidth,maxHeigt,arr,time,speed,imgbox,iNow){
        this.maxWidth = maxWidth;
        this.maxHeigt = maxHeigt;
        this.oDiv = document.createElement("div");
        this.arr = arr;
        this.time = time;
        this.speed = speed;
        this.imgbox = imgbox;
        this.iNow = iNow;
        this.init()
        // debugger
    }
    //生成泡泡
    init(){
        document.body.appendChild(this.oDiv);
    // debugger
        this.arr.push(this.oDiv);
        this.oDiv.style.height = 100 + "px";
        this.oDiv.style.width = 100 + "px";
        this.oDiv.setAttribute("index",this.iNow);
        this.oDiv.style.backgroundImage = `url(${this.imgbox[this.oDiv.getAttribute("index") % this.imgbox.length]})`;
        this.oDiv.style.borderRadius = "50%";
        this.oDiv.style.position = "absolute";
        this.oDiv.style.left = parseInt(Math.random()*(this.maxWidth - this.oDiv.offsetWidth)) + "px";
        this.oDiv.style.top = parseInt(Math.random()*(this.maxHeigt - this.oDiv.offsetHeight)) + "px";
        this.change()
        this.drag()
    }
    //抖动
    change(){
        // debugger
        let a = true;
        let oLeft = this.oDiv.offsetLeft;
        let oTop = this.oDiv.offsetTop;
        this.time = setInterval(() => {
        if(a){
            this.oDiv.style.left = oLeft + this.speed + "px";
            // this.oDiv.style.top = oTop - this.speed + "px";
            a = false
        }else{
            this.oDiv.style.left = oLeft - this.speed + "px";
            // this.oDiv.style.top = oTop + this.speed + "px";
            a = true;
        }
       }, 200);
    }
    //拖曳
    drag(){
        this.oDiv.addEventListener("mousedown",event =>{
            let e = event || window.event;
            clearInterval(this.time);   
            // debugger
            let divLeft = e.clientX - this.oDiv.offsetLeft;
            let divTop = e.clientY - this.oDiv.offsetTop;
            this.move(divLeft,divTop)
        })
        
    }
    //跟随鼠标移动
    move(divLeft,divTop){
        this.oDiv.addEventListener("mousemove",event =>{
            clearInterval(this.time);   
            let eLeft = event.clientX - divLeft;
            let eTop = event.clientY - divTop;
            if(eLeft < 0){
                eLeft = 0;
            }else if(eLeft > window.innerWidth - this.oDiv.offsetWidth){
                eLeft = window.innerWidth - this.oDiv.offsetWidth;
                // console.log(this.oDiv.offsetWidth)
            }
            if(eTop < 0){
                eTop = 0;
            }else if(eTop > window.innerHeight - this.oDiv.offsetHeight) {
                eTop = window.innerHeight - this.oDiv.offsetHeight;
            }
            this.oDiv.style.left = `${eLeft}px`;
            this.oDiv.style.top = `${eTop}px`;
        })
        this.up()
    }
    // 鼠标放下停止拖曳，继续颤抖
    up(){
        document.addEventListener("mouseup",event =>{
            clearInterval(this.time);   
            document.onmousemove = null;
            this.oDiv.onmousemove = null;
            this.oDiv.onmousedown = null;
            console.log(document.onmousemove = null)
            console.log(this.oDiv.onmousemove = null)
            console.log(this.oDiv.onmousedown = null)
            this.change();
        })          
    }
}
