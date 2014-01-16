smenu
=====

smenu 是一个侧边栏滑动插件，是仿原生App的一个侧边栏效果，smenu 全称是sidebar menu。

因项目需要，该版本目前仅在chrome 和 safari 下运行。

另外，在打开侧边栏时，旋转屏幕会导致横向滚动条出现，应该是样式导致的，目前尚未解决。

![smenu DEMO](https://baofen14787.github.com/smenu/demo.gif)

##Use

调用如下语句即可。
```js
$("#J_menu").smenu();
```
同时支持以下参
```js
openCss:'on',                             //打开的css
closeCss:'off',
trigger:'#J_smenu_btn',                     //触发展开或收起的按钮
mask:'#J_smenu_mask',                        //遮住层用于遮住右侧划出的区域
content:'#J_smenu_main',                           //页面主体区域
bar:'#J_smenu_bar'                                 //fxid定位的内容
```

##Method

插件提供以下几个方法调用

1. 打开侧边栏 open
```js
$("#J_menu").smenu('open');
```

2. 关闭侧边栏 close
```js
$("#J_menu").smenu('close');
```

3. 判断是否打开了侧边栏 isOpen
```js
$("#J_menu").smenu('isOpen');
```

##Event
插件提供以下几个回调事件
```js
//打开侧边栏前触发该事件
$("#J_menu").on('beforopen:sMenu',function(){
    
});

//打开侧边栏后触发该事件
$("#J_menu").on('open:sMenu',function(){
    
});


//关闭侧边栏前触发该事件
$("#J_menu").on('beforeclose:sMenu',function(){
    
});

//关闭侧边栏后触发该事件
$("#J_menu").on('close:sMenu',function(){
    
});
```

##DEMO
看[DEMO](http://oos.me/smenu/list_all.html)

## Changelog
* v0.1 项目创建

## Other
[My Blog](http://www.ghugo.com)

