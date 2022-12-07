var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
/*
// Shape | Square or Rectangle
c.fillStyle = 'rgba(0, 0, 255, 0.4)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(300, 300, 100, 100);
console.log(canvas);



// Line
c.beginPath()
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#26F7FD"
c.stroke();

// Arc | Circle
for(var e = 0; e < 3; ++e){

    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();

}
*/

var colorArray = ['#8FD3FE', '#FF2700', '#33FF33', '#A45EE5', '#F9A602', '#E5E4E2'];

function Circle(x, y, ex, ey, radius) {
    this.x = x;
    this.y = y;
    this.ex = ex;
    this.ey = ey;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() {
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0)
        {
            this.ex = -this.ex;
        }
    
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0)
        {
            this.ey = -this.ey
        }
    
        this.x += this.ex;
        this.y += this.ey;

        this.draw();

    }

}
    
var circleArray = [];

for(var e = 0; e < 100; ++e){
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var ex = (Math.random() - 0.3);
    var ey = (Math.random() - 0.3);
    circleArray.push(new Circle(x , y, ex, ey, radius));
   
}



function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for(var e = 0; e < circleArray.length; ++e){
        circleArray[e].update();
    }

}

animate();