/*-------------Variable------------------*/
var prizePizzaName = 0;
var prizeSizePizza = 0;
var priceToppings = [0,0,0,0,0,0,0,0,0,0,0,0];
var totalPrice = 0;

/*--------------Start-----------------------------*/
disableAllTopping();

/*--------------TotalPrice-----------------------------------*/
function sumAllPrice()
{
	totalPrice =  pricePizaName + prizeSizePizza;
	var i;
	for (i=0; i<12; i++)
	{
		totalPrice = totalPrice + priceToppings[i];
	}
	document.getElementById("totalprice").innerHTML = totalPrice;
}

/*-------------Form Function--------------------------------*/
function namePizzaSelected(x, xx)
{
	enablePizzaToppings(xx);
	pricePizaName = x;
	sumAllPrice();
}
function sizePizzaSelected(x)
{	
	prizeSizePizza = x;
	sumAllPrice();
}
function toppingsPizzaSelected(x,y)
{
	var z = document.getElementsByName("pizzatoppings")[y].checked;
	if(z == true)
	{
		priceToppings[y] = x;
	}
	else
	{
		priceToppings[y] = 0;
	}
	sumAllPrice();
}

/*--------------Toppings------------------------------------*/
function disableAllTopping()
{
	var x = document.getElementsByName("pizzatoppings");
	var i;
	for (i=0; i < x.length; i++)
	{
	document.getElementsByName("pizzatoppings")[i].disabled =true;
	}
}
function enablePizzaToppings(xx)
{
	disableAllTopping();
	var x = document.getElementsByClassName(xx).length;
	var i;
	for (i=0; i<x; i++)
	{
		document.getElementsByClassName(xx)[i].disabled = false;
	}
	unCheckedPizzaTopping();
}
function unCheckedPizzaTopping()
{
	var x = document.getElementsByName("pizzatoppings").length;
	var i ;
	for (i=0; i< x; i++)
	{
		var z = document.getElementsByName("pizzatoppings")[i];
		if(z.disabled == true && z.checked == true)
		{
			z.checked = false;			
			priceToppings[i] = 0;
		}
	}	
}
/*---------------------------------------------------*/