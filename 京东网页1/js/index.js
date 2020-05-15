(function(){
    let oSlider = document.querySelector(".slider-bg");
    let SliderUl = document.querySelector(".slider-bg ul");
    let SliderLi = document.querySelectorAll(".slider-bg ul li");
    let SliderUlWidth = SliderUl.clientWidth;
    let endX = 0;
    let startX = 0;
    let timer;
    let index = 1;
    let n ;
    init();
    function init() {
        // SliderUl.style.transform = `translateX(-100%)`
        change()
        touchstart()
        touchend()
    }
    function change(){
        timer = setInterval(() => {
            index++;
            n = -(index * 100) + "%";
            SliderUl.style.transform = `translateX(${n})`;
            SliderUl.style.transition = `all 0.3s`
        }, 2000);
        SliderUl.addEventListener("transitionend",()=>{
            if (index === SliderLi.length - 2) {
                index = 1;
                SliderUl.style.transition = "none"
                SliderUl.style.transform = `translateX(-100%)`
            }else if(index === 0){
                // n = -(index * 100) + "%";
                index = SliderLi.length-3;
                SliderUl.style.transition = "none"
                SliderUl.style.transform = `translateX(-${index*100}%)`
            }
            // console.log(timer)
            // console.log(n)
            // console.log(index)
        })
    }
    function touchstart() {
        SliderUl.addEventListener("touchstart", function (e) {
            // console.log("开始点触了")
            // console.log(e.touches[0].pageX) //起始点
            startX = e.touches[0].pageX;
            // console.log(pageX)
            //点触开始的时候停止定时器
            clearInterval(timer)
        })
    }

    function touchend() {
        SliderUl.addEventListener("touchend", function (e) {
            // console.log("结束点触了")
            // console.log(e.changedTouches[0].pageX)
            endX = e.changedTouches[0].pageX
            if (Math.abs(startX - endX) <= SliderUlWidth / 10) {
                
            } else {
                if (startX - endX < 0) {
                    // console.log(index);
                    index--
                    let n = -(index * 100) + "%"
                    //每次滑动前又给他补充回动画
                    SliderUl.style.transition = "all .3s"
                    SliderUl.style.transform = `translateX(${n})`
                    
                    // console.log(n)
                    // console.log(index + "向前")
                } else {
                    index++
                    let n = -(index * 100) + "%"
                    //每次滑动前又给他补充回动画
                    SliderUl.style.transition = "all .3s"
                    SliderUl.style.transform = `translateX(${n})`
                    // console.log(index + "向后")
                }
            }

            //让定时器可以重新运动
            change()
        })
    }
}());

(function(){
    let tuijianUl = document.querySelector(".tuijian-shangpin ul");
    // console.log(tuijianUl);
    let json = [
        {
            imgSrc:"./image/tuijianshangpin1.jpg",
            title:"张一元茶叶 龙井茶绿茶 2020春茶 新茶 龙井 50元/50g",
            moneyCategory:"¥",
            money:"69",
            xiangsi:"看相似"
        },
        {
            imgSrc:"./image/tuijianshangpin2.jpg",
            title:"张一元茶叶 龙井茶绿茶 2020春茶 新茶 龙井 50元/50g",
            moneyCategory:"¥",
            money:"59",
            xiangsi:"看相似"
        },
        {
            imgSrc:"./image/tuijianshangpin3.jpg",
            title:"张一元茶叶 龙井茶绿茶 2020春茶 新茶 龙井 50元/50g",
            moneyCategory:"¥",
            money:"79",
            xiangsi:"看相似"
        },
        {
            imgSrc:"./image/tuijianshangpin4.jpg",
            title:"张一元茶叶 龙井茶绿茶 2020春茶 新茶 龙井 50元/50g",
            moneyCategory:"¥",
            money:"99",
            xiangsi:"看相似"
        },
        {
            imgSrc:"./image/tuijianshangpin5.jpg",
            title:"张一元茶叶 龙井茶绿茶 2020春茶 新茶 龙井 50元/50g",
            moneyCategory:"¥",
            money:"39",
            xiangsi:"看相似"
        },
        {
            imgSrc:"./image/tuijianshangpin6.jpg",
            title:"张一元茶叶 龙井茶绿茶 2020春茶 新茶 龙井 50元/50g",
            moneyCategory:"¥",
            money:"49",
            xiangsi:"看相似"
        },
        {
            imgSrc:"./image/tuijianshangpin7.jpg",
            title:"张一元茶叶 龙井茶绿茶 2020春茶 新茶 龙井 50元/50g",
            moneyCategory:"¥",
            money:"119",
            xiangsi:"看相似"
        },
        {
            imgSrc:"./image/tuijianshangpin3.jpg",
            title:"张一元茶叶 龙井茶绿茶 2020春茶 新茶 龙井 50元/50g",
            moneyCategory:"¥",
            money:"129",
            xiangsi:"看相似"
        },
        {
            imgSrc:"./image/tuijianshangpin1.jpg",
            title:"张一元茶叶 龙井茶绿茶 2020春茶 新茶 龙井 50元/50g",
            moneyCategory:"¥",
            money:"149",
            xiangsi:"看相似"
        },
        {
            imgSrc:"./image/tuijianshangpin2.jpg",
            title:"张一元茶叶 龙井茶绿茶 2020春茶 新茶 龙井 50元/50g",
            moneyCategory:"¥",
            money:"189",
            xiangsi:"看相似"
        },
        {
            imgSrc:"./image/tuijianshangpin3.jpg",
            title:"张一元茶叶 龙井茶绿茶 2020春茶 新茶 龙井 50元/50g",
            moneyCategory:"¥",
            money:"209",
            xiangsi:"看相似"
        },
        {
            imgSrc:"./image/tuijianshangpin4.jpg",
            title:"张一元茶叶 龙井茶绿茶 2020春茶 新茶 龙井 50元/50g",
            moneyCategory:"¥",
            money:"9999",
            xiangsi:"看相似"
        },
    ];
    json.map(function(e){
        tuijianUl.innerHTML += `
            <li>
                <img src="${e.imgSrc}" alt="">
                <span class="mingzi">${e.title}</span>
                <p>
                    <span class="money">${e.moneyCategory}&nbsp;
                        <span class="money1">${e.money}</span>
                    </span>
                    <span class="xiangsi">${e.xiangsi}</span>
                </p>
            </li>
        `
        // console.log(e.imgSrc)
    })
}())