/** A generic node for data structures. */
var Node = (function () {
  /**
  Constructor

  @param options An options hash. Valid options are:
    prev A pointer to the previous Node.
    next A pointer to the next Node.
    value The value of the Node.
    weight The weight of the Node.
  @return The Node.
  */
  function Node (options) {
    this.prev = (options != null && options.prev != null) ? options.prev : void 0;
    this.next = (options != null && options.next != null) ? options.next : void 0;
    this.value = (options != null && options.value != null) ? options.value : void 0;
    this.weight = (options != null && options.weight != null) ? options.weight : void 0;
    return this;
  }

  return Node;
})();

module.exports = Node;
