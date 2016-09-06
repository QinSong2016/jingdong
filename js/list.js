$(function(){
    // 显示侧边栏下拉栏
        $('.dd-inner .item').mouseenter(function(){
            $('.dropdown-layer .item-sub').hide();
            // var _index = $('.dd-inner .item').index($(this));
            var _index = $(this).index();
            $('.dropdown-layer .item-sub:eq('+_index+')').show();
        });

        $('.dd').mouseleave(function () {
            $('.dropdown-layer .item-sub').hide();
        })

        $('.all').mouseenter(function(){
            console.log('111');
            $('.all .dd').show();
        });
        $('.all').mouseleave(function(){
            console.log(222);
            $('.all .dd').hide();

        });

    });