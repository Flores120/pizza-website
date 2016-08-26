var consumer = 0;

function Pizza (size){
	debugger
	this.size = size;
	if (size === "small"){
		this.price = 8;
	} else if (this.size === "medium") {
		this.price = 12;
	} else if (size = "large") {
		this.price = 14;
	}
}

function price (price){
	this.price = price;
}








// Front end work
$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();
		var small = $("#small").val();
		var medium = $("#medium").val();
		var large = $("#large").val();
		var newPizza = new Pizza(small, medium, large);
		$("#order").append(newPizza.size);
	});
});
