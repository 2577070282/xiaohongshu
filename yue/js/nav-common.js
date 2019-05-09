(function() {
    //头部导航栏部分
    let str = `<div class="explore-top">
    <img src="../yue/imgs/xhs.png" alt="" srcset="" title="小黄书_logo">
    <div class="explore-right">
        <a href="#" title="小黄书_首页" class="explore-right-size"><span>首页</span></a>
        <a href="./explore.html" title="小黄书_社区精选" class="explore-right-size "><span class="explore-right-red">社区精选</span></a>
        <div class="about-us explore-right-size">
            <a href="#" title="小黄书_关于我们">关于我们</a>
            <div class="about-us-others">
                <a href="#">关于我们</a>
                <a href="#">媒体报道</a>
                <a href="#">联系我们</a>
            </div>
        </div>
        <a href="#" class="explore-right-size"><span>加入我们</span></a>
        <a href="#" title="小黄书_招商合作" class="explore-right-size"><span>招商合作</span></a>
        <a href="#" title="小黄书_品牌账号" class="explore-right-size"><span>品牌账号</span></a>
    </div>
</div>`;
    document.querySelector('.top').innerHTML = str;
})()
//底部知识产权部分