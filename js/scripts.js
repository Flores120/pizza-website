var consumer = 0;


function Pizza (size, topping){
	this.size = size;
	this.topping = topping;
}
Pizza.prototype.totalPrice = function () {

};






// Front end work
$(document).ready(function(){
	$("form").submit(function(){
		event.preventDefault();
		var small = new Pizza(8)
		var medium = new Pizza(12)
		var large = new Pizza(14)
		var pizzaSize = $("#sizes").val();
		var toppings = $("input:radio[name=topping]:checked").val();

	});
});
