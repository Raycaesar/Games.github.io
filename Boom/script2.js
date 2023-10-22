const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 700;
const explosions = []
let canvasPosition = canvas.getBoundingClientRect();
//console.log(canvasPosition)

class Explosion {
	constructor(x, y){
		this.spriteWidth = 200;
		this.spriteHeight = 179;
		this.width = this.spriteWidth * 0.7;
		this.height = this.spriteHeight * 0.7;
		this.x = x;
		this.y = y;
		this.image = new Image();
		this.image.src = 'boom.png';
		this.frame =0;
		this.timer = 0;	
		this.angle = Math.random()* 4.5;
	}
	update(){
		this.timer++;
		if(this.timer % 20 === 0){
			this.frame++;
		};
		
	}
	draw(){
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.angle);
		ctx.drawImage(this.image, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, 0 - this.width/2, 0 - this.height/2, this.width, this.height);
		ctx.restore();
	}
}

/*window.addEventListener('click', function(e){
	createAnimation(e);
});*/

window.addEventListener('mousemove', function(e){
	createAnimation(e);
});

function createAnimation(e){
	let positionX = e.x - canvasPosition.left;
	let positionY = e.y - canvasPosition.top;
	explosions.push(new Explosion(positionX, positionY));
}

function animate(){
	ctx.clearRect(0,0,canvas.width, canvas.height);
	for (let i = 0; i < explosions.length; i++){
		explosions[i].update();
		explosions[i].draw();
		if(explosions[i].frame > 5){
			explosions.splice(i,1);//The splice() method adds and/or removes array elements.//
			i--;
		}
	}
	requestAnimationFrame(animate);
};
animate();

// homework: only use the first picture and make it rotate//