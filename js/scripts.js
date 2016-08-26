var consumer = 0;


function Pizza (size, topping){
	this.size = size;
	this.toppng = topping;
}

Pizza.prototype.totalPrice = function () {
	if (topping === "sasauge") {
		size * .3;
	} if (topping === "pinapple") {
		size * .4;
	} if (topping === "pepporini") {
		size * .5;
	}
	return this.topping + "pizza";
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

		$("#order").text(pizzaSize + toppings);

	});
});
