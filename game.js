window.onload = pageLoad;

function pageLoad() {
	document.getElementById("start").onclick = startGame;
}

function startGame() {
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart() {
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min * 60;
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	timer = setInterval(timeCount, TIMER_TICK);

	function timeCount() {
		var allbox = document.querySelectorAll("#game-layer div");
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		second--;
		x.innerHTML = second;
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		if (allbox.length == 0 && second >= 1)
		{
			alert("You Win");
			second = 0;
			clearInterval(timer);
			x.innerHTML = second;
		}
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
		else if (allbox.length >= 1 && second < 1)
		{
			alert("Game Over");
			clearInterval(timer);
			clearScreen();
		}
	}
}

function addBox() {
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("game-layer");
	var colorDrop = document.getElementById("color").value;
	for (var i = 0; i < numbox; i++) {
		var tempbox = document.createElement("div");
		tempbox.className = "square";
		tempbox.id = "box" + i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		tempbox.style.backgroundColor = colorDrop;
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box) {
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function (click) {
	box.parentNode.removeChild(box);
	}
}

function clearScreen() {
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#game-layer div");
	//delete all  div
	var gameLayer = document.getElementById("game-layer");
	for (var i = 0; i < allbox.length; i++) {
		gameLayer.removeChild(allbox[i]);
	}
}




