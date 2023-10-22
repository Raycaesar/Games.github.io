document.addEventListener("DOMContentLoaded", function(){
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 800;

class Game{
	constructor(){
		this.enemies = [];
	}
	update(){

	}
	draw(){

	}
	#addNewEnemy(){

	}
}

class Enemy{
	constructor(){

	}
	update(){

	}
	draw(){

	}
}

	let lastTime = 1;
	function animate(timeStamp){//difference between previous and current animation call in milliseconds//
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		const deltaTime = timeStamp - lastTime;//difference between frames and animate is also called delta time//
		lastTime = timeStamp;
		console.log(deltaTime);
	// some code
		requestAnimationFrame(animate);
	};
	animate();
}); // we can check the console.log now//