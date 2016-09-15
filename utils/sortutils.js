function ordenar(arrParam1){
	return arrParam1.sort(function(a, b){return a - b})

}

function mayoramenor(arrParam2){
	return arrParam2.sort(function(a, b){return b - a})

}

exports.ordenarasc = ordenar
exports.ordenardesc = mayoramenor
    