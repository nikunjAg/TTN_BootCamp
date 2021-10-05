console.log("-----Question 9-----");

class MyMap {
	// Can also be made private
	myMap;
	_size;

	constructor() {
		this.myMap = {};
		this._size = 0;
	}

	set(key, value) {
		if (!this.has(key)) ++this._size;
		this.myMap[key] = value;
	}

	get(key) {
		return this.myMap[key];
	}

	has(key) {
		return key in this.myMap;
	}

	delete(key) {
		if (this.has(key)) --this._size;
		delete this.myMap[key];
	}

	clear() {
		this.myMap = {};
		this._size = 0;
	}

	size() {
		return this._size;
	}

	keys() {
		return Object.keys(this.myMap);
	}

	values() {
		return Object.values(this.myMap);
	}

	entries() {
		return Object.entries(this.myMap);
	}
}

class MySet {
	mySet;
	_size;

	constructor() {
		this.mySet = [];
		this._size = 0;
	}

	findIndex(value) {
		return this.mySet.findIndex((el) => el === value);
	}

	add(value) {
		if (this.findIndex(value) === -1) {
			this.mySet.push(value);
			++this._size;
		}
		return this;
	}

	delete(value) {
		const idx = this.findIndex(value);
		if (idx !== -1) {
			this.mySet = [
				...this.mySet.slice(0, idx),
				...this.mySet.slice(idx + 1),
			];

			--this._size;
			return true;
		}
		return false;
	}

	has(value) {
		return this.findIndex(value) !== -1;
	}

	clear() {
		this.mySet = [];
		this._size = 0;
	}

	size() {
		return this._size;
	}
}

const hobbies = ["Sports", "Movies"];

const map = new Map();
map.set("name", "Nikunj");
map.set("age", 22);
map.set("hobbies", hobbies);

map.delete("age");

console.log("Map Entries");
for (let key of map.keys()) {
	console.log(key + " -> " + map.get(key));
}

const set = new Set();

set.add("Nikunj");
set.add(22);

set.add(hobbies);
console.log(set.size);
console.log(set);
set.add(22);
set.delete(hobbies);

console.log("Set Keys");
for (let key of set.keys()) {
	console.log(key);
}
