/** A singly linked list. */
var LinkedList = (function () {
  /**
   * Constructor
   *
   * @param {array} array An array to convert into a LinkedList.
   * @return {LinkedList} The LinkedList.
   */
  function LinkedList (array) {
    // Create from an array
    if (array !== void 0) {
      this.length = array.length;
      var prev, current;
      for (var i = 0; i < array.length; i++) {
        current = { "value": array[i] };

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
   * Concatenates LinkedLists together.
   *
   * @param {LinkedList} list1-listN The LinkedLists to concatenate to the current LinkedList.
   * @return {LinkedList} The LinkedList.
   */
  LinkedList.prototype.concat = function () {
    if (arguments.length === 0) { return this; }

    for (var i = 0; i < arguments.length; i++) {
      if (!(arguments[i] instanceof LinkedList)) { return this; }
      this.get(this.length - 1).next = arguments[i].head;
      this.length += arguments[i].length;
    }

    return this;
  };

  /**
   * Determines whether each value in the LinkedList passes a truth test.
   *
   * @param {function} callback The callback function to use as a truth test. Will be passed (value, index, LinkedList, [thisArg]). Should return true or false.
   * @param {object} thisArg Optional context to pass as `this`.
   * @return {boolean} Whether every value in the LinkedList passed the truth test.
   */
   LinkedList.prototype.every = function (callback, thisArg) {
    // Iterate over each node and call callback for each node value
    var current = this.head;
    for (var i = 0; i < this.length; i++) {
      if (!callback(current.value, i, this, thisArg)) {
        return false;
      }
      current = current.next;
    }

    return true;
   };

  //TODO LinkedList.prototype.filter

  /**
   * Executes a provided function once per node value.
   *
   * @param {function} callback The callback function to call for each node value. Will be passed (value, index, LinkedList, [thisArg]).
   * @param {object} thisArg Optional context to pass as `this`.
   * @return {LinkedList} The LinkedList.
   */
  LinkedList.prototype.forEach = function (callback, thisArg) {
    // Iterate over each node and call callback for each node value
    var current = this.head;
    for (var i = 0; i < this.length; i++) {
      callback(current.value, i, this, thisArg);
      current = current.next;
    }

    return this;
  };

  /**
   * Gets the node at an index.
   *
   * @param {number} index The index in the LinkedList to get.
   * @return {object} The node.
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
  };

  /**
   * Returns the first index at which a given value can be found in the LinkedList, or -1 if it is not present.
   *
   * @param {mixed} search The value to search for, uses `===` for comparison.
   * @param {number} fromIndex Optional, the index to start at.
   * @return {number} The first index at which a given value can be found in the LinkedList, or -1 if it is not present.
   */
  LinkedList.prototype.indexOf = function (search, fromIndex) {
    var index = -1;

    // By default search the entire list
    fromIndex = (fromIndex === void 0) ? 0 : fromIndex;

    // Move to the starting index
    var current = this.head;
    for (var i = 0; i < fromIndex; i++) {
      current = current.next;
    }

    // Search the list //TODO optimize search
    for (i = fromIndex; i < this.length && index === -1; i++) {
      if (current.value === search) { index = i; }
      current = current.next;
    }

    return index;
  };

  /**
   * Inserts a node at an index before existing nodes.
   *
   * @param {number} index The index in the LinkedList to insert at.
   * @param {object} node The node to insert.
   * @return {LinkedList} The LinkedList.
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
  };

  /**
   * Joins the LinkedList node values together with a separator string. Consistent with `Array.join()`.
   *
   * @param {string} separator The separator string to use, defaults to ",".
   * @return {string} The string of values separated by the separator.
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
        if (i < this.length - 1) { str += separator; }
      }
      current = current.next;
    }

    return str;
  };

  //TODO LinkedList.prototype.lastIndexOf

  //TODO LinkedList.prototype.map

  //TODO LinkedList.prototype.pop

  /**
   * Appends a node to the LinkedList.
   *
   * @param {object} node The node to append.
   * @return {LinkedList} The LinkedList.
   */
  LinkedList.prototype.push = function (node) {
    return this.insert(this.length, node);
  };

  //TODO LinkedList.prototype.reduce

  /**
   * Removes a node at an index.
   *
   * @param {object} node The node to remove.
   * @return {LinkedList} The LinkedList.
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
  };

  //TODO LinkedList.prototype.reverse

  /**
   * Sets the node at an index.
   *
   * @param {number} index The index in the LinkedList to set.
   * @param {object} node The node to set.
   * @return {LinkedList} The LinkedList.
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
  };

  //TODO LinkedList.prototype.shift

  //TODO LinkedList.prototype.sort

  /**
   * Returns an array representation of the LinkedList values.
   *
   * @return {array} The array representation of the LinkedList values.
   */
  LinkedList.prototype.toArray = function () {
    var array = [], current = this.head;
    for (var i = 0; i < this.length; i++) {
      array[i] = current.value;
      current = current.next;
    }

    return array;
  };

  /**
   * Returns a string representation of the LinkedList values.
   *
   * @return {string} The string representation of the LinkedList values.
   */
  LinkedList.prototype.toString = function () {
    var string = "", current = this.head;
    for (var i = 0; i < this.length - 1; i++) {
      string += current.value + " -> ";
      current = current.next;
    }
    string += current.value + "";

    return string;
  };

  /**
   * Prepends a node to the LinkedList.
   *
   * @param {object} node The node to prepend.
   * @return {LinkedList} The LinkedList.
   */
  LinkedList.prototype.unshift = function (node) {
    return this.insert(0, node);
  };

  return LinkedList;
})();

module.exports = LinkedList;
