function formatDate(date) {
	return date.toLocaleString("en-US", {
		day: "numeric",
		month: "short",
		year: "2-digit",
	});
}

class Interval {
	start;
	end;

	constructor(start, end) {
		this.start = start;
		this.end = end;
	}

	setStart(start) {
		this.start = start;
	}

	setEnd(end) {
		this.end = end;
	}

	display() {
		console.log(`[${formatDate(this.start)}, ${formatDate(this.end)}]`);
	}
}

class IntervalSortStartegy {
	sort(intervals) {
		return intervals.sort(this.comparator);
	}

	comparator(first, second) {
		return false;
	}
}

IntervalSortStartegy.Strategy1 = new IntervalSortStartegy();
IntervalSortStartegy.Strategy1.sort = function (intervals) {
	const updatedIntervals = [];
	intervals.reduce((newIntervals, interval) => {
		newIntervals.push(interval.start);
		newIntervals.push(interval.end);
		return newIntervals;
	}, updatedIntervals);

	// sort by calendar
	updatedIntervals.sort(this.comparator);

	// pair by intervals
	const result = [];
	updatedIntervals.reduce((resultIntervals, interval, currIdx) => {
		if (resultIntervals.length === 0) {
			// Means we have to start a new Interval
			resultIntervals.push(new Interval(interval, interval));
		} else {
			// We have already started a interval we now have to close it.

			if (currIdx !== updatedIntervals.length - 1) {
				// Get a previous date
				const previousDate = new Date(
					interval.getTime() - 24 * 60 * 60 * 1000
				);
				// Push it as end of last interval
				resultIntervals[resultIntervals.length - 1].setEnd(
					previousDate
				);

				// Start a new interval with current interval
				resultIntervals.push(new Interval(interval, interval));
			} else {
				resultIntervals[resultIntervals.length - 1].setEnd(interval);
			}
		}

		return resultIntervals;
	}, result);

	return result;
};

IntervalSortStartegy.Strategy1.comparator = function (first, second) {
	return first.getTime() - second.getTime();
};

IntervalSortStartegy.Strategy2 = new IntervalSortStartegy();
IntervalSortStartegy.Strategy2.sort = function (intervals) {
	const result = [];
	intervals.reduce((resultIntervals, interval) => {
		if (resultIntervals.length === 0) {
			resultIntervals.push(new Interval(interval.start, interval.end));
		} else {
			const endDate = new Date(
				interval.start.getTime() - 24 * 60 * 60 * 1000
			);

			resultIntervals[resultIntervals.length - 1].setEnd(endDate);
			resultIntervals.push(new Interval(interval.start, interval.end));
		}

		return resultIntervals;
	}, result);

	return result;
};

class IntervalsCollection {
	intervals = [];
	strategy = new IntervalSortStartegy();

	addInterval(interval) {
		this.intervals.push(interval);
	}

	setStrategy(strategy) {
		this.strategy = strategy;
	}

	showIntervals() {
		const sortedIntervals = this.strategy.sort(this.intervals);
		sortedIntervals.forEach((interval) => interval.display());
	}
}

function getIntervals() {
	return [
		new Interval(new Date("01/01/18"), new Date("06/30/18")),
		new Interval(new Date("02/02/18"), new Date("05/23/18")),
		new Interval(new Date("03/03/18"), new Date("07/08/18")),
	];
}

function testCase1(intervalCollection) {
	intervalCollection.setStrategy(IntervalSortStartegy.Strategy1);

	intervalCollection.showIntervals();
}

function testCase2(intervalCollection) {
	intervalCollection.setStrategy(IntervalSortStartegy.Strategy2);

	intervalCollection.showIntervals();
}

function init() {
	const intervals = getIntervals();

	const intervalsCollection = new IntervalsCollection();
	intervals.forEach((interval) => intervalsCollection.addInterval(interval));

	testCase1(intervalsCollection);
	// testCase2(intervalsCollection);
}

init();
