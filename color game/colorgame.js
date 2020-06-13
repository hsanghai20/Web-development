var noOfSquares= 6;
var colors=generateRandomColor(noOfSquares);
var pickedColor= pickColor();
var square= document.querySelectorAll(".square");
var message= document.querySelector("#message");
var h1=document.querySelector("h1");
var reset= document.querySelector("#reset");
var level= document.querySelectorAll(".level");
var colorDisplay=document.querySelector("h1 span");
colorDisplay.textContent = pickedColor;
for (var i=0;i<square.length;i++)
{
	square[i].style.backgroundColor = colors[i]; 
	square[i].addEventListener("click",function () {
		var clickedColor=this.style.backgroundColor;
		if(clickedColor === pickedColor)
		{
			message.textContent= "Correct";
			reset.textContent= "Play Again?";
			changeColor(clickedColor);
			h1.style.backgroundColor= clickedColor;
		}
		else
		{
			this.style.backgroundColor= "#232323";
			message.textContent= "Try Again";
		}
	});
}

for (var i=0;i<level.length;i++)
{
	level[i].addEventListener("click",function () {
		level[0].classList.remove("selected");
		level[1].classList.remove("selected");
		this.classList.add("selected");
		// if(this.textContent==="Easy")
		// {
		// 	noOfSquares=3;
		// }
		// else{
		// 	noOfSquares=6;
		// }
		this.textContent === "Easy" ? noOfSquares= 3 : noOfSquares= 6;
		resetGame();
	});		
}
function changeColor(clickedColor) {
	for (var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor= clickedColor;
	}
}

function pickColor()
{
	return colors[Math.floor(Math.random()*colors.length)];
}


function generateRandomColor(num) {
	var arr= [];
	for (var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}
function resetGame() {
	colors = generateRandomColor(noOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i=0;i<square.length;i++)
	{
		if(colors[i])
		{
			square[i].style.display = "block";
			square[i].style.backgroundColor= colors[i];
		}
		else
		{
			square[i].style.display = "none";
		}
	}
	h1.style.backgroundColor= "steelblue";
	message.textContent="";
	reset.textContent="New colors";
}
reset.addEventListener("click",function () {
	resetGame();
});

function randomColor() {
	// picked red from rgb
	var red = Math.floor(Math.random()*256);
	// picked green from rgb
	var green = Math.floor(Math.random()*256);
	// picked blue from rgb
	var blue = Math.floor(Math.random()*256);
	var result= "rgb(" + red + ", "+ green + ", " + blue + ")";
	return result;
}
// easy.addEventListener("click",function () {
// 	hard.classList.remove("selected");
// 	easy.classList.add("selected");
// 	noOfSquares=3
// 	colors = generateRandomColor(noOfSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i=0;i<square.length;i++)
// 	{
// 		if(colors[i])
// 		{
// 			square[i].style.backgroundColor= colors[i];
// 		}
// 		else
// 		{
// 			square[i].style.display = "none";
// 		}
// 	}
// 	h1.style.backgroundColor= "steelblue";
// 	message.textContent="";	
// });
// hard.addEventListener("click",function () {
// 	easy.classList.remove("selected");
// 	hard.classList.add("selected");
// 	noOfSquares=6;
// 	colors = generateRandomColor(noOfSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i=0;i<square.length;i++)
// 	{
// 		if(i>=3)
// 		{
// 			square[i].style.display= "block";
// 		}
// 		square[i].style.backgroundColor= colors[i];
// 	}	
// 	h1.style.backgroundColor= "steelblue";
// 	message.textContent="";	
// });
