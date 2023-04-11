var cadi = {
	make: "GM",
	model: "Cadillac",
	year: 1955,
	color: "tan",
	passengers: 5,
	convertible: false,
	mileage: 12892,
	started: false,
	start: function() {
		this.started = true;
	},
	stop: function() {
		this.started = false;
	},
	drive: function() {
		if (this.started) {
			alert(this.make + " " +
			this.model + " goes zoom zoom!");
		} else {
			alert("You need to start the engine first.");
		}
	}
};
cadi.start();
cadi.drive();
cadi.stop();
var chevy = {
	make: "Chevy",
	model: "Bel Air",
	year: 1957,
	color: "red",
	passengers: 2,
	convertible: false,
	mileage: 1021,
	started: false,
		start: function() {
		this.started = true;
	},
	stop: function() {
		this.started = false;
	},
	drive: function() {
		if (this.started) {
			alert(this.make + " " +
			this.model + " goes zoom zoom!");
		} else {
			alert("You need to start the engine first.");
		}
	}
};
chevy.start();
chevy.drive();
chevy.stop();
var taxi = {
	make: "Webville Motors",
	model: "Taxi",
	year: 1955,
	color: "yellow",
	passengers: 4,
	convertible: false,
	mileage: 281341,
	started: false,
		start: function() {
		if(this.started = false) {
			this.started = true;
		}
	},
	stop: function() {
		this.started = false;
	},
	drive: function() {
		if (this.started) {
			alert(this.make + " " +
			this.model + " goes zoom zoom!");
		} else {
			alert("You need to start the engine first.");
		}
	}
};
taxi.start();
taxi.drive();
taxi.stop();