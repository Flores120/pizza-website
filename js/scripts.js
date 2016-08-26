function Pizza (size, topping, price){
	debugger;
	this.size = size;
	this.topping = topping;
	this.price = price;
}

Pizza.prototype.fullOrder = function () {
	return this.topping + " " + "Pizza";
};



// Front end work
$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();
		var small = new Pizza(8)
		var medium = new Pizza(12)
		var large = new Pizza(14)
		var pizzaSize = $("#sizes").val();
		var toppings = $("input:radio[name=topping]:checked").val();
		var newPizza = new Pizza(pizzaSize, toppings);
		var cost = new Pizza(pizzaSize * toppings);
		$("ul#order").append("<li><span class = 'order'>" + newPizza.fullOrder()  + "</span></li>");
		  $('.order').last().click(function(){
				$("#show-order").show();
				$('#show-order h2').text(newPizza.topping + " " + "Pizza");
				$('.pizza').text(newPizza.size);
				$('.topping').text(newPizza.topping);


				$('.total').text(cost);

		});
	});
});
