var playerone= document.querySelector("#p1");
var playertwo= document.querySelector("#p2");
var reset= document.querySelector("#reset");
var p1scr = document.querySelector("#p1scr");
var p2scr = document.querySelector("#p2scr");
var reset= document.querySelector("#reset");
var p1score=0;
var p2score=0;
var gameover=false;
var winningstate=5;
var numinput=document.querySelector("input");
var winningscoredisplay= document.querySelector("p span");

playerone.addEventListener("click",function () {
	if(!gameover)
	{
		p1score++;
		if(p1score===winningstate)
		{
			p1scr.classList.add("winner");
			gameover=true;
		}
		p1scr.textContent= p1score;
	}
});

playertwo.addEventListener("click",function () {
	if(!gameover)
	{
		p2score++;
		if(p2score===winningstate)
		{
			p2scr.classList.add("winner");
			gameover=true;
		}
		p2scr.textContent= p2score;
	}
});


reset.addEventListener("click",function(){
	resetgame();
})
function resetgame() {
	p1scr.textContent= 0;
	p2scr.textContent= 0;
	p1score=0;
	p2score=0;
	gameover= false; 
	p1scr.classList.remove("winner");
	p2scr.classList.remove("winner");
}
numinput.addEventListener("change",function(){
	winningscoredisplay.textContent = numinput.value;
	winningstate = parseInt(numinput.value);
	resetgame(); 
})