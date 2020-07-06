var canv = document.getElementById("canvas");
var ctx = canv.getContext("2d");
var player = {

};
var ball = {
    x: 100,
    y: 100,
    r: 10,
    xSpeed: -2,
    ySpeed: -2
}
ball.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
    ctx.fill();
}
ball.move = function () {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
};
ball.checkCanvas = function (panelStart, panelEnd) {
    if (this.x < this.r || this.x > (400 - this.r))
        this.xSpeed = -this.xSpeed;
    if (this.y < this.r)
        this.ySpeed = -this.ySpeed;
    if (this.y > 390 - this.r) {
        if (this.x > panelStart && this.x < panelEnd)
            this.ySpeed = -this.ySpeed;
        else if (this.y > 400 - this.r) {
            alert("Game over!!");
            this.x = 50;
            this.y = 100;
        }
    }
};
var panel = {
    x: 200,
    y: 390,
    xSize: 50,
    ySize: 5
};
panel.draw = function () {
    ctx.fillRect(this.x, this.y, this.xSize, this.ySize)
};

setInterval(function () {
    ctx.clearRect(0, 0, 400, 400);
    ball.draw();
    panel.draw();
    ball.move();
    ball.checkCanvas(panel.x, panel.x + panel.xSize);
    ctx.strokeRect(0, 0, 400, 400);
}, 30);
$("body").keydown(function (event) {
    console.log(event.keyCode);
    if (event.keyCode == 37) {
        panel.x = panel.x - 5;
        if (panel.x < 0)
            panel.x = 0
    };
    if (event.keyCode == 39) {
        panel.x = panel.x + 5;
        if (panel.x > 400 - panel.xSize)
            panel.x = 400 - panel.xSize;
    };
    if (event.keyCode == 39) {
        panel.x = panel.x + 5;
        if (panel.x > 400 - panel.xSize)
            panel.x = 400 - panel.xSize;
    };

});
