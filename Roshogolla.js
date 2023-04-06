var player = document.getElementById("player");
var roshogollas = document.getElementById("Roshogolladiv");
var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
var	playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'));
var scoreh1 = document.getElementById("score")
var score = 0;

	// window.setInterval(CreateRoshogolla, 2000) 

function CreateRoshogolla(){
	var roshogollaBottom = 470
	var roshogollaLeft = Math.floor(Math.random()*300);
	var roshogolla = document.createElement("div");
	roshogolla.setAttribute("class", "roshogolla");
	roshogollas.appendChild(roshogolla);
	function RoshogollaFall(){
		
		if( roshogollaBottom < playerBottom + 105 && roshogollaBottom > playerBottom && roshogollaLeft > playerLeft - 50 && roshogollaLeft < playerLeft + 80){
			roshogollas.removeChild(roshogolla)
			clearInterval(FallInterval)
			score++;
			scoreh1.innerHTML=`Score: ${score}`
		}
		if(roshogollaBottom < playerBottom){
			alert(`you lost, your score is ${score}`);
			clearInterval(FallInterval)
			clearTimeout(roshogollaTimeout)
			location.reload()
		}
			
		
		roshogollaBottom -=9;
		roshogolla.style.bottom = roshogollaBottom + 'px';
	}
	var FallInterval= setInterval(RoshogollaFall, 70); 
	var roshogollaTimeout=setTimeout(CreateRoshogolla, 2000);
	roshogolla.style.bottom = roshogollaBottom + 'px';
	roshogolla.style.left = roshogollaLeft + 'px';
	
}
CreateRoshogolla();
function Left(){
		// x=document.getElementById('player').offsetLeft;
		// x = x-10;
		playerLeft -=15;
  		player.style.left= playerLeft + "px";
}


function Right(){
		playerLeft +=15;
  		player.style.left= playerLeft + "px";
  	}

