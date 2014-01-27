var LinkedList,
    test = require("tap").test;

test("load LinkedList class", function (t) {
  LinkedList = require("../lib/LinkedList");
  t.ok(LinkedList, "LinkedList class loaded");
  t.end();
});

test("empty constructor", function (t) {
  var l = new LinkedList();
  t.equal(l instanceof LinkedList, true, "should be an instance of LinkedList");
  t.equal(l.length, 0, "length should be 0");
  t.equal(l.head, undefined, "head should be undefined");
  t.end();
});

test("array constructor", function (t) {
  var l = new LinkedList([ "foo", "bar", "baz" ]);
  t.equal(l instanceof LinkedList, true, "should be an instance of LinkedList");
  t.equal(l.length, 3, "length should be 3");
  t.equal(l.head.value, "foo", "head.value should be foo");
  t.equal(l.head.next.value, "bar", "head.next.value should be bar");
  t.equal(l.head.next.next.value, "baz", "head.next.next.value should be baz");
  t.end();
});

test("LinkedList to array", function (t) {
  var l = new LinkedList();
  t.deepEqual(l.toArray(), [], "array should be empty");
  t.equal(l.length, 0, "length should be 0");
  l = new LinkedList([ "foo", "bar", "baz" ]);
  t.deepEqual(l.toArray(), [ "foo", "bar", "baz" ], "array should be: foo, bar, baz");
  t.equal(l.length, 3, "length should be 3");
  t.end();
});

test("get node at index", function (t) {
  var l = new LinkedList([ "foo", "bar", "baz" ]);
  t.equal(l.get(0).value, "foo", "0.value should be foo");
  t.equal(l.get(1).value, "bar", "1.value should be bar");
  t.equal(l.get(2).value, "baz", "2.value should be baz");
  t.end();
});

test("set node at index", function (t) {
  var l = new LinkedList([ "foo", "bar", "baz" ]);
  l.set(0, { "value": "cat" });
  t.deepEqual(l.toArray(), [ "cat", "bar", "baz" ], "l should be: cat, bar, baz");
  l.set(1, { "value": "dog" });
  t.deepEqual(l.toArray(), [ "cat", "dog", "baz" ], "l should be: cat, dog, baz");
  l.set(2, { "value": "rat" });
  t.deepEqual(l.toArray(), [ "cat", "dog", "rat" ], "l should be: cat, dog, rat");
  t.end();
});

test("insert node at index", function (t) {
  var l = new LinkedList();
  l.insert(0, { "value": "foo" });
  t.deepEqual(l.toArray(), [ "foo" ], "l should be: foo");
  t.equal(l.length, 1, "length should be 1");
  l.insert(1, { "value": "baz" });
  t.deepEqual(l.toArray(), [ "foo", "baz" ], "l should be: foo, baz");
  t.equal(l.length, 2, "length should be 2");
  l.insert(1, { "value": "bar" });
  t.deepEqual(l.toArray(), [ "foo", "bar", "baz" ], "l should be: foo, bar, baz");
  t.equal(l.length, 3, "length should be 3");
  t.end();
});

test("remove node at index", function (t) {
  var l = new LinkedList([ "foo", "bar", "baz" ]);
  l.remove(1);
  t.deepEqual(l.toArray(), [ "foo", "baz" ], "l should be: foo, baz");
  t.equal(l.length, 2, "length should be 2");
  l.remove(1);
  t.deepEqual(l.toArray(), [ "foo" ], "l should be: foo");
  t.equal(l.length, 1, "length should be 1");
  l.remove(0);
  t.deepEqual(l.toArray(), [], "l should be an empty array");
  t.equal(l.length, 0, "length should be 0");
  t.end();
});

test("prepend a node", function (t) {
  var l = new LinkedList([ "bar", "baz" ]);
  l.unshift({ "value": "foo" });
  t.deepEqual(l.toArray(), [ "foo", "bar", "baz" ], "l should be: foo, bar, baz");
  t.end();
});

test("append a node", function (t) {
  var l = new LinkedList([ "foo", "bar" ]);
  l.push({ "value": "baz" });
  t.deepEqual(l.toArray(), [ "foo", "bar", "baz" ], "l should be: foo, bar, baz");
  t.end();
});

test("concatenate lists", function (t) {
  var l1 = new LinkedList([ "foo" ]);
  var l2 = new LinkedList([ "bar" ]);
  var l3 = new LinkedList([ "baz" ]);
  l1.concat(l2, l3);
  t.deepEqual(l1.toArray(), [ "foo", "bar", "baz" ], "l should be: foo, bar, baz");
  t.end();
});

test("join", function (t) {
  var l = new LinkedList();
  t.equal(l.join(), "", "should be an empty string");
  l = new LinkedList([ "foo", "bar", "baz" ]);
  t.equal(l.join(), "foo,bar,baz", "should be sparated by ,");
  t.equal(l.join(42), "foo42bar42baz", "should be sparated by 42");
  t.equal(l.join({}), "foo{}bar{}baz", "should be sparated by {}");
  t.equal(l.join(", "), "foo, bar, baz", "should be sparated by \", \"");
  t.end();
});

test("forEach", function (t) {
  var l = new LinkedList([ "foo", "bar", "baz" ]);
  var res = l.forEach(function (val, idx, ll, context) {
    var v, i;
    switch (idx) {
      case 0: v = "foo"; i = 0; break;
      case 1: v = "bar"; i = 1; break;
      case 2: v = "baz"; i = 2; break;
    }
    t.equal(val, v, "val should be equal to " + v);
    t.equal(idx, i, "idx should be equal to " + i);
    t.deepEqual(ll, l, "ll should be the same as l");
    t.deepEqual(context, { "cat": "dog" }, "context should be the same");
  }, { "cat": "dog" });
  t.deepEqual(res, l, "should chain");
  t.end();
});

test("indexOf", function (t) {
  var l = new LinkedList([ "foo", "bar", "baz" ]);
  t.equal(l.indexOf("foo"), 0, "should find foo at 0");
  t.equal(l.indexOf("bar"), 1, "should find bar at 1");
  t.equal(l.indexOf("baz"), 2, "should find baz at 2");
  t.equal(l.indexOf("baz", 1), 2, "specifying a starting index should still find baz at 2");
  t.end();
});
