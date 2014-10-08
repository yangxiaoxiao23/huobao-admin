

function slideImg(oUl, oLi, oSlideDotDl){

    var liWidth = oLi.eq(0).width(); //单个Li的宽度
    var liLength = oLi.length;

    var apartTime = 2000, //间隔时间
        task; //滑动任务

    oUl.css('width', oLi.length * oLi.eq(0).width());

    /*动态创建原点*/
    var dotHtml = '';
    for(var i= 0;i<liLength;i++){
        dotHtml += '<dd class="dot"></dd>';
    }
    var oDotDd = $(dotHtml).appendTo(oSlideDotDl);
    oDotDd.eq(0).addClass('active');

    var activeIndex = 0;
    task = setInterval(doSliding, apartTime);

    // 原点被点击的时候
    oDotDd.click(function(){
        clearInterval(task);
        $(this).addClass('active').siblings().removeClass('active');
        activeIndex = $(this).index() - 1;
        doSliding();
        task = setInterval(doSliding, apartTime);
    });

    //鼠标放在oUl区域上时候
    oUl.hover(function(){
        clearInterval(task);
    }, function(){
        task = setInterval(doSliding, apartTime);
    });

    /**
     * @method doSliding 滑动
     */
    function doSliding(){
        if(++activeIndex >= liLength){
            activeIndex = 0;
        }
        oUl.stop().animate({
            left: -(activeIndex * liWidth)
        });
        oDotDd.eq(activeIndex).addClass('active').siblings().removeClass('active');
    }

}

$(function(){
    var oSlideUl = $('.slide-ul'),
        oSlideLi = oSlideUl.find('li'),
        oSlideDotDl = $('.slide-flag');

    slideImg(oSlideUl, oSlideLi, oSlideDotDl);

});