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
		this.vy = 0;
		this.weight = 3; // what will happen if it is not 1
	}
	draw(context){
		context.fillStyle = 'white';
		context.fillRect(this.x, this.y, this.width, this.height);
		context.drawImage(this.image, this.frameX*this.width, this.frameY*this.height, this.width, this.height, this.x, this.y, this.width, this.height);
	}
	update(input){
		
		this.x += this.speed; // we changed here from this.x ++
		if(input.keys.indexOf('ArrowRight') > -1){
			this.speed = 5;
		}else if(input.keys.indexOf('ArrowLeft') > -1){
			this.speed = -5;
		}else if (input.keys.indexOf('ArrowUp') > -1 && this.onGroud() ){//what will happem without && this.onGroud()//
			this.vy -= 32;
		}else {
			this.speed = 0; //what will happen if it is not 0
		}
		//horizontal movement
		this.x += this.speed;
		if(this.x < 0) this.x = 0; //horizontal boundary
		else if (this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width
		//vertical movement
		this.y += this.vy;
		if(!this.onGroud()){ 
			this.vy += this.weight;
			this.frameY = 1;
		}else {
			this.vy = 0;
			this.frameY = 0;
		}
		if(this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height
	}
	onGroud(){
		return this.y >= this.gameHeight - this.height;
	}

}

class Background{
	constructor(gameWidth, gameHeight){
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
		this.image = document.getElementById('backgroundImage');
		this.x = 0;
		this.y = 0;
		this.width = 2400;
		this.height =720;
		this.speed = 5; // wwh if it is not 7
	}
	draw(context){
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
		context.drawImage(this.image, this.x + this.width /*+ 50 see wwh*/, this.y, this.width, this.height);
	}
	update(){
		this.x -= this.speed;
		if(this.x < 0 - this.width) this.x = 0; // what's the meaning of this line
	}
}

class Enemy {

}

function handleEnemies(){

}

function displayStatusText(){

}

const input = new InputHandler();
const player = new Player(canvas.width, canvas.height);
const background = new Background(canvas.width, canvas.height);


function animate(){
	ctx.clearRect(0, 0, canvas.width, canvas.height); 
	background.draw(ctx);
	background.update();
	player.draw(ctx); 
	player.update(input);
	
	requestAnimationFrame(animate);	
}
animate();
});