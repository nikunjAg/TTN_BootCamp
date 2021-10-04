console.log("-----Question 10-----");

import SingleLinkedList, { Node } from "./q8.js";

class Stack extends SingleLinkedList {
	constructor() {
		super();
	}

	// to add a new element at the top of the stack
	// or at the start of the linked list
	push(node) {
		this.addFirst(node);
	}

	// to get the node at the top of the stack
	top() {
		return this.getFirst();
	}

	// to remove the node from the top of the stack
	pop() {
		if (!this.head) {
			console.log("Stack Underflow");
		} else {
			const deletedNode = this.head;
			this.head = this.head.next;
			--this.size;
			return deletedNode;
		}
	}

	display() {
		console.log("Listing the content of Stack...");
		super.display();
	}
}

const st = new Stack();

st.push(new Node(1));
st.push(new Node(5));
st.push(new Node(10));
st.pop();

st.push(new Node(8));
st.push(new Node(94));
st.pop();
console.log(st.top());
st.push(new Node(16));
st.display();
