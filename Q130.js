class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    displayReverse() {
        const stack = [];
        let current = this.head;
        while (current) {
            stack.push(current.value);
            current = current.next;
        }
        while (stack.length) {
            console.log(stack.pop());
        }
    }
}

const list = new SinglyLinkedList();
[1, 2, 3, 4, 5].forEach(val => list.append(val));
list.displayReverse();
