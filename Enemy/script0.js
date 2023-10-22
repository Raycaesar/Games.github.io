document.addEventListener("load", function(){
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

function animate(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// some code
	requestAnimationFrame(animate);
	}

animate();
});
