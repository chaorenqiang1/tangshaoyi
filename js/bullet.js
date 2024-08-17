// 函数用于创建新的弹幕
function createDanmaku(text) {
    // Create a new danmaku element
    var danmaku = document.createElement("div");
    danmaku.classList.add("danmaku");
    danmaku.innerText = text;

    // 设置danmaku位置到容器的右边缘
    danmaku.style.right = "0";

    // 设置danmaku顶部位置为0到容器高度之间的随机值
    var container = document.querySelector(".danmaku-container");
    danmaku.style.top = Math.floor(Math.random() * container.offsetHeight) + "px";

    // 添加danmaku到容器
    container.appendChild(danmaku);

    // 将danmaku动画到容器的左边缘
    var animationDuration = 10000; // 10 秒
    var danmakuWidth = danmaku.offsetWidth;
    var containerWidth = container.offsetWidth;
    var distance = containerWidth + danmakuWidth;
    var duration = (distance / containerWidth) * animationDuration;
    danmaku.style.transition = "transform " + duration + "ms linear";
    danmaku.style.transform = "translateX(-" + distance + "px)";

    // 动画完成后从容器中移除弹幕
    setTimeout(function() {
        danmaku.remove();
    }, duration);
}

// 函数生成随机弹幕文本
function generateDanmakuText() {
    var texts = ["唐绍仪故居，历史与现代的完美融合", "西班牙风格建筑，独特而优雅", "优秀历史建筑，感受上海百年韵味", "董大酉杰作，建筑艺术之精品", "武康路40弄1号，上海旅游必打卡之地", "螺旋柱与券门，巴洛克艺术风格尽显", "花园洋房，领略民国风云人物生活风貌","唐绍仪传奇人生，激发爱国情怀","民国初期政治舞台，一窥历史沧桑","寓庐变迁，见证时代发展","感受建筑之美，传承历史文化","上海优秀历史建筑，民居中的瑰宝"," 探访名人故居，追寻历史足迹","融合东西方文化，独具特色的建筑","近距离感受民国风云，重温历史瞬间"," 走进唐绍仪故居，领略民国风情"];
    var index = Math.floor(Math.random() * texts.length);
    return texts[index];
}

// 每2秒生成一个新的弹幕
setInterval(function() {
    var text = generateDanmakuText();
    createDanmaku(text);
}, 1000);