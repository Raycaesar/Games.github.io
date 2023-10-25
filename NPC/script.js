/** @typpe {HTMLCanvasElement}*/
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;

const numberOfEnemies = 100;
const enemiesArray = [];

let gameFrame = 0;




class Enemy{
	constructor(){
		this.image = new Image();
		this.image.src = "enemy1.png";	
		//this.speed = Math.random()*4 - 2;//
		this.spriteWidth = 293;
		this.spriteHeight = 155;
		this.width = this.spriteWidth/5; //change size of width//
		this.height =  this.spriteHeight/5; //change size of height//

		this.x = Math.random() * (canvas.width - this.width);
		this.y = Math.random() * (canvas.height - this.height);

		this.frame =0;
		this.flapSpeed = Math.floor(Math.random()*5 + 1);
	

	}
	update(){
		this.x += Math.random()*5 - 2.5;
		this.y += Math.random()*3- 2.5;
		//animate sprite
		if (gameFrame % 2 === 0 ){
			this.frame > 4 ? this.frame = 0: this.frame++;
		}
	}
	draw(){
		ctx.strokeRect(this.x, this.y, this.width, this.height);
		ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
	}
};

//const enemy1 = new Enemy();//
for (let i = 0; i < numberOfEnemies; i++){
	enemiesArray.push(new Enemy());
}

console.log(enemiesArray);
function animate(){
	
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	
	enemiesArray.forEach(enemy => {
		enemy.update();
		enemy.draw();
	})
	/*ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);*/
	requestAnimationFrame(animate);
};

animate();
