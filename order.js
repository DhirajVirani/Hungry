var addburger = document.getElementById("burgeradd");
var deductburger = document.getElementById("burgerdeduct");
var addpizza = document.getElementById("pizzaadd");
var deductpizza = document.getElementById("pizzadeduct");
var addburrito = document.getElementById("burritoadd");
var deductburrito = document.getElementById("burritodeduct");
var addcappuccino = document.getElementById("cappuccinoadd");
var deductcappuccino = document.getElementById("cappuccinodeduct");
var total = 0;
var x = [8.99, 14.99, 6.99, 3.99];

function Add(a){
	total = total + a;
	console.log("Add", Math.abs(total.toFixed(2)));
}

function Deduct(a){
	if (total > 0){
		total= total - a;
	}else{
		total=0
	}
		console.log("deduct", Math.abs(total.toFixed(2)));
		return total;
}


addburger.addEventListener("click", function() { Add(x[0]); });
deductburger.addEventListener("click", function() { Deduct(x[0]); });
addpizza.addEventListener("click", function() { Add(x[1]); });
deductpizza.addEventListener("click", function() { Deduct(x[1]); });
addburrito.addEventListener("click", function() { Add(x[2]); });
deductburrito.addEventListener("click", function() { Deduct(x[2]); });
addcappuccino.addEventListener("click", function() { Add(x[3]); });
deductcappuccino.addEventListener("click", function() { Deduct(x[3]); });