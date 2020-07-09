var myWindow = {}
var amount = 0
var lastWindow = -5
var leftOrRight = false
var upOrDown = false

var x = Math.random() * 1000
var y = Math.random() * 1000

var name = "0"
while (amount > lastWindow) {
	if (leftOrRight == true) {
		x = x - 20
	} else {
		x = x + 20
	}

	if (upOrDown == true) {
		y = y - 20
	} else {
		y = y + 20
	}

	if (x < 0) {
		leftOrRight = false
	} else if (x > 1000) {
		leftOrRight = true
	}

	if (y < 0) {
		upOrDown = false
	} else if (x > 400) {
		upOrDown = true
	}
	amount = amount + 1
	lastWindow = amount - 5
	myWindow[amount] = window.open("", amount.toString(), "width=150, height=150");
	myWindow[amount].document.write("<title>number " + amount + "</title> <script src='main.js'></script>");
	myWindow[amount].moveTo(x, y);
}
