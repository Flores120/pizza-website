function Pizza (size, topping){
	this.size = size;
	this.topping = topping;
}

Pizza.prototype.fullPrice = function (price) {
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
$(document).ready(function(){
		$("form").submit(function(event){
			event.preventDefault();
			var pizzaSize = $("#sizes").val();
			var toppings = $("input:radio[name=topping]:checked").val();
			var pizza = new Pizza (pizzaSize, toppings);
			var price = pizza.fullPrice();
			var arr = [];
			var join = arr.push(price);
			for (var i = 0; i < join.length; i++) {
				var con = arr.concat(join[i]);
			}
			if (pizza.topping === undefined) {
				alert("Please select a pizza")
			} else {
				document.getElementById('orderIn').style.background = "rgba(0, 0, 0, .8)"
				document.getElementById('yourorder').innerHTML = "Your Order";
				$("ul#order").append("<li><span class = 'order'>" + pizza.topping + " " + "Pizza" + "</span></li>");
			}
			$('.order').last().click(function(){
				$("#show-order").show();
				if (pizza.topping === undefined) {

				} else {
					$('#show-order h2').text(pizza.topping + " " + "Pizza");
					$('.pizza').text(pizza.size);
					$('.topping').text(pizza.topping);
					$('.total').text("$" + pizza.fullPrice().toFixed(2));
				}

				if (pizza.topping === "Pineapple") {
					$("#image").html('<img src="./img/pineapple.png" />');
				} else if (pizza.topping === "Pepperoni") {
					$("#image").html('<img src="./img/pepperoni.png" />');
				} else {
					$("#image").html('<img src="./img/sausage.png" />');
				}
		});
	});
});
// var total =
