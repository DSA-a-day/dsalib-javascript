/** A generic node for data structures. */
var Node = (function() {
  /** Constructor */
  function Node(options) {
    this.prev = (options != null && options.prev != null) ? options.prev : void 0;
    this.next = (options != null && options.next != null) ? options.next : void 0;
    this.value = (options != null && options.value != null) ? options.value : void 0;
    this.weight = (options != null && options.weight != null) ? options.weight : void 0;
    return this;
  };

  return Node;
})();

module.exports = Node;
