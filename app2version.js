mostrarOpciones()
var currentOption= "0"

process.stdin.on("data", function(x){

	var userInput= x.toString().trim()
	if (currentOption==="1"){
		opcion1(userInput)
		currentOption= "0" 
		mostrarOpciones()
	}
	if (currentOption==="0" && userInput==="1") {
		console.log("Ingrese valores a ordenar separados por coma")
		currentOption="1"
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

	console.log(ordenar(arrayAOrdenar))
}

function ordenar(arrParam1){
	return arrParam1.sort(function(a, b){return a - b})

}

function mostrarOpciones (){
	console.log("Las unicas opciones disponibles son 1, 2 y 3")
}


////como resolver el problema del bienvenido y las opciones a mostrar////