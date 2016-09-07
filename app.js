console.log("Bievenido. La unica opcion disponible es 1")


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
			
			console.log(ordenar())

		})
	}

})



function ordenar(C){
	return []
}