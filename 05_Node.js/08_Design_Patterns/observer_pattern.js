class CricketData {
	runs = 0;
	wickets = 0;
	overs = 0.0;
	observers = [];

	getRuns() {
		return Math.round(Math.random() * 301);
	}

	getWickets() {
		return Math.round(Math.random() * 11);
	}

	getOvers() {
		return (
			Math.round(Math.random() * 50) + Math.round(Math.random() * 5) / 10
		);
	}

	addObserver(observer) {
		this.observers.push(observer);
	}

	removeObserver(observer) {
		const index = this.observers.findIndex((obs) => obs === observer);
		if (index !== -1) {
			this.observers.splice(index, 1);
		}
	}

	notifyObservers() {
		this.observers.forEach((observer) =>
			observer.update(this.runs, this.wickets, this.overs)
		);
	}

	dataChanged() {
		this.runs = this.getRuns();
		this.wickets = this.getWickets();
		this.overs = this.getOvers();

		this.notifyObservers();
	}
}

class CurrentScore {
	runs;
	wickets;
	overs;

	update(runs, wickets, overs) {
		this.runs = runs;
		this.wickets = wickets;
		this.overs = overs;

		this.display();
	}

	display() {
		console.log(
			`Live Score: ${this.runs}/${this.wickets} Overs ${this.overs} / 50`
		);
	}
}

class AverageScore {
	runRate = 0.0;

	update(runs, wickets, overs) {
		if (overs > 0) this.runRate = (runs / overs).toFixed(2);

		this.display();
	}

	display() {
		console.log(`Run Rate: ${this.runRate}`);
	}
}

function init() {
	const currentScore = new CurrentScore();
	const averageScore = new AverageScore();

	const cricketData = new CricketData();

	cricketData.addObserver(currentScore);
	cricketData.addObserver(averageScore);

	cricketData.dataChanged();

	// cricketData.removeObserver(averageScore);
	cricketData.dataChanged();
}

init();
