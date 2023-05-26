function an1(el){
	let spinning = [
		{transform: "rotate(0)"},
		{transform: "rotate(720deg)"},
	]
	let timing = {
		duration: 2000,
		iterations: 1,
	}
	el.animate(spinning, timing);
}

function an2(el){
	let spinning = [
		{transform: "scale(1)"},
		{transform: "scale(0)"},
		{transform: "scale(1)"},
	]
	let timing = {
		duration: 3000,
		iterations: 1,
	}
	el.animate(spinning, timing);
}

function an3(el){
	let spinning = [
		{transform: "translateY(0px)"},
		{transform: "translateY(200px)"},
		{transform: "translateY(0px)"},
	]
	let timing = {
		duration: 2000,
		iterations: 1,
	}
	el.animate(spinning, timing);
}


window.setInterval(text, 1000);

function text(el){
	let tx = document.getElementById('tx');
	if(tx.style.color == 'red'){
		tx.style.color = 'green';
	}
	else{
		tx.style.color = 'red';
	}
}