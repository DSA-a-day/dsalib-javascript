A singly linked list.

_Source: [./lib/LinkedList.js](../lib/LinkedList.js)_

<a name="tableofcontents"></a>

- <a name="toc_linkedlistarray"></a>[LinkedList](#linkedlistarray)
- <a name="toc_linkedlistprototypeconcatlist1-listn"></a><a name="toc_linkedlistprototype"></a>[LinkedList.prototype.concat](#linkedlistprototypeconcatlist1-listn)
- <a name="toc_linkedlistprototypeeverycallback-thisarg"></a>[LinkedList.prototype.every](#linkedlistprototypeeverycallback-thisarg)
- <a name="toc_linkedlistprototypeforeachcallback-thisarg"></a>[LinkedList.prototype.forEach](#linkedlistprototypeforeachcallback-thisarg)
- <a name="toc_linkedlistprototypegetindex"></a>[LinkedList.prototype.get](#linkedlistprototypegetindex)
- <a name="toc_linkedlistprototypeindexofsearch-fromindex"></a>[LinkedList.prototype.indexOf](#linkedlistprototypeindexofsearch-fromindex)
- <a name="toc_linkedlistprototypeinsertindex-node"></a>[LinkedList.prototype.insert](#linkedlistprototypeinsertindex-node)
- <a name="toc_linkedlistprototypejoinseparator"></a>[LinkedList.prototype.join](#linkedlistprototypejoinseparator)
- <a name="toc_linkedlistprototypepushnode"></a>[LinkedList.prototype.push](#linkedlistprototypepushnode)
- <a name="toc_linkedlistprototyperemovenode"></a>[LinkedList.prototype.remove](#linkedlistprototyperemovenode)
- <a name="toc_linkedlistprototypesetindex-node"></a>[LinkedList.prototype.set](#linkedlistprototypesetindex-node)
- <a name="toc_linkedlistprototypetoarray"></a>[LinkedList.prototype.toArray](#linkedlistprototypetoarray)
- <a name="toc_linkedlistprototypetostring"></a>[LinkedList.prototype.toString](#linkedlistprototypetostring)
- <a name="toc_linkedlistprototypeunshiftnode"></a>[LinkedList.prototype.unshift](#linkedlistprototypeunshiftnode)

# LinkedList(array)

> Constructor

**Parameters:**

- `{array} array` An array to convert into a LinkedList.

**Return:**

`{LinkedList}` The LinkedList.

<sub>Go: [TOC](#tableofcontents)</sub>

<a name="linkedlistprototype"></a>

# LinkedList.prototype.concat(list1-listN)

> Concatenates LinkedLists together.

**Parameters:**

- `{LinkedList} list1-listN` The LinkedLists to concatenate to the current [LinkedList](#linkedlistarray).

**Return:**

`{LinkedList}` The [LinkedList](#linkedlistarray).

<sub>Go: [TOC](#tableofcontents) | [LinkedList.prototype](#toc_linkedlistprototype)</sub>

# LinkedList.prototype.every(callback, thisArg)

> Determines whether each value in the [LinkedList](#linkedlistarray) passes a truth test.

**Parameters:**

- `{function} callback` The callback function to use as a truth test. Will be passed (value, index, [LinkedList](#linkedlistarray), [thisArg]). Should return true or false.
- `{object} thisArg` Optional context to pass as `this`.

**Return:**

`{boolean}` Whether every value in the [LinkedList](#linkedlistarray) passed the truth test.

<sub>Go: [TOC](#tableofcontents) | [LinkedList.prototype](#toc_linkedlistprototype)</sub>

# LinkedList.prototype.forEach(callback, thisArg)

> Executes a provided function once per node value.

**Parameters:**

- `{function} callback` The callback function to call for each node value. Will be passed (value, index, [LinkedList](#linkedlistarray), [thisArg]).
- `{object} thisArg` Optional context to pass as `this`.

**Return:**

`{LinkedList}` The [LinkedList](#linkedlistarray).

<sub>Go: [TOC](#tableofcontents) | [LinkedList.prototype](#toc_linkedlistprototype)</sub>

# LinkedList.prototype.get(index)

> Gets the node at an index.

**Parameters:**

- `{number} index` The index in the [LinkedList](#linkedlistarray) to get.

**Return:**

`{object}` The node.

<sub>Go: [TOC](#tableofcontents) | [LinkedList.prototype](#toc_linkedlistprototype)</sub>

# LinkedList.prototype.indexOf(search, fromIndex)

> Returns the first index at which a given value can be found in the [LinkedList](#linkedlistarray), or -1 if it is not present.

**Parameters:**

- `{mixed} search` The value to search for, uses `===` for comparison.
- `{number} fromIndex` Optional, the index to start at.

**Return:**

`{number}` The first index at which a given value can be found in the [LinkedList](#linkedlistarray), or -1 if it is not present.

<sub>Go: [TOC](#tableofcontents) | [LinkedList.prototype](#toc_linkedlistprototype)</sub>

# LinkedList.prototype.insert(index, node)

> Inserts a node at an index before existing nodes.

**Parameters:**

- `{number} index` The index in the [LinkedList](#linkedlistarray) to insert at.
- `{object} node` The node to insert.

**Return:**

`{LinkedList}` The [LinkedList](#linkedlistarray).

<sub>Go: [TOC](#tableofcontents) | [LinkedList.prototype](#toc_linkedlistprototype)</sub>

# LinkedList.prototype.join(separator)

> Joins the [LinkedList](#linkedlistarray) node values together with a separator string. Consistent with `Array.join()`.

**Parameters:**

- `{string} separator` The separator string to use, defaults to ",".

**Return:**

`{string}` The string of values separated by the separator.

<sub>Go: [TOC](#tableofcontents) | [LinkedList.prototype](#toc_linkedlistprototype)</sub>

# LinkedList.prototype.push(node)

> Appends a node to the [LinkedList](#linkedlistarray).

**Parameters:**

- `{object} node` The node to append.

**Return:**

`{LinkedList}` The [LinkedList](#linkedlistarray).

<sub>Go: [TOC](#tableofcontents) | [LinkedList.prototype](#toc_linkedlistprototype)</sub>

# LinkedList.prototype.remove(node)

> Removes a node at an index.

**Parameters:**

- `{object} node` The node to remove.

**Return:**

`{LinkedList}` The [LinkedList](#linkedlistarray).

<sub>Go: [TOC](#tableofcontents) | [LinkedList.prototype](#toc_linkedlistprototype)</sub>

# LinkedList.prototype.set(index, node)

> Sets the node at an index.

**Parameters:**

- `{number} index` The index in the [LinkedList](#linkedlistarray) to set.
- `{object} node` The node to set.

**Return:**

`{LinkedList}` The [LinkedList](#linkedlistarray).

<sub>Go: [TOC](#tableofcontents) | [LinkedList.prototype](#toc_linkedlistprototype)</sub>

# LinkedList.prototype.toArray()

> Returns an array representation of the [LinkedList](#linkedlistarray) values.

**Return:**

`{array}` The array representation of the [LinkedList](#linkedlistarray) values.

<sub>Go: [TOC](#tableofcontents) | [LinkedList.prototype](#toc_linkedlistprototype)</sub>

# LinkedList.prototype.toString()

> Returns a string representation of the [LinkedList](#linkedlistarray) values.

**Return:**

`{string}` The string representation of the [LinkedList](#linkedlistarray) values.

<sub>Go: [TOC](#tableofcontents) | [LinkedList.prototype](#toc_linkedlistprototype)</sub>

# LinkedList.prototype.unshift(node)

> Prepends a node to the [LinkedList](#linkedlistarray).

**Parameters:**

- `{object} node` The node to prepend.

**Return:**

`{LinkedList}` The [LinkedList](#linkedlistarray).

<sub>Go: [TOC](#tableofcontents) | [LinkedList.prototype](#toc_linkedlistprototype)</sub>

_&mdash;generated by [apidox](https://github.com/codeactual/apidox)&mdash;_
