const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let timeToNextRaven = 0;
let ravenInterval = 500;
let lastTime = 0;

let ravens = [];
class Raven {
	constructor(){
		this.spriteWidth = 271;
		this.spriteHeight = 194;
		this.sizeModifier = Math.random() * 0.6 + 0.5;
		this.width = this.spriteWidth * this.sizeModifier; //this.spriteWidth/2//
		this.height = this.spriteHeight * this.sizeModifier; //this.spriteHeight/2//
		this.x = canvas.width;
		this.y = Math.random() * (canvas.height - this.height)
		this.directionX = Math.random() * 5 + 3;
		this.directionY = Math.random() * 5 - 2.5;
		this.markedForDeletion = false;	
		this.image = new Image();
		this.image.src = 'raven.png';
		
	}
	update(){
		this.x -= this.directionX;
		if (this.x < 0 - this.width) this.markedForDeletion = true;
	}
	draw(){
		ctx.strokeRect(this.x, this.y , this.width, this.height);
		ctx.drawImage(this.image, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
	}
}

const raven = new Raven();

function animate(timestamp){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	let deltatime = timestamp - lastTime;
	lastTime = timestamp;
	timeToNextRaven += deltatime;
	if (timeToNextRaven > ravenInterval){
		ravens.push(new Raven());
		timeToNextRaven = 0;
	};
	[...ravens].forEach(object => object.update());
	[...ravens].forEach(object => object.draw());
	ravens = ravens.filter(object => !object.markedForDeletion);

	requestAnimationFrame(animate);
}
animate(0);
