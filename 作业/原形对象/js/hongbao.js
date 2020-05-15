/**
       * @param {Number} width 窗口的宽度
       * @param {Number} height 窗口的高度
       * @param {Number} x 红包起始的x轴的位置
       * @param {Number} y 红包的下落位置
       * @param {String} backgroundColor 红包的背景颜色
       * @param {Number} time 储存定时器
       * @param {Number} speed 红包掉落的速度
       */
    
    
      function RadBag(width, height, x, y, time, speed) {
        this.div = document.createElement("div")
        this.div.className = "hb";
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.time = time;
        this.speed = speed;
        this.init()
    }

    //生成红包
    RadBag.prototype = {
        init:function(){
           if(this.x > 0 && this.x < this.width){
                document.body.appendChild( this.div);
                this.div.style.left = `${this.x}px`;
                this.div.style.top = 0;
                this.drop()
            }     
        },
    //红包掉落
        drop:function(){
            this.time =setInterval(() => {
                this.y += 10
                this.div.style.top = `${this.y}px`
                debugger
                if(this.height-(this.div.offsetHeight+10) < this.y){
                    this.remove()
                }
            }, this.speed);
        },
    //红包消失
        remove:function(){
            //当红包溢出窗口时 清除定时器 清除div
            window.clearInterval(this.time);
            document.body.removeChild(this.div)
            },
    }