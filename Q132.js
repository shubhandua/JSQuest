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

    insertAt(position, value) {
        const newNode = new Node(value);
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        let count = 0;
        while (current && count < position - 1) {
            current = current.next;
            count++;
        }
        if (!current) return;
        newNode.next = current.next;
        current.next = newNode;
    }

    display() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value + ' -> ';
            current = current.next;
        }
        console.log(result + 'null');
    }
}

const list = new SinglyLinkedList();
[1, 2, 4].forEach(val => list.append(val));
list.insertAt(2, 3);
list.display();

