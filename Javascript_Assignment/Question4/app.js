const obj1 = {
    name: 'Nikunj',
    age: 22,
    hobbies: ['Cricket', 'Reading', 'Playing'],
    education: {
        highest: 'Graduation',
        completedIn: 2021
    }
};

// Many Ways

// Approach 1
// const obj2 = JSON.parse(JSON.stringify(obj1));

// Approach 2
const clone = (obj) => {
	var copy;
	
	// null checker and after that immutable checker
	if (obj == null || typeof obj !== 'object') return obj;
	
	// Copies Date
	if (obj instanceof Date) {
		copy = new Date();
		copy.setTime(obj.getTime());
		return copy;
	}
	
	// Copies Array
	if (obj instanceof Array) {
		copy = [];
		for(let a of obj) {
			copy.push(clone(a));
		}
		return copy;
	}
	
	// Copies Object
	if (obj instanceof Object) {
		copy = {};
		for(let key in obj) {
			if (obj.hasOwnProperty(key))
				copy[key] = clone(obj[key]);
		}
		return copy;
	}
	
	return new Error('Unable to copy object!!');
}

const obj2 = clone(obj1);

console.log('Original Object ', obj1);
console.log('Cloned Object ', obj2);