document.addEventListener("DOMContentLoaded", function(){
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 800;

class Game{
	constructor(){
		this.enemies = [];
		this.#addNewEnemy();
		console.log(this.enemies); //check property of enemy//
	}
	update(){
		this.enemies.forEach(object => object.update());//let enemy move//

	}
	draw(){
		this.enemies.forEach(object => object.draw()); //let enemy occur//

	}
	#addNewEnemy(){
		this.enemies.push(new Enemy());
	}
}

class Enemy{
	constructor(){
		this.x = 100;
		this.y = 100;
		this.width = 100;
		this.height = 100;
	}
	update(){
		this.x += 1;
		this.y -= 1;
	}
	draw(){
		ctx.strokeRect(this.x, this.y, this.width, this.height); //enemy's property//
	}
}

	const game = new Game();
	let lastTime = 1;
	function animate(timeStamp){//difference between previous and current animation call in milliseconds//
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		const deltaTime = timeStamp - lastTime;//difference between frames and animate is also called delta time//
		lastTime = timeStamp;
		game.update();
		game.draw();
		//console.log(deltaTime); it costs resourses, better removed//
	// some code
		requestAnimationFrame(animate);
	};
	animate();
}); 