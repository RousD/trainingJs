console.log("Bievenido. Las unicas opciones disponibles son 1, 2 y 3")


process.stdin.once("data", function(x){
	
	var A= x.toString().trim() 
	
	if (A ==="1"){
		
		console.log("Ingrese valores a ordenar")
		
		process.stdin.once("data", function (Y){
			var B= Y.toString().trim()
			var C= B.split(",")
			
				
			C.forEach( function seleccionar(item){
	 						item= parseInt(item)
	 						if(isNaN (item)){
	  							console.log("Chau")	  						
							}
						})

			console.log(ordenar(C))

		})
	}

	if (A ==="2"){
		
		console.log("Ingrese valores a ordenar de mayor a menor")
		
		process.stdin.once("data", function (Z){
			var B= Z.toString().trim()
			var C= B.split(",")
			
				
			C.forEach( function seleccionar(item){
	 						item= parseInt(item)
	 						if(isNaN (item)){
	  							console.log("Chau")	  						
							}
						})

			console.log(descendente(C))

		})
	}

if (A ==="3"){
		
		console.log("Ingrese la frase a traducir a rosarino")
		
		process.stdin.once("data", function (Z){
			var B= Z.toString().trim()
			var F= B.split(" ")
			console.log(rosarinear(F))
		})

	}


})


function ordenar(C){
	return C.sort(function(a, b){return a - b})

}

function descendente(C){
	return C.sort(function(a, b){return b - a})
	
}

function rosarinear(F){
	var Rosarino= []

	  		F.forEach(function(word){
            	var R= word.length -1
	            if (word[R]==="s"){
	            	Rosarino.push(word.substring(0, word.length -1))
	            }
	            else {
	            	Rosarino.push(word)
	            }

	  		}) 

			return Rosarino.toString().replace(/,/g, " ")

}

