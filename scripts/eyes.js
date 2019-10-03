var balls = document.getElementsByClassName("ball");
document.onmousemove = function () {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    for (var i = 0; i < 2; ++i) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = "translate(-" + x + ",-" + y + ")"
    }
}

document.onmouseleave = function () {
    for (var i = 0; i < 2; ++i) {
        balls[i].style.left = "50%";
        balls[i].style.top = "50%";
        balls[i].style.transform = "translate(-50%, -50%)";
    }
}