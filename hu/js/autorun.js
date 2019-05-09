//根据选择器找到所需的元素
var Contents = document.querySelectorAll('.Content');
var points = document.querySelectorAll('.point');
var dots = document.querySelectorAll('.dot');
var lines = document.querySelectorAll('.line');


console.log(Contents);
console.log(points);

var i = 0;

setInterval(function () {
    for (var j = 0; j < Contents.length; j++) {
        dots[j].style.backgroundColor = '#ccc';
        lines[j].style.backgroundColor = '#ccc';
        Contents[j].style.color = '#ccc';
    }
    dots[i].style.backgroundColor = 'red';
    lines[i].style.backgroundColor = 'red';
    Contents[i].style.color = '#000';
    i++;
    if (i == Contents.length) {
        i = 0;
    }
}, 3000)