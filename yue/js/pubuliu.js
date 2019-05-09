function pubuliu() {
    //获取父级对象
    var oParent = document.querySelector(".author-massage");
    //获取父级[第一个参数]下的所有的子元素[按照第二个参数匹配]
    var aPin = getClassObject(oParent, "show");
    //获取每一个块的宽度
    var iPinW = 300;
    // //计算每行放多少个pin(瀑布流块)页面的宽度/每一个瀑布流块的宽度
    var num = Math.floor(1260 / iPinW);

    var compareArray = [];
    //遍历获取到的所有瀑布流块
    for (var i = 0; i < aPin.length; i++) {
        if (i < num) {
            console.log(aPin[i].offsetHeight);
            //成行元素
            compareArray[i] = aPin[i].offsetHeight;
            // 修改style的left值
            if (i % 4) {
                aPin[i].style.marginLeft = "20px";
            }
        } else {
            //获取成行元素中高度最低的值
            var minHeight = Math.min.apply('', compareArray);
            //alert(compareArray + ",min=" + minHeight);
            //获取成行元素中高度最低元素的索引
            var minHkey = getMinHeightKey(compareArray, minHeight);
            //为新增的瀑布流块设置定位
            aPin[i].style.position = "absolute";
            aPin[i].style.top = (minHeight + 40) + "px";

            //设定新增加的瀑布流块的top和left
            aPin[i].style.left = aPin[minHkey].offsetLeft + "px";
            //将该索引位置的高度改变为新增后的高度[原来瀑布流块的高度+新增的瀑布流块的高度]
            compareArray[minHkey] += aPin[i].offsetHeight + 40;
        }
    }


    /**
     *     获取parent下所有样式名为className的对象集合
     */
    function getClassObject(parent, className) {
        var obj = parent.getElementsByTagName("*");
        var result = [];
        for (var i = 0; i < obj.length; i++) {
            //变量如果匹配className,将匹配的对象放入数组
            if (obj[i].className == className) {
                result.push(obj[i]);
            }
        }
        return result;
    }

    //   获取arr数组中值为minH的值在数组中的索引    
    function getMinHeightKey(arr, minH) {
        for (key in arr) {
            if (arr[key] == minH) {
                return key;
            }
        }
    }
}