var Node = require('./Node');

/** A singly-linked list */
var LinkedList = (function () {
  /**
  Constructor

  @param array An array to convert into a LinkedList.
  @return The LinkedList.
  */
  function LinkedList (array) {
    // Create from an array
    if (array != null) {
      this.length = array.length;
      var prev, current;
      for (var i = 0; i < array.length; i++) {
        current = new Node({ "value": array[i] });

        // First node
        if (i === 0) {
          this.head = current; // Mark the head of the list
        }

        // Middle and last nodes
        else {
          prev.next = current;
        }

        prev = current;
      }
    }

    // Create an empty LinkedList
    else {
      this.length = 0;
      this.head = undefined;
    }

    return this;
  }

  /**
  Gets the Node at an index.

  @param index The index in the LinkedList to fetch.
  @return The Node.
  */
  LinkedList.prototype.get = function (index) {
    // Check for out of bounds index
    if (index > this.length || index < 0) {
      return -1;
    }

    // Iterate until node is reached
    var current = this.head;
    for (var i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  return LinkedList;
})();

module.exports = LinkedList;
