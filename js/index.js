var WINDOW_WIDTH = 1400;
var WINDOW_HEIGHT = 768;
var RADIUS = 8;
var MARGIN_LEFT = 60;
var MARGIN_TOP = 30;


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = WINDOW_WIDTH;
canvas.height = WINDOW_HEIGHT;

render();

function render() {
    ctx.clearRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);
    var time = new Date();
    var hours = time.getHours();
    var minutes = addZero(time.getMinutes());
    var seconds = addZero(time.getSeconds());
    var str = hours + ':' + minutes + ':' + seconds

    for (var i = 0; i < str.length; i++) {
        if ( i === 2 || i === 5) {
            renderDigit(MARGIN_LEFT + i * 15 * (RADIUS + 1), MARGIN_TOP ,10, ctx);
        } else {
            renderDigit(MARGIN_LEFT + i * 15 * (RADIUS + 1), MARGIN_TOP ,str[i], ctx);
        }
        
    }
}



function renderDigit(x, y, num, ctx) {
    ctx.fillStyle = 'rgb(0, 102, 153)';
    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] == 1) {
                ctx.beginPath();
                ctx.arc(x + j * 2 * (RADIUS + 1) + (RADIUS + 1), 
                        y + i * 2 * (RADIUS + 1) + (RADIUS + 1), 
                        RADIUS, 0, 2 * Math.PI, false);
                ctx.fill();
            }
        }
    }
}

function addZero(num) {
    return num >= 10 ? num : '0' + num;
}
setInterval(render,1000);