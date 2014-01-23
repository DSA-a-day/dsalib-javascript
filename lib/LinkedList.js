var Node = require('./Node');

/** A singly linked list. */
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
  Returns an array representation of the LinkedList values.

  @return The array representation of the LinkedList values.
  */
  LinkedList.prototype.toArray = function () {
    var array = [], current = this.head;
    for (var i = 0; i < this.length; i++) {
      array[i] = current.value;
      current = current.next;
    }

    return array;
  }

  /**
  Gets the Node at an index.

  @param index The index in the LinkedList to get.
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

  /**
  Sets the Node at an index.

  @param index The index in the LinkedList to set.
  @param node The Node to set.
  @return The LinkedList.
  */
  LinkedList.prototype.set = function (index, node) {
    // First node
    if (index === 0) {
      node.next = this.head.next;
      this.head = node;
    }

    // Middle and last nodes
    else {
      var prev = this.get(index -1);
      var current = prev.next;
      var next = current.next; // will simply be `undefined` for the last node
      current = node;
      prev.next = current;
      current.next = next;
    }

    return this;
  }

  /**
  Inserts a Node at an index before existing nodes.

  @param index The index in the LinkedList to insert at.
  @param node The Node to insert.
  @return The LinkedList.
  */
  LinkedList.prototype.insert = function (index, node) {
    // First node
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    }

    // Middle and last nodes
    else {
      var prev = this.get(index -1);
      var current = prev.next;
      prev.next = node;
      node.next = current;
    }

    this.length ++;

    return this;
  }

  /**
  Removes a Node at an index.

  @param node The Node to remove.
  @return The LinkedList.
  */
  LinkedList.prototype.remove = function (index) {
    // First node
    if (index === 0) {
      this.head = this.head.next;
    }

    // Middle and last nodes
    else {
      var prev = this.get(index -1);
      var next = prev.next.next;
      prev.next = next;
    }

    this.length --;

    return this;
  }

  /**
  Prepends a Node to the LinkedList.

  @param node The Node to prepend.
  @return The LinkedList.
  */
  LinkedList.prototype.prepend = function (node) {
    return this.insert(0, node);
  }

  /**
  Appends a Node to the LinkedList.

  @param node The Node to append.
  @return The LinkedList.
  */
  LinkedList.prototype.append = function (node) {
    return this.insert(this.length, node);
  }

  /**
  Concatenates LinkedLists together. Consistent with `Array.concat()`.

  @param list1-listN The LinkedLists to concatenate to the current LinkedList.
  @return The LinkedList.
  */
  LinkedList.prototype.concat = function () {
    if (arguments.length === 0) return this;

    for (var i = 0; i < arguments.length; i++) {
      if (!(arguments[i] instanceof LinkedList)) return this;
      this.get(this.length - 1).next = arguments[i].head;
      this.length += arguments[i].length;
    }

    return this;
  }

  /**
  Joins the LinkedList Node values together with a separator string. Consistent with `Array.join()`.

  @param separator The separator string to use, defaults to ",".
  @return The string of values separated by the separator.
  */
  LinkedList.prototype.join = function (separator) {
    // Check separator
    if (separator === void 0) {
      separator = ",";
    }
    else if (typeof separator !== "string") {
      separator = JSON.stringify(separator);
    }

    // Iterate until node is reached
    var current = this.head, str = "";
    for (var i = 0; i < this.length; i++) {
      if (current.value !== void 0 || current.value !== null) {
        str += current.value;
        if (i < this.length - 1) str += separator;
      }
      current = current.next;
    }

    return str;
  }

  return LinkedList;
})();

module.exports = LinkedList;
