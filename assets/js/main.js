const timer = 4;

const numeriCasuali = [];

for(let i = 0; i < 5; i++) {
	const num = generaNumeroRandom(1, 100);
	numeriCasuali.push(num);
}





function generaNumeroRandom(min, max) {
	return Math.floor(Math.random() * 100 );
}

let numeriPrint = document.querySelector('h1');
numeriPrint.innerHTML = (`I numeri da ricordare sono ${numeriCasuali}`);   