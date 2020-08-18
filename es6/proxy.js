
var obj = new Proxy({},{
	get:function(target,propkey,receiver){
		console.log(`getting ${propkey}`)
		return Reflect.get(target,propkey,receiver)

	},
	set:function(target,propkey,receiver){
		console.log(`setting ${propkey}`)
		return Reflect.set(target,propkey,receiver)
	}
})

obj.count = 1 //setting count

++obj.count //getting count
            //setting count
            //









