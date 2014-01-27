# LinkedList([array]) #

A [singly linked list](http://en.wikipedia.org/wiki/Linked_list#Singly_linked_list).

`array` - Optional, an array to convert into a LinkedList.

return - The LinkedList.

## LinkedList.prototype.toArray() ##

Returns an array representation of the LinkedList values.

return - The array representation of the LinkedList values.

## LinkedList.prototype.get(index) ##

Gets the Node at an index.

`index` - The index in the LinkedList to get.

return - The Node.

## LinkedList.prototype.set(index, node) ##

Sets the Node at an index.

`index` - The index in the LinkedList to set.
`node` - The Node to set.

return - The LinkedList.

## LinkedList.prototype.insert(index, node) ##

Inserts a Node at an index before existing nodes.

`index` - The index in the LinkedList to insert at.
`node` - The Node to insert.

return - The LinkedList.

## LinkedList.prototype.remove(index) ##

Removes a Node at an index.

`node` - The Node to remove.

return - The LinkedList.

## LinkedList.prototype.unshift(node) ##

Prepends a Node to the LinkedList.

`node` -  The Node to prepend.

return - The LinkedList.

## LinkedList.prototype.push(node) ##

Appends a Node to the LinkedList.

`node` - The Node to append.

return - The LinkedList.

## LinkedList.prototype.concat(list1, list2, ..., listN) ##

Concatenates LinkedLists together.

`list1-listN` - The LinkedLists to concatenate to the current LinkedList.

return - The LinkedList.

## LinkedList.prototype.join(separator) ##

Joins the LinkedList Node values together with a separator string. Consistent with `Array.join()`.

`separator` - The separator string to use, defaults to ",".
return - The string of values separated by the separator.

## LinkedList.prototype.forEach(callback, [thisArg]) ##

Executes a provided function once per node value.

`callback` - The callback function to call for each node value. Will be passed (value, index, LinkedList, [thisArg])
`thisArg` - Optional context to pass as `this`.

return - The LinkedList.

## LinkedList.prototype.indexOf(search, [fromIndex]) ##

Returns the first index at which a given value can be found in the LinkedList, or -1 if it is not present.

`search` - The value to search for.
`fromIndex` - Optional, the index to start at.

return - The first index at which a given value can be found in the LinkedList, or -1 if it is not present.
