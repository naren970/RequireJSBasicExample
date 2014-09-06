define(["credits", "products"], function(credits, products) {
	// body...
	console.log("Im in pruchase JS : pruchaseProduct()");

	return {
		pruchaseProduct : function(){
			var credits1 = credits.getCredits();
			if(credits1>0)
			{
				console.log("credits are", credits1);
				products.reserveProduct();
				return true;
			}else{
				return false;	
			}

			
		}
	}
})