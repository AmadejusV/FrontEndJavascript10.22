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
					LeidimoMetai: 2018,
					Pavadinimas: "Mano mintys debesyse",
					PuslapiuSkaicius: 300
				},
				{
					ISBN: "GR1236K",
					LeidimoMetai: 2001,
					Pavadinimas: "Mano mintys po vandeniu",
					PuslapiuSkaicius: 359
				},
				{
					ISBN: "GR1236K",
					LeidimoMetai: 1984,
					Pavadinimas: "Mano mintys kitam kambaryje",
					PuslapiuSkaicius: 367
				},
				{
					ISBN: "GR1236K",
					LeidimoMetai: 1928,
					Pavadinimas: "Mano mintys vogtos",
					PuslapiuSkaicius: 500
				}
			]
		},
		{
			"TrumposKnygos":[
				{
					ISBN: "GR1236K",
					LeidimoMetai: 2001,
					Pavadinimas: "Mano mintys debesyse",
					PuslapiuSkaicius: 120
				},
				{
					ISBN: "GR1236K",
					LeidimoMetai: 1928,
					Pavadinimas: "Mano mintys po vandeniu2",
					PuslapiuSkaicius: 85
				},
				{
					ISBN: "GR1236K",
					LeidimoMetai: 2018,
					Pavadinimas: "Mano mintys kitam kambaryje2",
					PuslapiuSkaicius: 200
				},
				{
					ISBN: "GR1236K",
					LeidimoMetai: 1984,
					Pavadinimas: "Mano mintys vogtos2",
					PuslapiuSkaicius: 115
				}
			]
		},
		{
			"AudioKnygos": 
			[
				{
					ISBN: "GR1236K",
					LeidimoMetai: 1984,
					Pavadinimas: "Mano mintys debesyse audio",
					PuslapiuSkaicius: 300
				},
				{
					ISBN: "GR1236K",
					LeidimoMetai: 2018,
					Pavadinimas: "Mano mintys debesyse audio ",
					PuslapiuSkaicius: 300
				},
				{
					ISBN: "GR1236K",
					LeidimoMetai: 1928,
					Pavadinimas: "Mano mintys debesyse audio",
					PuslapiuSkaicius: 300
				},
				{
					ISBN: "GR1236K",
					LeidimoMetai: 2001,
					Pavadinimas: "Mano mintys debesyse audio",
					PuslapiuSkaicius: 300
				}
		
			]
		}		
];


for(let item in knyguKatalogas){

	for(let category in knyguKatalogas[item]){
		console.log(category+":");

		for(let knyga in knyguKatalogas[item][category]){
			console.log("knyga nr: "+knyga);

			for(let knygosInfo in knyguKatalogas[item][category][knyga]){
				console.log(knygosInfo+ " " + knyguKatalogas[item][category][knyga][knygosInfo]);


			}
		}
	}
}
