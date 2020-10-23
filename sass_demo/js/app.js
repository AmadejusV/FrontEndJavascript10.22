//alert("testas");

'use strict';

/*var lastname = "paskutinisVardas";
let count = 10;
let price = 11.25;
let items = ['Puodas', 'Kasete'];
let user = {name:'Amis', lastname:'Val'};
let online = false;

console.log(lastname[2]);




    length - suranda ilgį

var vardas = 'Bilas';
vardas.length; // output'as: 5

    Konkretaus eilutės simbolio gavimas

var vardas2 = 'Dilas';
vardas[3]; // output'as: "a"

    Subeilutės radimas eilutėje ir ištraukimas, naudojant indexOf()  ir slice() metodus

vardas.indexOf("las"); // output'as: 2

vardas.slice(0,2); // output'as: "Bi"*/

/*let prekes = ['Batutas', 'Kempine', 'Internetas', 'Pusbrolio ausines', 'Sloikas skausmo'];

let items = [
	{
		vardas:"Amadeus",
		email:"netas@gmail.com",
		ivertinimai: {
			Anglu: 10, Matematika: 4, Lietuviu: "nope" 
		}
	},
	{
		vardas:"Domas",
		email:"kitas@gmail.com"
	}
]

for(let i=0; i<prekes.length; i++){
	console.log(prekes[i]);
}

for(let item in prekes){
	console.log(prekes[item]);
}

for(let item of prekes){
	console.log(item);
}

console.log(items[0].ivertinimai);*/


var knyguKatalogas = 
	[
		{
		 	"IlgosKnygos":[
			 	{
					ISBN: "GR1236K",
					"Leidimo Metai": 2018,
					Pavadinimas: "Mano mintys debesyse",
					"Puslapiu Skaicius": 300
				},
				{
					ISBN: "GR1236K",
					"Leidimo Metai": 2001,
					Pavadinimas: "Mano mintys po vandeniu",
					"Puslapiu Skaicius": 359
				},
				{
					ISBN: "GR1236K",
					"Leidimo Metai": 1984,
					Pavadinimas: "Mano mintys kitam kambaryje",
					"Puslapiu Skaicius": 367
				},
				{
					ISBN: "GR1236K",
					"Leidimo Metai": 1928,
					Pavadinimas: "Mano mintys vogtos",
					"Puslapiu Skaicius": 500
				}
			]
		},
		{
			"TrumposKnygos":[
				{
					ISBN: "GR1236K",
					"Leidimo Metai": 2001,
					Pavadinimas: "Mano mintys debesyse",
					"Puslapiu Skaicius": 120
				},
				{
					ISBN: "GR1236K",
					"Leidimo Metai": 1928,
					Pavadinimas: "Mano mintys po vandeniu2",
					"Puslapiu Skaicius": 85
				},
				{
					ISBN: "GR1236K",
					"Leidimo Metai": 2018,
					Pavadinimas: "Mano mintys kitam kambaryje2",
					"Puslapiu Skaicius": 200
				},
				{
					ISBN: "GR1236K",
					"Leidimo Metai": 1984,
					Pavadinimas: "Mano mintys vogtos2",
					"Puslapiu Skaicius": 115
				}
			]
		},
		{
			"AudioKnygos": 
			[
				{
					ISBN: "GR1236K",
					"Leidimo Metai": 1984,
					Pavadinimas: "Mano mintys debesyse audio",
					"Puslapiu Skaicius": 300
				},
				{
					ISBN: "GR1236K",
					"Leidimo Metai": 2018,
					Pavadinimas: "Mano mintys debesyse audio ",
					"Puslapiu Skaicius": 300
				},
				{
					ISBN: "GR1236K",
					"Leidimo Metai": 1928,
					Pavadinimas: "Mano mintys debesyse audio",
					"Puslapiu Skaicius": 300
				},
				{
					ISBN: "GR1236K",
					"Leidimo Metai": 2001,
					Pavadinimas: "Mano mintys debesyse audio",
					"Puslapiu Skaicius": 300
				}
		
			]
		}		
];


/*for(let item in knyguKatalogas){
	for(let category in knyguKatalogas[item]){
		console.log(category+":");
		for(let knyga in knyguKatalogas[item][category]){
			console.log("knyga nr: "+knyga);
			for(let knygosInfo in knyguKatalogas[item][category][knyga]){
				console.log(knygosInfo+ " " + knyguKatalogas[item][category][knyga][knygosInfo]);
			}
		}
	}
}*/

for(var object in knyguKatalogas){

	for(var category in knyguKatalogas[object]){
		console.log(category+" ("+knyguKatalogas[object][category].length+" knygos)");

		for(var book in knyguKatalogas[object][category]){


			for(var bookInfo in knyguKatalogas[object][category][book]){

				if(bookInfo == "Leidimo Metai" && knyguKatalogas[object][category][book][bookInfo]>=2018){
					console.log(" "+bookInfo+": "+knyguKatalogas[object][category][book][bookInfo]+" (Nauja knyga(Beveik...))");
				}else{
					console.log(" "+bookInfo+": "+knyguKatalogas[object][category][book][bookInfo]);
				}
			}
			console.log("");
		}
		console.log("----------------------------------");
	}
}


/*for(kateg of knyguKatalogas){
	for(bookInfo in kateg){
		console.log("kategorija: "+kategorija);
		console.log("----------------------------------");

		for(kiek in kategorija){
			for(bookInfo in kateg[kategorija][kiek]){
				console.log("       "+bookInfo+"   :   "+kateg[kategorija][kiek][bookInfo]);
			}
			console.log("-----------------------------------");
		}
	}
}*/