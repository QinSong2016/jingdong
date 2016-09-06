$(function(){
    var now =0;
    var s=null;
    var len =$('.banner .lunbo li').length;
    // 自动轮播
    function run(){
        s = setInterval(function(){
            if (now >= len-1) {
                now = 0;
            } else {
                now++;
            }

            $('.banner .lunbo>li').hide();
            $('.banner>ul.num>li').css('background', '#3e3e3e');

            $('.banner .lunbo>li:eq('+now+')').fadeIn();
            $('.banner>ul.num>li:eq('+now+')').css('background', '#C81623');
        }, 1000);
    }
        run();

    // 移入移出对应图片显示
    $('.banner').mouseenter(function(){
        clearInterval(s);
        $('.left,.right').show();
    }).mouseleave(function(){
        run();
        $('.left,.right').hide();
    });

    $('.banner>ul.num>li').mouseenter(function(){
         clearInterval(s);
        $('.banner .lunbo>li').hide();
        $('.banner>ul.num>li').css('background','#3e3e3e');

        now = $(this).index();
        $('.banner .lunbo>li:eq('+now+')').fadeIn();
        $('.banner>ul.num>li:eq('+now+')').css('background', '#C81623');
    })

        // 4左右按键
    $('.left').click(function(){
        // 获取对应图片的下标
        now--;
        if (now < 0) {
            now = len - 1;
        }
      
        // 初始化
        $('.banner .lunbo>li').hide();
        $('.banner>ul.num>li').css('background','#3e3e3e');

        // 指定的图片显示，数字改变背景颜色
        $('.banner .lunbo>li:eq('+now+')').show();
        $('.banner>ul.num>li:eq('+now+')').css('background', '#C81623');
    });

    $('.right').click(function(){
        // 获取对应图片的下标
        now++;
        if (now > len-1) {
            now = 0;
        }
        
        // 初始化
        $('.banner .lunbo>li').hide();
        $('.banner>ul.num>li').css('background','#3e3e3e');

        // 指定的图片显示，数字改变背景颜色
        $('.banner .lunbo>li:eq('+now+')').show();
        $('.banner>ul.num>li:eq('+now+')').css('background', '#C81623');
    });

    // 显示侧边栏下拉栏
        $('.dd-inner .item').mouseenter(function(){
            $('.dropdown-layer .item-sub').hide();
            // var _index = $('.dd-inner .item').index($(this));
            var _index = $(this).index();
            $('.dropdown-layer .item-sub:eq('+_index+')').show();
        });

        $('.dd').mouseleave(function () {
            $('.dropdown-layer .item-sub').hide();
        });



    });