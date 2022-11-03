const timer = 3; 

// timer impostato a 3 che userò *1500 = 4,5 sec e mezzo
// nella function disappear -1 * 1500 quindi 3 secondi, dopo 1,5 secondi apparirà il prompt 

const numeriCasuali = [];

for(let i = 0; i < 5; i++) {
	const num = generaNumeroRandom(1, 100);
	numeriCasuali.push(num);
} 

// dichiarazioni query 

let numeriPrint = document.querySelector('h1');
let print = document.querySelector('h3');
let printResult = document.querySelector('h5');
let printDisappear = document.querySelector('h4');


numeriPrint.innerHTML = (`I numeri da ricordare sono ${numeriCasuali}`);  
// dichiarazioni query end



// function disappear dei number 

setTimeout(function(){
	numeriPrint.innerHTML = 'Adesso tocca a te ricordare!';
    printDisappear.innerHTML = '';
    
    
}, (timer - 1) * 1500 );
 

// function end 



// start function con interazione utente 

setTimeout(function(){
	
	const numeriUtente = [];

	for(let i = 0; i < 5; i++) {
		const num = parseInt(prompt("Inserisci un numero"));
		numeriUtente.push(num);
        print.innerHTML = (numeriUtente);
	}
	
	
	const numeriValidi = [];
	for(let i = 0; i < numeriUtente.length; i++) {
		
		if(numeriCasuali.includes(numeriUtente[i]) == true) {
			numeriValidi.push(numeriUtente[i]);
		}
	}

	if(numeriValidi.length == 0) {
		printResult.innerHTML = (`Hai indovinato ${numeriValidi.length} numeri, non mi sembrava così difficile :(`);
	} else {
		printResult.innerHTML = (`Hai indovinato ${numeriValidi.length} numeri, i numeri indovinati sono: ${numeriValidi}`);
	}

}, timer * 1500);


// end function 




// function math random 0-100 per generare i numeri random

function generaNumeroRandom(min, max) {
	return Math.floor(Math.random() * 100 );
}

