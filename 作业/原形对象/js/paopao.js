/**
       * @param {Ele} parant 父元素
       * @param {Number} time 定时器速度
       * @param {Number} speedLeft 每次x轴移动的px
       * @param {Number} speedTop 每次Y轴移动的px
       */

class Creatpp{
    constructor(parant,time,speedLeft,speedTop,arr){
        this.parant = parant;
        this.div = document.createElement("div");
        this.div.className = "pp"
        this.time = time;
        this.speedLeft = speedLeft;
        this.speedTop = speedTop;
        this.arr = arr;
        this.init();
        // this.resize();
    }
    //泡泡生成
    init(){
        this.parant.appendChild(this.div);
        this.arr.push(this.div);
        //泡泡可移动的宽高  
        this.width = this.parant.clientWidth - this.div.clientWidth;
        this.height = this.parant.clientHeight - this.div.clientHeight;
        // debugger
        this.div.style.left = parseInt(Math.random()*this.width)+ "px";
        this.div.style.top = parseInt(Math.random()*this.height) + "px";
        this.move();
    }
    //泡泡移动
    move(){
        setInterval(() => {
            //每次移动距离等于自身宽度+speed
            let oLeft = this.div.offsetLeft + this.speedLeft;
            let oTop = this.div.offsetTop + this.speedTop;
            this.judge(oLeft,oTop);
            this.div.style.left = oLeft + "px";
            this.div.style.top = oTop + "px";
        }, this.time);
    }
    //判断条件
    judge(oLeft,oTop){
        if(oLeft >= (this.width - this.speedLeft)){
        //当泡泡碰到右边边框时,坐标就定位成最大宽度.在-speedleft
            oLeft = this.width
            this.speedLeft = -this.speedLeft;
        }else if(oLeft < 0){
            oLeft = 0;
            this.speedLeft = -this.speedLeft;
        }
        if( oTop >= (this.height - this.speedTop)){
            //当泡泡碰到下边边框时,坐标就定位成最大高度.在-speedTop
            oTop = this.height;
            this.speedTop = -this.speedTop;
        }else if(oTop < 0){
            oTop = 0;
            this.speedTop = -this.speedTop;
        }
    }
    resize(){
        window.addEventListener("resize", () => {
            let bossWidth = document.documentElement.clientWidth || document.body.clientWidth
            let bossHeight = document.documentElement.clientHeight || document.body.clientHeight
            this.div.style.left = `${(bossWidth - this.width) / 2}px`
            this.div.style.top = `${(bossHeight - this.width) / 2}px`
          })
    }
}