const { default: Comparator } = require('../utils/Comparator');
const LinkedListNode = require('./LinkedListNode');
require('../utils/Comparator');

module.exports = class LinkedList {
    
    constructor(comparatorFunction) {

        this.head = null;
        this.tail = null;
        this.compare = new Comparator(comparatorFunction);

    }

    prepend(value) {

        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        if(!this.tail) {
            this.tail = newNode;
        }

        return this;

    }

    append(value) {

        const newNode = new LinkedListNode(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;

    }

    delete(value) {

        if(!this.head) {
            return null;
        }

        let deletedNode = null;

        // If the head must be deleted then make the next node that is different from the head to be the new head.
        while(this.head && this.compare.equal(this.head.value, value)) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;
        
    }
}