/**
 * Created by hugohua on 14-1-14.
 * 侧边栏zepto插件
 * 使用方法: $('#id').sMenu();
 */
(function(){
    var sMenu;


    sMenu = (function(){
        function sMenu(el,options){
            this.settings = $.extend({}, $.fn.sMenu.defaults, options);
            this.$el = $(el);                                                   //侧边栏
            this.$btn = $(this.settings.trigger);                               //触发显示隐藏的侧边栏按钮
            this.$mask = $(this.settings.mask);                                 //内容区域遮罩
            this.$cnt = $(this.settings.content);
            this.$bar = $(this.settings.bar);
            this.init();
        }

        sMenu.prototype = {
            /**
             * 初始化
             */
            init:function(){
                var me = this;

                this.$btn.on('tap.sMenu',function(e){
                    console.info('aaa')
                    !me.isOpen() ? me.open() : me.close();
                    e.preventDefault();
                })
            },

            /**
             * 判断是否打开
             */
            isOpen: function(){
                return this.$el.hasClass('on');
            },

            /**
             * 展开侧边栏
             */
            open: function(){
                this.$el.trigger('beforopen:sMenu');
                this.$mask.add(this.$cnt).add(this.$el).add(this.$bar).addClass(this.settings.openCss);
                this._openAniEnd();
            },

            /**
             * 展开的动画
             * @private
             */
            _openAniEnd: function(){
                var me = this;
                //webkitTransitionEnd webkitAnimationEnd
                this.$cnt.one('webkitAnimationEnd',function(){

                    me.$cnt.add(me.$bar).removeClass(me.settings.openCss)
                                        .addClass(me.settings.openCss + '_done');

                    //绑定关闭事件 及滑动事件
                    me.$mask.on('touchstart.sMenu touchmove.sMenu',function(e){
                        e.preventDefault();
                    })
                    .on('touchend.sMenu touchcancal.sMenu',function(){
                        me.close();
                    });
                    me.$el.trigger('open:sMenu');

                })
            },

            /**
             * 关闭侧边栏
             */
            close: function(){
                this.$el.trigger('beforeclose:sMenu');
                this.$cnt.add(this.$bar).addClass(this.settings.closeCss);
                this._closeAniEnd();
            },

            /**
             * 关闭时的动画
             * @private
             */
            _closeAniEnd:function(){
                var me = this;
                me.$cnt.one('webkitAnimationEnd',function(){
                    me.$el.removeClass('show');
                    me.$cnt.add(me.$bar).removeClass(me.settings.closeCss).removeClass(me.settings.openCss + '_done');
                    me.$el.removeClass(me.settings.openCss);
                    //取消事件绑定
                    me.$mask.off('touchmove.sMenu touchmove.sMenu touchend.sMenu touchcancal.sMenu');
                    me.$el.trigger('close:sMenu');
                });
            },

            /**
             * 还原默认状态
             * 类似关闭侧边栏
             * 但是不带动画效果
             */
            reset: function(){

            }


        };

        return sMenu;

    })();


    /**
     * 创建menu插件
     * @param options
     * @returns {}
     */
    $.fn.sMenu = function(options){
        return this.each(function () {
            var $this = $(this),
                data = $.fn.sMenu.lookup[$this.data('smenu')];
            if (!data) {
                //zepto的data方法只能保存字符串，所以用此方法解决一下
                $.fn.sMenu.lookup[++$.fn.sMenu.lookup.i] = new sMenu(this,options);
                $this.data('smenu', $.fn.sMenu.lookup.i);
                data = $.fn.sMenu.lookup[$this.data('smenu')];
            }

            if (typeof options == 'string'){
                console.info(data)
                data[options]();
            }
        })
    };

    $.fn.sMenu.lookup = {i: 0};


    $.fn.sMenu.defaults = {
        openCss:'on',                             //打开的css
        closeCss:'off',
        trigger:'#J_smenu_btn',                     //触发展开或收起的按钮
        mask:'#J_smenu_mask',                        //遮住层用于遮住右侧划出的区域
        content:'#J_smenu_main',                           //页面主体区域
        bar:'#J_smenu_bar'                                 //fxid定位的内容
    };

})();

//DEBUG
$('.WX_nav').on('tap',function(){
    window.location.reload();
})