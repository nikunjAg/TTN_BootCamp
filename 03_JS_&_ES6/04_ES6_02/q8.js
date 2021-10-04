console.log("-----Question 8-----");

export class Node {
	_next;
	_val;

	constructor(val, next = null) {
		this._val = val;
		this._next = next;
	}

	get val() {
		return this._val;
	}
	set val(value) {
		this._val = value;
	}

	get next() {
		return this._next;
	}
	set next(value) {
		this._next = value;
	}
}

export default class SingleLinkedList {
	_head;
	_last;
	_size;
	constructor() {
		this.head = this.last = null;
		this.size = 0;
	}
	get head() {
		return this._head;
	}
	set head(value) {
		this._head = value;
	}
	get last() {
		return this._last;
	}
	set last(value) {
		this._last = value;
	}
	get size() {
		return this._size;
	}
	set size(value) {
		this._size = value;
	}

	// adds a new node at the start of the linked list
	addFirst(node) {
		if (!this.head) {
			this.head = this.last = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		++this.size;
	}

	// adds a new node at the end of the linked list
	addLast(node) {
		if (!this.last) {
			this.head = this.last = node;
		} else {
			this.last.next = node;
			this.last = node;
		}
		++this.size;
	}

	// returns length of the singly linked list
	length() {
		return this.size;
	}

	// returns the first(head) node of the singly linked list
	getFirst() {
		return this.head;
	}

	// returns the last node of the singly linked list
	getLast() {
		return this.last;
	}

	// displays the content of the linked list
	display() {
		let temp = this.head;
		while (temp) {
			console.log(temp.val);
			temp = temp.next;
		}
	}
}

const ll = new SingleLinkedList();
ll.addFirst(new Node(4));
console.log(ll.getFirst());
ll.addFirst(new Node(1));

console.log(ll.getFirst());
console.log(ll.getLast());

ll.addLast(new Node(10));
ll.addLast(new Node(9));

ll.addFirst(new Node(8));
console.log(ll.getFirst());
ll.addLast(new Node(80));
console.log(ll.getLast());

ll.display();
