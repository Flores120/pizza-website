function Pizza (size, topping){
	// debugger;
	this.size = size;
	this.topping = topping;
}

Pizza.prototype.fullPrice = function () {
}

	var small = new Pizza(10)
	var medium = new Pizza(12)
	var large = new Pizza(14)


// Front end work
$(document).ready(function(){
		$("form").submit(function(event){
			event.preventDefault();
			var pizzaSize = $("#sizes").val();
			var toppings = $("input:radio[name=topping]:checked").val();
			var cost = pizzaSize;
			if (cost === "Small"){
				cost = small;
			} else if (cost === "Medium") {
					cost = medium;
			} else {
				cost = large;
			}
			var pizza = new Pizza (pizzaSize, toppings);

			$("ul#order").append("<li><span class = 'order'>" + pizza.topping + " " + "Pizza" + "</span></li>");
			$('.order').last().click(function(){
				$("#show-order").show();
				$('#show-order h2').text(pizza.topping + " " + "Pizza");
				$('.pizza').text(pizza.size);
				$('.topping').text(pizza.topping);
				$('.total').text(pizza.fullPrice());
		});
	});
});
