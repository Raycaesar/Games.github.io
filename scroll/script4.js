window.addEventListener("load", function(){
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 720;

class InputHandler{
	constructor(){
		this.keys = [];
		window.addEventListener('keydown', e =>{
			if(( e.key === 'ArrowDown' ||
				 e.key === 'ArrowUp' ||
				 e.key === 'ArrowLeft' ||
				 e.key === 'ArrowRight' )
				&& this.keys.indexOf(e.key)=== -1){
				this.keys.push(e.key);
				}
		});
		window.addEventListener('keyup', e =>{
			if(  e.key === 'ArrowDown' ||
				 e.key === 'ArrowUp' ||
				 e.key === 'ArrowLeft' ||
				 e.key === 'ArrowRight'){
				this.keys.splice(this.keys.indexOf(e.key), 1);
			}
		});
	}
}

class Player{
	constructor(gameWidth, gameHeight){
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
		this.width = 200;
		this.height = 200;
		this.x = 0;
		this.y = this.gameHeight - this.height;
		this.image = document.getElementById('playerImage');
		this.frameX = 0; // 0-8
		this.frameY = 0; // 0-1
		this.speed = 0;
	}
	draw(context){
		context.fillStyle = 'white';
		context.fillRect(this.x, this.y, this.width, this.height);
		context.drawImage(this.image, this.frameX*this.width, this.frameY*this.height, this.width, this.height, this.x, this.y, this.width, this.height);
	}
	update(input){
		//horizontal movement
		this.x += this.speed; // we changed here from this.x ++
		if(input.keys.indexOf('ArrowRight') > -1){
			this.speed = 5;
		}else if(input.keys.indexOf('ArrowLeft') > -1){
			this.speed = -5;
		}else {
			this.speed = 1; //what will happen if it is not 0
		}
		if(this.x < 0) this.x = 0; //horizontal boundary
		else if (this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width
	}

}

class Background{

}


class Enemy {

}

function handleEnemies(){

}

function displayStatusText(){

}

const input = new InputHandler();
const player = new Player(canvas.width, canvas.height);



function animate(){
	ctx.clearRect(0, 0, canvas.width, canvas.height); 
	player.draw(ctx); 
	player.update(input);
	
	requestAnimationFrame(animate);	
}
animate();
});