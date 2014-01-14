var test = require("tap").test,
    Node;

test("load Node class", function (t) {
  Node = require("../lib/Node");
  t.ok(Node, "Node class loaded");
  t.end();
});

test("empty constructor", function (t) {
  var n = new Node();
  t.equal(n.prev, undefined, "prev should be undefined");
  t.equal(n.next, undefined, "next should be undefined");
  t.equal(n.value, undefined, "value should be undefined");
  t.equal(n.weight, undefined, "weight should be undefined");
  t.end();
});

test("options constructor", function (t) {
  var n1 = new Node();
  var n2 = new Node({ "prev": n1, "value": 42, "weight": 0 });
  t.deepEqual(n2.prev, n1, "prev should be n1");
  t.equal(n2.next, undefined, "next should be undefined");
  t.equal(n2.value, 42, "value should be 42");
  t.equal(n2.weight, 0, "weight should be 0");
  t.end();
});
