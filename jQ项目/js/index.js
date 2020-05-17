$(function(){
    //导航条
    $("#nav ul li").hover(function(){
        $(this).find(".navitem").stop().slideDown();
    },
    function () {
        $(this).find(".navitem").stop().slideUp();
    });

    $("#login").on("click",function () {
        $('body').prepend('<div id="mask"></div>');
		$('#login_w').fadeIn();
      })
    $("#close").on("click",function () {
        $('#mask').hide();
		$('#login_w').hide();
      })
   

    //轮播图----------------------------------------------------------------------------
    let vw = $(window).width()
    //当前图片下标
    let iNow = 0;
    var oNowImg=$("#navimg ul li").eq(iNow);
    //动画参数对象
    let imgMOve = {};
    //节流防抖开关
    let flag = true
    //除了第一个li，其他全部移动到右边
    $("#navimg ul li").not(oNowImg).each(function () {
		$(this).css("left",vw);
    })
    //开始轮播
    let timer = setInterval(() => {
        move("left");
        $("#icon-item span").eq(iNow).addClass("active").siblings().removeClass("active");
    }, 3000);

    $("#navimg").on("mouseover",function () {
        $("#arrow").stop().fadeIn()
        $("#icon-item").stop().fadeIn()
        clearInterval(timer)
    })
    $("#navimg").on("mouseout",function () {
        $("#arrow").stop().fadeOut()
        $("#icon-item").stop().fadeOut()
        timer = setInterval(() => {
            move("left")
        }, 3000);
    })
    //导航下标
    $("#icon-item span").on("click",function () {
        $(this).addClass("active").siblings().removeClass("active")
        //获取点击的导航点下标
        let index =$("#icon-item span").index($(this))
       if(flag){
           flag = false
           //下标比当前显示的图片大时 图片从右边出来 第0张图片不变
            if(index > iNow){
                //瞬间让当前需要显示的图片到图片右侧
                $("#navimg ul li").eq(index).css("left",vw)
                //iNow 控制被切换过的图片在右边
                $("#navimg ul li").eq(iNow).animate({"left":-vw},1000)
            }
            //下标比当前显示的图片小时 图片从左边出来 第0张图片不变
            if(index < iNow){
                //瞬间让当前需要显示的图片到图片左侧
                $("#navimg ul li").eq(index).css("left",-vw)
                 // iNow 控制被切换过的图片在左边边
                $("#navimg ul li").eq(iNow).animate({"left":vw},1000)
            }
            $("#navimg ul li").eq(index).animate({"left":0},1000,function(){
                //动画完成才让点击切换
                flag = true
            })
            console.log(index);
            console.log(iNow);
            //重新赋值iNow 记录上一张被切换的图片
            iNow = index
       }
    })
    
    //左右箭头
    $(".arrow-l").click(function () {
        move("left")
    })
    $(".arrow-r").click(function () {
        move("right")
    })

    //轮播函数
    function move(direction) {
        let index = iNow
       if(flag){
            flag = false
            if(direction === "left"){
                //当下标到最后一张图片 回到第0张
                if(iNow === $("#navimg ul li").length - 1){
                    iNow = 0
                }else{
                    iNow++
                }
                imgMOve.left = -vw
                //悄悄的瞬间让第0张移动到容器右边
                $("#navimg ul li").eq(iNow).css("left",vw)  
        }else{
             //当下标回到第0张 iNow下标变为最后一张图片
                if(iNow === 0){
                iNow = $("#navimg ul li").length - 1
                }else{
                    iNow--
            }
                imgMOve.left = vw
                //悄悄的瞬间让第0张移动到容器左边
                $("#navimg ul li").eq(iNow).css("left",-vw)
        }   //此时index为 原本的 iNow 
            $("#navimg ul li").eq(index).animate(imgMOve,1000)
            //此时 原本的iNow + 1
            $("#navimg ul li").eq(iNow).animate({"left":0},1000,function(){
                //动画结束后才可以切换flag
                flag = true
            })
            //同时当前图片切换下标
            $("#icon-item span").eq(iNow).addClass("active").siblings().removeClass("active");
       }
    }
    
    //将进酒 人生得意须尽欢---------------------------------------------------------------------------
    //当前sTop容器
    let $boxTop = $(".tab-div.active").find(".sTop");
    //当前sLeft容器
    let $boxLeft = $(".tab-div.active").find(".sLeft");
    //li 高度
    let sTopH = $(".tab-img  li").height()
    //li 宽度
    let sLeftW = $(".tab-img  li").width()

    $(".tab-img.sLeft ul").width(sLeftW*$(".tab-div.active .sLeft li").length);
    // console.log($(".tab-div.active .sLeft li"))
    //开启定时器
    let timeT = setInterval(() => {
        tabImgMOve($boxTop,"marginTop")
    }, 2000);
    let timeL = setInterval(() => {
        tabImgMOve($boxLeft,"marginLeft")
    }, 2000);
    //选项卡
    $("#tab-wrap ul li").on("click",function () {
        //标题样式
        $(this).addClass("active").siblings().removeClass("active")
        //当前下标
        let index = $("#tab-wrap ul li").index($(this))
        //淡入淡出
        $("#tab-c-wrap .tab-div").eq(index).fadeIn(500).siblings().fadeOut(500)
        $("#tab-c-wrap .tab-div").eq(index).addClass("active").siblings().removeClass("active")
        //选中当前展示的item
        $boxTop = $(".tab-div.active").find(".sTop");
        $boxLeft = $(".tab-div.active").find(".sLeft");
        //清除所有定时器
        clearInterval(timeT);
        clearInterval(timeL);		
		timeT = setInterval(() => {
            // console.log($boxTop);
            // console.log($boxLeft);
            tabImgMOve($boxTop,"marginTop")
        }, 2000);
		timeL = setInterval(() => {
            tabImgMOve($boxLeft,"marginLeft")
        }, 2000);
    })
    //鼠标进入Img
    $(".sTop").hover(function(){
		    clearInterval(timeT);
        },function(){
            timeT = setInterval(() => {

                tabImgMOve($boxTop,"marginTop")
            }, 2000);
        })
	
	$(".sLeft").hover(function(){
		clearInterval(timeL);
        },function(){
            timeL = setInterval(() => {
                tabImgMOve($boxLeft,"marginLeft")
            }, 2000);
        })
    
    //轮播函数
    function tabImgMOve(ele,direction){
        if(ele !== null){
            //当前展示的ul
            let boxUl =  ele.find("ul")
            //储存样式
            let css = {}
            if(direction === "marginTop"){
                css[direction] = -sTopH
                boxUl.animate(css,500,function () {
                    //动画结束 第一张插到容器最后一张 改变DOM
                    boxUl.find("li").eq(0).appendTo(boxUl);
                    //此时第二张变为第一张 marginTop = 0，循环插入
                    boxUl.css(direction,0);
                })
            }else{
                css[direction] = -sLeftW
                //延迟0.5s轮播
                boxUl.delay(500).animate(css,500,function () {
                    boxUl.find("li").eq(0).appendTo(boxUl);
                    boxUl.css(direction,0);
                })
            }
        }else{
            return "you are zz"
        }
    }
    
    //手风琴菜单-------------------------------------------------------------------------
    $("#con-item>ul>li").mouseover(function(){
        if($(this).next().hasClass("active")){
            return
        }else
        $("#con-item div:animated").stop(true,true);
        $(".item-con.active").stop().animate({"width":0},700).removeClass("active");
		$(this).next().stop().animate({"width":620},700).addClass("active");
    })

    //点击有喜------------------------------------------------------------------------
    let timerBall = setInterval(() => {
        scaleBall()
    }, 1000);
    let timerSuper;
    let colorBox = ["skyblue","pink","purple","orange","Cyan","yellow"];
    let colorBoxI = 0;
    //点击惊喜
    $("#greenball").click(function () {
        clearInterval(timerSuper)
        timerSuper = setInterval(() => {
            scaleSpuer()
        }, 2000);
    })
    //鼠标进入 出去
    $("#greenball").hover(function () {
        clearInterval(timerBall)
      },function () {
        timerBall = setInterval(() => {
            scaleBall()
        }, 1000);
    })
    //正中圆
    function scaleBall() { 
        $("#greenball").animate({
            "width":250,
            "height":250,
            "marginLeft":-125,
            "marginTop":-125,
            "lineHeight":250
        },1000).animate({
            "width":150,
            "height":150,
            "marginLeft":-75,
            "marginTop":-75,
            "lineHeight":150
        },1000,function () {
            $(this).css("background",colorBox[colorBoxI%colorBox.length])
          })
        $("#shadowball").animate({
            "width":350,
            "height":350,
            "marginLeft":-175,
            "marginTop":-175,
            "opacity":.3,
            "borderWidth":0,
        },2000,function () {
            $("#shadowball").css({
            "width":140,
            "height":140,
            "marginLeft":-76,
            "marginTop":-76,
            "opacity":1,
            "borderWidth":6,
            "borderColor":colorBox[colorBoxI%colorBox.length]
            })
          })
          colorBoxI++
    }
    //左右圆
    function scaleSpuer () {
        $("#squb-L").animate({
            "width": 250,
            'height': 250,
            // "marginLeft":-125,
            "marginTop":-125,
            'left':0,
            'margin':0,
            'lineHeight':250,
            "fontSize":50
        },1000).animate({
            "width": 150,
            'height': 150,
            'left':'50%',
            'top':'50%',
            "marginLeft":-75,
            "marginTop":-75,
            'lineHeight':150,
            "fontSize":20
        },1000,function () {
            $(this).css("backgroundColor",colorBox[colorBoxI%colorBox.length])
          })
        $("#squb-R").animate({
            "width": 250,
            'height': 250,
            // "marginLeft":-125,
            "marginTop":-125,
            'left':'80%',
            'margin':0,
            'lineHeight':250,
            "fontSize":50
        },1000).animate({
            "width": 150,
            'height': 150,
            'left':'50%',
            'top':'50%',
            "marginLeft":-75,
            "marginTop":-75,
            'lineHeight':150,
            "fontSize":20
        },1000,function () {
            $(this).css("backgroundColor",colorBox[colorBoxI%colorBox.length])
          })
          colorBoxI++
    }
})