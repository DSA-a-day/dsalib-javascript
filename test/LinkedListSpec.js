var LinkedList,
    Node = require("../lib/Node"),
    test = require("tap").test;

test("load LinkedList class", function (t) {
  LinkedList = require("../lib/LinkedList");
  t.ok(LinkedList, "LinkedList class loaded");
  t.end();
});

test("empty constructor", function (t) {
  var l = new LinkedList();
  t.equal(l.length, 0, "length should be 0");
  t.equal(l.head, undefined, "head should be undefined");
  t.end();
});

test("array constructor", function (t) {
  var l = new LinkedList([ "foo", "bar", "baz" ]);
  t.equal(l.length, 3, "length should be 3");
  t.equal(l.head.value, "foo", "head.value should be foo");
  t.equal(l.head.next.value, "bar", "head.next.value should be bar");
  t.equal(l.head.next.next.value, "baz", "head.next.next.value should be baz");
  t.end();
});

test("get node at index", function (t) {
  var l = new LinkedList([ "foo", "bar", "baz" ]);
  t.equal(l.get(0).value, "foo", "0.value should be foo");
  t.equal(l.get(1).value, "bar", "1.value should be bar");
  t.equal(l.get(2).value, "baz", "2.value should be baz");
  t.end();
});
