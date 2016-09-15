var sortutils= require ("./utils/sortutils")
var sortrosarinear= require ("./utils/sortrosarinear")
mostrarBienvenido()

var currentOption= "0"

process.stdin.on("data", function(x){
	var userInput= x.toString().trim()

	console.log("elegiste la opcion " + userInput);

	if (currentOption==="1"){
		opcion1(userInput)
		currentOption= "0" 
		mostrarRepeticion()
	}
	if (currentOption==="2"){
		opcion2(userInput)
		currentOption="0"
		mostrarRepeticion()
	}
	if (currentOption==="3"){
		opcion3(userInput)
		currentOption="0"
		mostrarRepeticion()
	}
	if (currentOption==="0" && userInput==="1") {
		console.log("Ingrese valores a ordenar separados por coma")
		currentOption="1"
	}
	if (currentOption==="0" && userInput==="2"){
		console.log("Ingrese valores a ordenar separados por coma")
		currentOption="2"
	}
	if (currentOption==="0" && userInput==="3"){
		console.log("Ingrese la frase a traducir a rosarino")
		currentOption==="3"
	}
	if (userInput==="4"){
		opcion4(userInput)
		process.exit()
		currentOption==="4"
	}
})

function opcion1(parametro1){
	var arrayAOrdenar= parametro1.split(",")
	
	arrayAOrdenar.forEach( function seleccionar(item){
	 						item= parseInt(item)
	 						if(isNaN (item)){
	  							console.log("Algun valor del array no es un numero")

							}
						})

	console.log(sortutils.ordenarasc(arrayAOrdenar))
}

function opcion2(parametro2){
	var arrayAOrdenar= parametro2.split(",")
	
	arrayAOrdenar.forEach( function seleccionar(item){
	 						item= parseInt(item)
	 						if(isNaN (item)){
	  							console.log("Algun valor del array no es un numero")

							}
						})

	console.log(sortutils.ordenardesc(arrayAOrdenar))
}

function opcion3(frase){
	
	console.log(sortrosarinear.rosarino(frase))

}



function mostrarBienvenido (){
	console.log("Bienvenido. Las opciones disponibles son:")
	mostrarOpciones()

}
	function mostrarOpciones(){
		console.log(" 1 - Ordenar valores numericos de menor a mayor\n 2 - Ordenar valores numericos de mayor a menor\n 3 - Remover la ultima s de cada palabra ingresada\n 4 - Salir")
}

function mostrarRepeticion (){
	console.log("La accion a sido completada. Para realizar otra accion, elija entre las siguientes:")
	mostrarOpciones()
}



