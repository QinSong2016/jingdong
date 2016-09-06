$(function(){
    // 显示侧边栏下拉栏
        $('.dd-inner .item').mouseenter(function(){
            $('.dropdown-layer .item-sub').hide();
            // var _index = $('.dd-inner .item').index($(this));
            var _index = $(this).index();
            $('.dropdown-layer .item-sub:eq('+_index+')').show();
        });

        $('.all .dd').mouseleave(function () {
            $('.dropdown-layer .item-sub').hide();
        });


        $('.all .dt').mouseenter(function(){
            $('.all .dd').show();
        });
        $('.all').mouseleave(function(){
            $('.all .dd').hide();
        });

        // 放大镜效果
        var small = document.querySelector('.small-img');
        var big = document.querySelector('.big-img');
        var shadow = document.querySelector('.shadow');

        // 2.鼠标的移入事件:阴影区和big显示
        small.onmouseover= function(){
            big.style.display = 'block';
            shadow.style.display = 'block';

            small.onmousemove = function(ent){
                // 2.1 获取鼠标的相对坐标点
                var e = ent || event;
                var xx = e.clientX - this.offsetLeft;
                var yy = e.clientY - this.offsetTop;

                // 2.2 等比例放大到大图位置，并进行设置
                big.scrollTop  = xx * 800/450 - 225;
                big.scrollLeft = yy * 800/450 - 225;

                // 2.3 阴影区
                // 获取阴影区的left和top值
                var left = xx - shadow.offsetWidth/2;
                var top = yy - shadow.offsetHeight/2;

                // 判断界限
                if (left < 0) {
                    left = 0;
                } else if (left > small.offsetWidth - shadow.offsetWidth) {
                    left = small.offsetWidth - shadow.offsetWidth;
                }

                if (top < 0) {
                    top = 0;
                } else if (top > small.offsetHeight - shadow.offsetHeight) {
                    top = small.offsetHeight - shadow.offsetHeight;
                }

                // 将最终的值赋值给shadow
                shadow.style.left = left+'px';
                shadow.style.top = top+'px';
            }
        }

        // 3.鼠标移出事件：阴影区和big隐藏
        small.onmouseout = function(){
            big.style.display = 'none';
            shadow.style.display = 'none';
        }


});

       