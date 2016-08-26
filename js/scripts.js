

function Pizza (size, topping){
	this.size = size;
	this.topping = topping;
}

Pizza.prototype.fullPrice = function (price) {
	// debugger;
			if (this.size === "Small"){
				this.size = 10;
	} 	if (this.size === "Medium") {
				this.size = 12;
	} 	if (this.size === "Large") {
				this.size = 14;
	}
 		if (this.topping === "Pepperoni"){
			return this.size * 1.2;
		} if (this.topping === "Sausage") {
				return this.size * 1.3;
		} if (this.topping === "Pineapple") {
				return this.size * 1.4;
		}
}


// Front end work
$(document).ready(function(){
		$("form").submit(function(event){
			event.preventDefault();
			var pizzaSize = $("#sizes").val();
			var toppings = $("input:radio[name=topping]:checked").val();
			// var cost = toppings;
			// if (cost === "Sausage"){
			// 	cost = 1.2;
			// } else if (cost === "Pineapple") {
			// 		cost = 1.3;
			// } else {
			// 	cost = 1.4;
			// }
			var pizza = new Pizza (pizzaSize, toppings);

			$("ul#order").append("<li><span class = 'order'>" + pizza.topping + " " + "Pizza" + "</span></li>");
			$('.order').last().click(function(){
				$("#show-order").show();
				$('#show-order h2').text(pizza.topping + " " + "Pizza");
				$('.pizza').text(pizza.size);
				$('.topping').text(pizza.topping);
				$('.total').text("$" + pizza.fullPrice().toFixed(2));
		});
	});
});
