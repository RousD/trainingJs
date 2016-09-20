function rosarinear(F){
	var Rosarino= []
	F = F.split(" ")
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

exports.rosarino = rosarinear
